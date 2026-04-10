"use client";
import React, { useState } from 'react';

const mockVendors = [
  { id: 1, name: 'Modest Boutique NYC', match: '98%', items: [
    { title: 'Pleated Maxi Skirt', price: '$45', img: 'https://via.placeholder.com/200/fed7d7/2d3748?text=Maxi' },
    { title: 'Oversized Blazer', price: '$60', img: 'https://via.placeholder.com/200/e2e8f0/2d3748?text=Blazer' }
  ]},
  { id: 2, name: 'Hijab House', match: '92%', items: [
    { title: 'Premium Modal Hijab', price: '$15', img: 'https://via.placeholder.com/200/f4f0eb/2d3748?text=Hijab' },
    { title: 'Linen Tunic', price: '$55', img: 'https://via.placeholder.com/200/276749/ffffff?text=Tunic' }
  ]}
];

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState('For You');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--accent-navy)', marginBottom: '0.5rem' }}>Curated Marketplace</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Shop your missing pieces from local, affordable vendors.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: 'var(--border-color)', padding: '0.25rem', borderRadius: 'var(--border-radius-md)' }}>
          {['For You', 'Local Vendors', 'Trending'].map(tab => (
            <button 
              key={tab} 
              className="btn hover-lift" 
              onClick={() => setActiveTab(tab)}
              style={{ 
                backgroundColor: activeTab === tab ? 'white' : 'transparent', 
                color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                boxShadow: activeTab === tab ? 'var(--shadow-sm)' : 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {mockVendors.map(vendor => (
          <div key={vendor.id} className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {vendor.name} 
                  <span style={{ fontSize: '0.9rem', backgroundColor: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '12px', color: 'var(--text-secondary)' }}>
                    {vendor.match} Match Based on Wardrobe
                  </span>
                </h2>
              </div>
              <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>View Store</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {vendor.items.map((item, idx) => (
                <div key={idx} className="glass-panel hover-lift" style={{ overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, color: 'var(--accent-emerald)' }}>{item.price}</span>
                      <button className="btn btn-navy" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
