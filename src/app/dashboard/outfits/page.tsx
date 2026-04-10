"use client";
import React, { useState } from 'react';

// Mock datastore
const tops = [
  { id: 't1', name: 'Silk Blouse', color: 'Cream' },
  { id: 't2', name: 'Chunky Knit', color: 'Oatmeal' },
];
const bottoms = [
  { id: 'b1', name: 'Wide Trousers', color: 'Navy' },
  { id: 'b2', name: 'Maxi Skirt', color: 'Blush' },
];
const outerwear = [
  { id: 'o1', name: 'Longline Cardigan', color: 'Oatmeal' },
];

export default function OutfitBuilder() {
  const [selectedTop, setSelectedTop] = useState<any>(null);
  const [selectedBottom, setSelectedBottom] = useState<any>(null);
  const [selectedOuterwear, setSelectedOuterwear] = useState<any>(null);

  const [savedOutfits, setSavedOutfits] = useState<any[]>([]);

  const saveOutfit = () => {
    if(!selectedTop && !selectedBottom && !selectedOuterwear) return;
    setSavedOutfits([...savedOutfits, { top: selectedTop, bottom: selectedBottom, outerwear: selectedOuterwear, id: Date.now() }]);
    setSelectedTop(null); setSelectedBottom(null); setSelectedOuterwear(null);
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', color: 'var(--accent-navy)', marginBottom: '1rem' }}>Mix & Match Outfit Builder</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Layer your clothes to create beautiful, modest outfits.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(350px, 1.5fr)', gap: '3rem' }}>
        
        {/* Wardrobe Selection */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Your Items</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Tops</h3>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
              {tops.map(t => (
                <div key={t.id} onClick={() => setSelectedTop(t)} style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', cursor: 'pointer', minWidth: '120px', textAlign: 'center', backgroundColor: selectedTop?.id === t.id ? 'var(--bg-secondary)' : 'transparent', transition: 'all 0.2s' }}>
                  👔 {t.name}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Bottoms</h3>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
              {bottoms.map(b => (
                <div key={b.id} onClick={() => setSelectedBottom(b)} style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', cursor: 'pointer', minWidth: '120px', textAlign: 'center', backgroundColor: selectedBottom?.id === b.id ? 'var(--bg-secondary)' : 'transparent', transition: 'all 0.2s' }}>
                  👖 {b.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Layers / Outerwear</h3>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
              {outerwear.map(o => (
                <div key={o.id} onClick={() => setSelectedOuterwear(o)} style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius-sm)', cursor: 'pointer', minWidth: '120px', textAlign: 'center', backgroundColor: selectedOuterwear?.id === o.id ? 'var(--bg-secondary)' : 'transparent', transition: 'all 0.2s' }}>
                  🧥 {o.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outfit Canvas */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="glass-panel" style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', backgroundColor: 'var(--bg-primary)' }}>
             {!selectedTop && !selectedBottom && !selectedOuterwear ? (
               <p style={{ color: 'var(--text-secondary)' }}>Select items from the left to start building.</p>
             ) : (
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '300px' }}>
                 {selectedOuterwear && <div style={{ padding: '1.5rem', backgroundColor: 'var(--accent-blush)', borderRadius: 'var(--border-radius-sm)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>{selectedOuterwear.name} (Layer)</div>}
                 {selectedTop && <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', border: '2px solid var(--accent-navy)', borderRadius: 'var(--border-radius-sm)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>{selectedTop.name}</div>}
                 {selectedBottom && <div style={{ padding: '3rem 2rem', backgroundColor: 'var(--bg-secondary)', border: '2px solid var(--accent-emerald)', borderRadius: 'var(--border-radius-sm)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>{selectedBottom.name}</div>}
               </div>
             )}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem', gap: '1rem' }}>
             <button className="btn btn-outline" onClick={() => { setSelectedTop(null); setSelectedBottom(null); setSelectedOuterwear(null); }}>Clear</button>
             <button className="btn btn-primary" onClick={saveOutfit}>Save Outfit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
