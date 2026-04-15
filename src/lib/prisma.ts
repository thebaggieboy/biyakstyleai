import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma_new: PrismaClient };

function createPrismaClient() {
  return new PrismaClient();
}

export const prisma = globalForPrisma.prisma_new ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma_new = prisma;
