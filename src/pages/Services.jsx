import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesList = [
    {
      title: 'Meta Ads Architecture',
      badge: 'Instagram & Facebook Ads',
      desc: 'Pengelolaan campaign CBO/ABO terintegrasi dengan Conversion API (CAPI). Kami membangun funnel bertingkat dari cold prospect, retargeting dinamis, hingga repeat order acquisition.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      deliverables: ['Conversion API (CAPI)', 'Audience Stacking', 'Advantage+ Budgets', 'Dynamic Retargeting', 'Fatigue Prevention']
    },
    {
      title: 'Shopee Ads Domination',
      badge: 'Marketplace Scale',
      desc: 'Optimasi kata kunci pencarian, iklan produk serupa, dan automatic bidding untuk mendominasi peringkat organik sekaligus memaksimalkan Gross Merchandise Value (GMV).',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      deliverables: ['Keyword Bidding', 'Product Affinity Ads', 'CIR Compression', 'GMV Maxima', 'Flash Event Scaling']
    },
    {
      title: 'High-Velocity Creative Lab',
      badge: 'Content & Motion Sprint',
      desc: 'Materi visual dan angle adalah penentu utama kemenangan lelang iklan modern. Kami merancang hook angle, storyboard UGC, visual copywriting, dan variasi video dinamis.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      deliverables: ['Hook Testing Matrix', 'UGC Storyboards', 'Motion Ads 4K', 'Offer Repackaging', 'Creative Audit']
    },
    {
      title: 'Full-Funnel Attribution & Reporting',
      badge: 'Data Integrity',
      desc: 'Transparansi data tanpa pembiasan reporting. Kami mengintegrasikan Google Tag Manager, CAPI, dan custom dashboard reporting agar setiap rupiah ad spend terverifikasi.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      deliverables: ['Google Tag Manager', 'First-Party CAPI', 'Custom GA4 Pipelines', 'Weekly Metric Sync', 'Zero Attribution Loss']
    }
  ];

  return (
    <main className="container section-spacing">
      <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
        <div className="section-eyebrow"><span className="eyebrow-indicator" /> Spesialisasi Layanan</div>
        <h1 className="section-header-title">Arsitektur kampanye iklan berorientasi profit.</h1>
        <p className="section-header-desc">
          Kami memadukan media buying algoritmik, materi visual persuasif, dan akuntabilitas data untuk menghasilkan pertumbuhan yang konsisten.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
        {servicesList.map((srv, idx) => (
          <article className="clean-card" key={idx} style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div className="tinted-icon-box" style={{ marginBottom: '0' }}>
                  {srv.icon}
                </div>
                <span className="micro-tag" style={{ background: 'var(--color-surface-tint)', color: '#A5B4FC', borderColor: 'rgba(99, 102, 241, 0.25)' }}>
                  {srv.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '22px', marginTop: '16px', marginBottom: '12px' }}>{srv.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.65', marginBottom: '24px' }}>
                {srv.desc}
              </p>

              <div>
                <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '10px', letterSpacing: '0.05em' }}>
                  Key Deliverables
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {srv.deliverables.map((deliv, dIdx) => (
                    <span className="micro-tag" key={dIdx}>
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>
              Konsultasikan Layanan Ini
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
