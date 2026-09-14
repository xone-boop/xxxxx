import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid-top">
          <div className="footer-col">
            <Link to="/" className="brand-logo" style={{ marginBottom: '12px' }}>
              <div className="brand-symbol" aria-hidden="true">&#x25B2;</div>
              <span className="brand-name">Prime<span>Click</span></span>
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '13.5px', maxWidth: '280px' }}>
              Performance marketing agency berfokus pada efisiensi ad spend dan profit nyata.
            </p>
          </div>

          <div className="footer-col">
            <h5>Layanan</h5>
            <ul>
              <li><Link to="/services">Meta Ads Management</Link></li>
              <li><Link to="/services">Shopee Ads Domination</Link></li>
              <li><Link to="/services">Creative Strategy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Navigasi</h5>
            <ul>
              <li><Link to="/case-studies">Studi Kasus</Link></li>
              <li><Link to="/calculator">ROAS Simulator</Link></li>
              <li><Link to="/contact">Konsultasi & Audit</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Kontak</h5>
            <p style={{ color: 'var(--color-text-body)', marginBottom: '10px', fontSize: '13.5px' }}>
              Senin - Sabtu: 09:00 - 18:00 WIB
            </p>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '12.5px' }}>
              <span>Hubungi Kami</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div>© 2026 PrimeClick Performance Marketing Agency.</div>
          <div>Data-Driven • Profit-Oriented</div>
        </div>
      </div>
    </footer>
  );
}
