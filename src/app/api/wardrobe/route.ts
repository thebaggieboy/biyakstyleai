import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const user = getUserFromRequest(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const items = await prisma.wardrobeItem.findMany({
      where: { userId: user.userId },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    console.error('Get wardrobe error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const tokenUser = getUserFromRequest(req);
  if (!tokenUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { name, type, color, fabric, imageUrl, tags } = await req.json();
    if (!name || !type || !color) {
      return NextResponse.json({ error: 'name, type, and color are required' }, { status: 400 });
    }

    const item = await prisma.wardrobeItem.create({
      data: {
        userId: tokenUser.userId,
        name,
        type,
        color,
        fabric,
        imageUrl,
        tags: tags ? JSON.stringify(tags) : null,
      },
    });
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error('Create wardrobe item error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
