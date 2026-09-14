import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: 'Berapa minimum budget ad spend bulanan yang disarankan?',
    a: 'Untuk mendapatkan data pembelajaran algoritma yang optimal, kami menyarankan minimal ad spend mulai dari Rp 10.000.000 hingga Rp 15.000.000 per bulan.'
  },
  {
    q: 'Apakah materi kreatif disiapkan oleh PrimeClick?',
    a: 'Ya, creative strategy kami mencakup perumusan angle hook, copywriting, motion design, dan storyboard UGC dari bahan produk yang Anda sediakan.'
  },
  {
    q: 'Apakah saya memegang akses penuh ke akun iklan?',
    a: '100% milik Anda. Kami bekerja melalui Partner Access resmi. Seluruh data pixel, audiens, dan pembayaran tetap di bawah kepemilikan Anda.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showFallback, setShowFallback] = useState(false);
  const canvasRef = useRef(null);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!modelViewerRef.current || !modelViewerRef.current.loaded) {
        setShowFallback(true);
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showFallback || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.offsetWidth || 500);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 500);

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: (Math.random() - 0.5) * (width * 0.6),
        y: (Math.random() - 0.5) * (height * 0.6),
        z: (Math.random() - 0.5) * 260,
        radius: Math.random() * 1.5 + 1
      });
    }

    let rot = 0;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      rot += 0.006;
      const cx = width / 2;
      const cy = height / 2;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.arc(0, 0, 110, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      particles.forEach((p) => {
        const rx = p.x * Math.cos(rot) - p.z * Math.sin(rot);
        const rz = p.z * Math.cos(rot) + p.x * Math.sin(rot);
        const scale = 280 / (280 + rz);
        if (scale > 0) {
          ctx.beginPath();
          ctx.arc(cx + rx * scale, cy + p.y * scale, p.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = '#818CF8';
          ctx.fill();
        }
      });
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [showFallback]);

  return (
    <main>
      {/* Hero Section */}
      <section className="container hero-layout" id="hero">
        <div className="hero-ambient-mesh" aria-hidden="true" />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="pill-status-badge">
            <span className="pulse-emerald-dot" />
            <span>Accepting Q3/Q4 Performance Projects</span>
          </div>

          <h1 className="hero-title">
            Engineering profitable ad spend at <span>enterprise scale.</span>
          </h1>

          <p className="hero-subtitle">
            Kami memadukan arsitektur Meta Ads, dominasi Shopee Ads, dan sprint kreatif berbasis data untuk mendorong margin profit serta omset yang terukur.
          </p>

          <div className="hero-cta-wrapper">
            <Link to="/contact" className="btn btn-primary">
              <span>Klaim Strategic Audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/calculator" className="btn btn-secondary">
              <span>Hitung Potensi ROAS</span>
            </Link>
          </div>

          <div className="hero-trust-badges">
            <div className="trust-badge-item">
              <span className="trust-badge-check">&#x2713;</span>
              <span><strong>Meta Ads</strong> Architecture</span>
            </div>
            <div className="trust-badge-item">
              <span className="trust-badge-check">&#x2713;</span>
              <span><strong>Shopee Ads</strong> Optimization</span>
            </div>
            <div className="trust-badge-item">
              <span className="trust-badge-check">&#x2713;</span>
              <span><strong>24/7</strong> Live Bid Pacing</span>
            </div>
          </div>
        </div>

        {/* 3D Scene Viewport */}
        <div className="scene-viewport" id="sceneViewport">
          <div className="floating-card fc-top">
            <div className="fc-label">Campaign Mode</div>
            <div className="fc-value">Scaling ON</div>
            <div className="fc-trend">+34.8% CTR Lift</div>
          </div>

          {!showFallback && (
            <model-viewer
              ref={modelViewerRef}
              src="/model.glb"
              camera-controls
              auto-rotate
              rotation-per-second="16deg"
              shadow-intensity="0.8"
              exposure="1"
              environment-image="neutral"
              interaction-prompt="none"
              alt="PrimeClick 3D Model"
              onError={() => setShowFallback(true)}
            />
          )}

          {showFallback && (
            <div className="fallback-canvas-wrap" style={{ display: 'block' }}>
              <canvas ref={canvasRef} id="hologramCanvas" />
            </div>
          )}

          <div className="floating-card fc-bottom">
            <div className="fc-label">Ad Efficiency</div>
            <div className="fc-value">24/7 Active</div>
            <div className="fc-trend">Zero Budget Leaks</div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="marquee-container" aria-label="Brand Partners Marquee">
        <div className="marquee-label">Trusted by high-growth DTC brands and modern eCommerce businesses</div>
        <div className="marquee-track">
          {['LUMINA APPAREL', 'GLOWLAB DERMA', 'NEXUS GADGETS', 'KULINA BITES', 'URBAN WEAR ID', 'VELOCITY COFFEE',
            'LUMINA APPAREL', 'GLOWLAB DERMA', 'NEXUS GADGETS', 'KULINA BITES', 'URBAN WEAR ID', 'VELOCITY COFFEE'].map((brand, idx) => (
            <div className="marquee-item" key={idx}>
              {brand} <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid */}
      <section className="container section-spacing">
        <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <div className="section-eyebrow"><span className="eyebrow-indicator" /> Core Capabilities</div>
          <h2 className="section-header-title">Built to turn ad spend into predictable growth.</h2>
          <p className="section-header-desc">
            Bukan sekadar menjalankan iklan. Kami menyusun arsitektur funnel presisi, tracking server-side, dan iterasi materi kreatif berkonversi tinggi.
          </p>
        </div>

        <div className="bento-grid">
          <div className="clean-card bento-item-large" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div className="tinted-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Meta Ads Architecture & Advantage+ Scaling</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', maxWidth: '520px', lineHeight: '1.65' }}>
                  Struktur campaign CBO/ABO berjenjang dari akuisisi audiens dingin, WhatsApp Direct Lead, hingga dynamic product ads untuk repeat purchase.
                </p>
              </div>
              <div style={{ background: 'var(--color-surface-muted)', border: '1px solid var(--color-border)', padding: '16px', borderRadius: '12px', minWidth: '180px' }}>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>Live ROAS Index</div>
                <div className="font-mono-num" style={{ fontSize: '26px', fontWeight: '800', color: '#A5B4FC', marginTop: '4px' }}>4.82x</div>
                <div style={{ fontSize: '12px', color: 'var(--color-accent-emerald)', fontWeight: '600', marginTop: '2px' }}>+34% vs Industry Avg</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
              <span className="micro-tag">Conversion API (CAPI)</span>
              <span className="micro-tag">Audience Stacking</span>
              <span className="micro-tag">Dynamic Product Ads</span>
              <span className="micro-tag">Fatigue Guard</span>
            </div>
          </div>

          <div className="clean-card bento-item-small" style={{ padding: '36px' }}>
            <div className="tinted-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Shopee Ads Domination</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.65' }}>
              Optimasi bidding kata kunci spesifik dan iklan produk serupa untuk mendongkrak organik rank SKU toko.
            </p>
            <div style={{ marginTop: '20px' }}>
              <span className="micro-tag">GMV Maximization</span>
            </div>
          </div>

          <div className="clean-card bento-item-half" style={{ padding: '36px' }}>
            <div className="tinted-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>High-Velocity Creative Lab</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.65' }}>
              Materi visual dan angle adalah penentu utama kemenangan lelang iklan modern. Kami merancang storyboard UGC, motion graphics, dan testing matriks hook.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              <span className="micro-tag">UGC Direction</span>
              <span className="micro-tag">Hook Rate Testing</span>
            </div>
          </div>

          <div className="clean-card bento-item-half" style={{ padding: '36px' }}>
            <div className="tinted-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Server-Side Attribution & Reporting</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.65' }}>
              Pelaporan transparan tanpa pembiasan pixel. Dashboard terintegrasi memudahkan audit pengeluaran iklan dan return secara real-time.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              <span className="micro-tag">Google Tag Manager</span>
              <span className="micro-tag">Zero Data Leak</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container section-spacing" style={{ paddingTop: '0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-indicator" /> Pertanyaan Umum</div>
          <h2 className="section-header-title">Transparansi kerja sama dari hari pertama.</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div className="clean-card" key={idx} style={{ overflow: 'hidden' }}>
                <button
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '16.5px',
                    fontWeight: '700',
                    color: 'var(--color-text-primary)'
                  }}
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '18px', color: '#A5B4FC', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 150ms ease' }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 22px 24px', color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: '1.7' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container" style={{ paddingBottom: '96px' }}>
        <div className="clean-card" style={{ padding: '56px', background: 'linear-gradient(135deg, #111522 0%, #161C2C 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '36px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontSize: '38px', marginBottom: '12px' }}>Siap meningkatkan efisiensi ad spend Anda?</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '540px' }}>
              Jadwalkan sesi audit strategi 30 menit tanpa komitmen awal untuk menganalisis potensi skala brand Anda.
            </p>
          </div>
          <div>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 30px', fontSize: '15px' }}>
              <span>Jadwalkan Strategic Audit</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
