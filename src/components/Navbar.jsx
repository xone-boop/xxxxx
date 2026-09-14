import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="navbar" role="banner">
        <div className="container nav-flex">
          <Link to="/" className="brand-logo" aria-label="PrimeClick Agency">
            <div className="brand-symbol" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <span className="brand-name">Prime<span>Click</span></span>
          </Link>

          <nav className="nav-menu-desktop" role="navigation" aria-label="Primary Navigation">
            <NavLink to="/" className="nav-link-item">Home</NavLink>
            <NavLink to="/services" className="nav-link-item">Layanan</NavLink>
            <NavLink to="/case-studies" className="nav-link-item">Studi Kasus</NavLink>
            <NavLink to="/calculator" className="nav-link-item">Cost Calculator</NavLink>
            <NavLink to="/contact" className="nav-link-item">Kontak & Audit</NavLink>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/contact" className="btn btn-primary nav-desktop-cta">
              <span>Book Strategy Call</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <button
              className="mobile-nav-toggle"
              aria-label="Toggle Navigation"
              aria-expanded={navOpen}
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer-overlay ${navOpen ? 'active' : ''}`}
        aria-hidden="true"
        onClick={() => setNavOpen(false)}
      />
      <aside className={`mobile-drawer ${navOpen ? 'active' : ''}`} role="dialog">
        <div className="mobile-drawer-list">
          <NavLink to="/" className="mobile-link" onClick={() => setNavOpen(false)}><span>Home</span></NavLink>
          <NavLink to="/services" className="mobile-link" onClick={() => setNavOpen(false)}><span>Layanan</span></NavLink>
          <NavLink to="/case-studies" className="mobile-link" onClick={() => setNavOpen(false)}><span>Studi Kasus</span></NavLink>
          <NavLink to="/calculator" className="mobile-link" onClick={() => setNavOpen(false)}><span>Cost Calculator</span></NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={() => setNavOpen(false)}><span>Kontak & Audit</span></NavLink>
        </div>
        <div>
          <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setNavOpen(false)}>
            <span>Book Strategy Call</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
