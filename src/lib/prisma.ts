import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

const globalForPrisma = globalThis as unknown as { prisma_new: PrismaClient };

function createPrismaClient() {
  const dbUrl = process.env.DATABASE_URL || 'file:prisma/dev.db';
  const libsql = createClient({ url: dbUrl });
  const adapter = new PrismaLibSql(libsql);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new PrismaClient({ adapter, datasourceUrl: dbUrl } as any);
}

export const prisma = globalForPrisma.prisma_new ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma_new = prisma;
