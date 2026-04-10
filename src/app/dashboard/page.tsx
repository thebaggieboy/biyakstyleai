"use client";
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface WardrobeItem {
  id: number;
  name: string;
  type: string;
  color: string;
  fabric?: string;
  imageUrl?: string;
}

const categories = ['All', 'Top', 'Bottom', 'Dress', 'Outerwear', 'Accessory'];

const typeColors: Record<string, string> = {
  Top: '#e9f5f0', Bottom: '#e8edf5', Dress: '#f5e8f0', Outerwear: '#f5f0e8', Accessory: '#f5e8e8'
};
const typeEmoji: Record<string, string> = {
  Top: '👔', Bottom: '👖', Dress: '👗', Outerwear: '🧥', Accessory: '👜'
};

export default function DigitalCloset() {
  const { token, user } = useAuth();
  const router = useRouter();
  const [items, setItems] = useState<WardrobeItem[]>([]);
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', type: 'Top', color: '', fabric: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) { router.push('/login'); return; }
    fetchItems();
  }, [token]);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/wardrobe', { headers: { Authorization: `Bearer ${token}` } });
      if (res.ok) setItems(await res.json());
    } finally { setIsLoading(false); }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsAdding(true);
    try {
      const res = await fetch('/api/wardrobe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const item = await res.json();
        setItems(prev => [item, ...prev]);
        setShowForm(false);
        setForm({ name: '', type: 'Top', color: '', fabric: '' });
      } else {
        const d = await res.json();
        setError(d.error || 'Failed to add item');
      }
    } finally { setIsAdding(false); }
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/wardrobe/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const filtered = filter === 'All' ? items : items.filter(i => i.type === filter);
  const stats = { total: items.length, types: [...new Set(items.map(i => i.type))].length };

  return (
    <div>
      {/* Header */}
      <div className="closet-header">
        <div>
          <h1 style={{ fontSize: '2rem', color: 'var(--accent-navy)', marginBottom: '0.25rem' }}>
            {user?.name ? `${user.name.split(' ')[0]}'s Wardrobe` : 'Your Digital Closet'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            {stats.total} items across {stats.types} categories
          </p>
        </div>
        <button className="btn btn-primary add-btn" onClick={() => setShowForm(true)}>+ Add Item</button>
      </div>

      {/* Stats Strip */}
      <div className="stats-strip">
        {['Total Items', 'Categories', 'Outfits Built'].map((label, i) => (
          <div key={label} className="stat-card">
            <span className="stat-value">{i === 0 ? stats.total : i === 1 ? stats.types : 0}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="filter-bar">
        {categories.map(cat => (
          <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
            {typeEmoji[cat] ?? '✨'} {cat}
          </button>
        ))}
      </div>

      {/* Add Item Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-card animate-fade-in" onClick={e => e.stopPropagation()}>
            <h2 style={{ marginBottom: '1.5rem', color: 'var(--accent-navy)' }}>Add New Item</h2>
            <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input className="form-input" placeholder="Item name (e.g. Silk Blouse)" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              <select className="form-input" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                {['Top','Bottom','Dress','Outerwear','Accessory'].map(t => <option key={t}>{t}</option>)}
              </select>
              <input className="form-input" placeholder="Color (e.g. Navy Blue)" value={form.color} onChange={e => setForm({...form, color: e.target.value})} required />
              <input className="form-input" placeholder="Fabric (optional, e.g. Linen)" value={form.fabric} onChange={e => setForm({...form, fabric: e.target.value})} />
              {error && <p style={{ color: '#e53e3e', fontSize: '0.9rem' }}>{error}</p>}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)} style={{ flex: 1 }}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={isAdding} style={{ flex: 1 }}>
                  {isAdding ? 'Adding...' : 'Add to Closet'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Wardrobe Grid */}
      {isLoading ? (
        <div className="empty-state">
          <div className="spinner-ring" />
          <p>Loading your wardrobe...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👗</div>
          <h3>Your closet is empty</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Start by adding your first piece!</p>
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Add First Item</button>
        </div>
      ) : (
        <div className="wardrobe-grid">
          {filtered.map(item => (
            <div key={item.id} className="wardrobe-card">
              <div className="card-image" style={{ backgroundColor: typeColors[item.type] ?? '#f4f0eb' }}>
                <span className="card-emoji">{typeEmoji[item.type] ?? '✨'}</span>
              </div>
              <div className="card-body">
                <div className="card-type-badge">{item.type}</div>
                <h3 className="card-name">{item.name}</h3>
                <p className="card-meta">{item.color}{item.fabric ? ` · ${item.fabric}` : ''}</p>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>✕</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .closet-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
        .stats-strip { display: flex; gap: 1rem; margin-bottom: 2rem; }
        .stat-card { background: var(--glass-bg); backdrop-filter: var(--glass-blur); border: var(--glass-border); border-radius: 12px; padding: 1rem 1.5rem; text-align: center; flex: 1; }
        .stat-value { display: block; font-size: 2rem; font-weight: 700; color: var(--accent-navy); }
        .stat-label { font-size: 0.8rem; color: var(--text-secondary); }
        .filter-bar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .filter-btn { padding: 0.5rem 1rem; border-radius: 24px; border: 1.5px solid var(--border-color); background: transparent; cursor: pointer; font-size: 0.9rem; color: var(--text-secondary); transition: all 0.2s; font-family: inherit; }
        .filter-btn.active { background: var(--accent-navy); color: white; border-color: var(--accent-navy); }
        .filter-btn:hover:not(.active) { background: var(--bg-secondary); color: var(--text-primary); }
        .wardrobe-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1.25rem; }
        .wardrobe-card { background: white; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s; position: relative; }
        .wardrobe-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        .card-image { height: 160px; display: flex; align-items: center; justify-content: center; }
        .card-emoji { font-size: 3.5rem; }
        .card-body { padding: 1rem; }
        .card-type-badge { display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: var(--bg-secondary); color: var(--text-secondary); padding: 2px 8px; border-radius: 6px; margin-bottom: 0.4rem; }
        .card-name { font-size: 1rem; font-weight: 600; margin-bottom: 0.2rem; color: var(--text-primary); }
        .card-meta { font-size: 0.8rem; color: var(--text-secondary); }
        .delete-btn { position: absolute; top: 0.6rem; right: 0.6rem; background: rgba(255,255,255,0.9); border: none; border-radius: 50%; width: 26px; height: 26px; cursor: pointer; font-size: 0.7rem; color: var(--text-secondary); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s; }
        .wardrobe-card:hover .delete-btn { opacity: 1; }
        .empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; text-align: center; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.3); backdrop-filter: blur(4px); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 2rem; }
        .modal-card { background: white; border-radius: 20px; padding: 2rem; width: 100%; max-width: 420px; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .form-input { width: 100%; padding: 0.75rem 1rem; border: 1.5px solid var(--border-color); border-radius: 10px; font-size: 0.95rem; background: var(--bg-primary); color: var(--text-primary); outline: none; font-family: inherit; transition: border-color 0.2s; box-sizing: border-box; }
        .form-input:focus { border-color: var(--accent-emerald); }
        .spinner-ring { width: 40px; height: 40px; border: 3px solid var(--border-color); border-top-color: var(--accent-emerald); border-radius: 50%; animation: spin 0.8s linear infinite; margin-bottom: 1rem; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
