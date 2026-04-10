import { NextResponse } from 'next/server';

const marketplaceData = [
  {
    id: 1,
    vendorName: 'Modest Boutique Co.',
    vendorLocation: 'New York, NY',
    match: '98%',
    featured: true,
    items: [
      { id: 101, title: 'Pleated Maxi Skirt', price: 45, currency: 'USD', imageUrl: '/placeholder-skirt.jpg', tag: 'Wardrobe Gap' },
      { id: 102, title: 'Relaxed Linen Blazer', price: 60, currency: 'USD', imageUrl: '/placeholder-blazer.jpg', tag: 'Trending' },
      { id: 103, title: 'High-Neck Jersey Top', price: 28, currency: 'USD', imageUrl: '/placeholder-top.jpg', tag: 'Budget Pick' },
    ],
  },
  {
    id: 2,
    vendorName: 'Hijab House',
    vendorLocation: 'Los Angeles, CA',
    match: '91%',
    featured: false,
    items: [
      { id: 201, title: 'Premium Modal Hijab', price: 15, currency: 'USD', imageUrl: '/placeholder-hijab.jpg', tag: 'Best Seller' },
      { id: 202, title: 'Linen Tunic Dress', price: 55, currency: 'USD', imageUrl: '/placeholder-tunic.jpg', tag: 'New Arrival' },
    ],
  },
  {
    id: 3,
    vendorName: 'Layers by Amira',
    vendorLocation: 'Chicago, IL',
    match: '85%',
    featured: false,
    items: [
      { id: 301, title: 'Longline Denim Cardigan', price: 72, currency: 'USD', imageUrl: '/placeholder-cardigan.jpg', tag: 'New Arrival' },
      { id: 302, title: 'Wide-Leg Palazzo Pants', price: 48, currency: 'USD', imageUrl: '/placeholder-pants.jpg', tag: 'Budget Pick' },
    ],
  },
];

export async function GET() {
  return NextResponse.json(marketplaceData);
}
