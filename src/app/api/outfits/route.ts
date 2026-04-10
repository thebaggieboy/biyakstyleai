import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const tokenUser = getUserFromRequest(req);
  if (!tokenUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const outfits = await prisma.outfit.findMany({
      where: { userId: tokenUser.userId },
      include: {
        items: {
          include: { wardrobeItem: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(outfits);
  } catch (error) {
    console.error('Get outfits error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const tokenUser = getUserFromRequest(req);
  if (!tokenUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { name, occasion, itemIds } = await req.json();
    if (!name || !itemIds || itemIds.length === 0) {
      return NextResponse.json({ error: 'name and itemIds are required' }, { status: 400 });
    }

    const outfit = await prisma.outfit.create({
      data: {
        userId: tokenUser.userId,
        name,
        occasion,
        items: {
          create: itemIds.map((wardrobeItemId: number) => ({ wardrobeItemId })),
        },
      },
      include: { items: { include: { wardrobeItem: true } } },
    });
    return NextResponse.json(outfit, { status: 201 });
  } catch (error) {
    console.error('Create outfit error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
