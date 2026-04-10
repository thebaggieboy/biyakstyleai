import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserFromRequest } from '@/lib/auth';

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const tokenUser = getUserFromRequest(req);
  if (!tokenUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const itemId = parseInt(id);

  try {
    const item = await prisma.wardrobeItem.findUnique({ where: { id: itemId } });
    if (!item || item.userId !== tokenUser.userId) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    await prisma.wardrobeItem.delete({ where: { id: itemId } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete wardrobe item error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const tokenUser = getUserFromRequest(req);
  if (!tokenUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  const itemId = parseInt(id);
  const body = await req.json();

  try {
    const item = await prisma.wardrobeItem.findUnique({ where: { id: itemId } });
    if (!item || item.userId !== tokenUser.userId) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    const updated = await prisma.wardrobeItem.update({ where: { id: itemId }, data: body });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Update wardrobe item error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
