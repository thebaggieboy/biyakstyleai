"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const links = [
  { name: 'My Closet', href: '/dashboard', icon: '👗' },
  { name: 'Outfit Builder', href: '/dashboard/outfits', icon: '✨' },
  { name: 'Virtual Try-On', href: '/dashboard/try-on', icon: '📸' },
  { name: 'Marketplace', href: '/dashboard/market', icon: '🛍️' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="dash-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <Link href="/" className="brand-link">
            <span className="brand-dot" />
            BiyakStyle AI
          </Link>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-label">Navigation</p>
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
              >
                <span className="sidebar-icon">{link.icon}</span>
                <span>{link.name}</span>
                {isActive && <span className="active-dot" />}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar">{user?.name?.[0]?.toUpperCase() ?? 'S'}</div>
          <div className="user-info">
            <p className="user-name">{user?.name ?? 'You'}</p>
            <p className="user-email">{user?.email ?? ''}</p>
          </div>
          <button className="logout-btn" onClick={handleLogout} title="Log out">↩</button>
        </div>
      </aside>

      {/* Main */}
      <main className="dash-main">
        <div className="dash-content">
          {children}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .dash-shell { display: flex; min-height: 100vh; background: #f7f5f2; }
        .sidebar {
          width: 240px;
          min-width: 240px;
          background: white;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }
        .sidebar-brand { margin-bottom: 2rem; padding: 0 0.5rem; }
        .brand-link { display: flex; align-items: center; gap: 0.5rem; font-weight: 800; font-size: 1rem; color: var(--accent-navy); }
        .brand-dot { width: 8px; height: 8px; background: var(--accent-emerald); border-radius: 50%; display: inline-block; }
        .sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 0.2rem; }
        .nav-section-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.08em; color: var(--text-secondary); text-transform: uppercase; padding: 0 0.75rem; margin-bottom: 0.5rem; }
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.75rem;
          border-radius: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.15s;
          position: relative;
          text-decoration: none;
        }
        .sidebar-link:hover { background: var(--bg-secondary); color: var(--text-primary); }
        .sidebar-link--active { background: linear-gradient(135deg, rgba(26,54,93,0.08), rgba(39,103,73,0.08)); color: var(--accent-navy); font-weight: 600; }
        .sidebar-icon { font-size: 1.1rem; width: 22px; text-align: center; }
        .active-dot { width: 6px; height: 6px; background: var(--accent-emerald); border-radius: 50%; margin-left: auto; }
        .sidebar-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 0.5rem;
          border-top: 1px solid var(--border-color);
          margin-top: 1rem;
        }
        .user-avatar { width: 36px; height: 36px; min-width: 36px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-navy), var(--accent-emerald)); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 0.9rem; }
        .user-name { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
        .user-email { font-size: 0.7rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
        .logout-btn { margin-left: auto; background: none; border: none; cursor: pointer; font-size: 1.1rem; color: var(--text-secondary); padding: 0.3rem; border-radius: 6px; transition: background 0.2s; }
        .logout-btn:hover { background: var(--bg-secondary); }
        .dash-main { flex: 1; overflow-y: auto; }
        .dash-content { padding: 2.5rem 3rem; max-width: 1100px; }
        @media (max-width: 768px) {
          .sidebar { width: 60px; min-width: 60px; }
          .sidebar-link span:not(.sidebar-icon) { display: none; }
          .brand-link span:not(.brand-dot) { display: none; }
          .user-info, .logout-btn, .nav-section-label { display: none; }
          .dash-content { padding: 1.5rem; }
        }
      `}} />
    </div>
  );
}
