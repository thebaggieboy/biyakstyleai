"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = mode === 'login'
      ? await login(email, password)
      : await register(email, password, name);
    setLoading(false);
    if (result.error) { setError(result.error); return; }
    router.push('/dashboard');
  };

  return (
    <div className="auth-bg">
      <div className="auth-card animate-fade-in">
        <Link href="/" className="auth-logo">BiyakStyle AI</Link>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--accent-navy)' }}>
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          {mode === 'login' ? 'Sign in to your wardrobe' : 'Start your modest styling journey'}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mode === 'register' && (
            <input
              className="form-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          )}
          <input
            className="form-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: '#e53e3e', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}
          <button className="btn btn-primary" type="submit" disabled={loading} style={{ marginTop: '0.5rem', padding: '0.9rem' }}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}
            style={{ background: 'none', border: 'none', color: 'var(--accent-emerald)', cursor: 'pointer', fontWeight: 600 }}
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .auth-bg {
          min-height: 100vh;
          background: linear-gradient(135deg, #f4f0eb 0%, #e8f4f1 50%, #e8eef4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .auth-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 20px;
          padding: 2.5rem;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }
        .auth-logo {
          display: block;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--accent-navy);
          margin-bottom: 1.5rem;
        }
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1.5px solid var(--border-color);
          border-radius: 10px;
          font-size: 1rem;
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: border-color 0.2s;
          outline: none;
          font-family: inherit;
        }
        .form-input:focus { border-color: var(--accent-emerald); }
      `}} />
    </div>
  );
}
