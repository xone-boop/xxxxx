import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES = [
  { id: 'fashion', name: 'Fashion & DTC', roas: 4.4, cpa: 45000, desc: 'Optimasi keranjang belanja dan repeat order' },
  { id: 'beauty', name: 'Beauty & Skincare', roas: 4.8, cpa: 38000, desc: 'Lead generation reseller dan direct checkout' },
  { id: 'b2b', name: 'B2B & High-Ticket', roas: 3.8, cpa: 120000, desc: 'Lead filtering kuis dan konsultasi WhatsApp' },
  { id: 'fnb', name: 'F&B & Retail', roas: 5.2, cpa: 28000, desc: 'Omnichannel traffic toko dan grab/gofood drive' }
];

const SERVICE_TIERS = [
  { id: 'starter', name: 'Growth Sprint', feePercent: 12, minFee: 5000000 },
  { id: 'scale', name: 'Full Scale CBO', feePercent: 10, minFee: 10000000 },
  { id: 'enterprise', name: 'Omnichannel Domination', feePercent: 8, minFee: 18000000 }
];

export default function Calculator() {
  const [budget, setBudget] = useState(35000000);
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);
  const [selectedTier, setSelectedTier] = useState(SERVICE_TIERS[1]);

  const formatIDR = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const projectedRevenue = budget * selectedIndustry.roas;
  const estimatedOrders = Math.round(budget / selectedIndustry.cpa);
  const agencyManagementFee = Math.max(budget * (selectedTier.feePercent / 100), selectedTier.minFee);

  const waMsg = `Halo PrimeClick, saya ingin konsultasi scaling ads paket ${selectedTier.name} untuk industri ${selectedIndustry.name} dengan estimasi ad spend ${formatIDR(budget)} dan target omset ${formatIDR(projectedRevenue)}.`;
  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(waMsg)}`;

  return (
    <main className="container section-spacing">
      <div style={{ maxWidth: '720px', marginBottom: '44px' }}>
        <div className="section-eyebrow"><span className="eyebrow-indicator" /> ROAS & Cost Calculator</div>
        <h1 className="section-header-title">Transparansi proyeksi hasil dan biaya scaling.</h1>
        <p className="section-header-desc">
          Hitung estimasi omset kotor, return on ad spend (ROAS), volume pesanan, serta manajemen fee agensi berdasarkan skala bisnis Anda.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px', alignItems: 'start' }}>
        {/* Left Interactive Form Controls */}
        <div className="clean-card" style={{ padding: '36px' }}>
          {/* Ad Spend Slider */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-secondary)', letterSpacing: '0.05em' }}>
                Alokasi Belanja Iklan (Ad Spend)
              </span>
              <span className="font-mono-num" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-accent-indigo)' }}>
                {formatIDR(budget)}
              </span>
            </div>

            <input
              type="range"
              className="custom-range-slider"
              min="5000000"
              max="250000000"
              step="2500000"
              value={budget}
              onChange={(e) => setBudget(parseFloat(e.target.value))}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '12px', color: 'var(--color-text-muted)' }}>
              <span>Rp 5.000.000</span>
              <span>Rp 100.000.000</span>
              <span>Rp 250.000.000+</span>
            </div>
          </div>

          {/* Industry Segmented Tabs */}
          <div style={{ marginBottom: '36px' }}>
            <div style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-secondary)', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Kategori Industri Bisnis
            </div>
            <div className="segmented-tabs">
              {INDUSTRIES.map((ind) => (
                <button
                  type="button"
                  key={ind.id}
                  className={`segmented-tab-btn ${selectedIndustry.id === ind.id ? 'active' : ''}`}
                  onClick={() => setSelectedIndustry(ind)}
                >
                  {ind.name}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '8px' }}>
              Karakteristik: {selectedIndustry.desc} (Benchmark Target ROAS: {selectedIndustry.roas}x)
            </p>
          </div>

          {/* Service Tier Tabs */}
          <div>
            <div style={{ fontSize: '13.5px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-secondary)', letterSpacing: '0.05em', marginBottom: '10px' }}>
              Paket Manajemen Layanan
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {SERVICE_TIERS.map((tier) => (
                <button
                  type="button"
                  key={tier.id}
                  onClick={() => setSelectedTier(tier)}
                  style={{
                    padding: '14px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: selectedTier.id === tier.id ? '2px solid var(--color-accent-indigo)' : '1px solid var(--color-border)',
                    background: selectedTier.id === tier.id ? 'rgba(99, 102, 241, 0.15)' : 'var(--color-surface-white)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 150ms ease'
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: '700', color: selectedTier.id === tier.id ? 'var(--color-accent-indigo)' : 'var(--color-text-primary)' }}>
                    {tier.name}
                  </div>
                  <div className="font-mono-num" style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    {tier.feePercent}% spend
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Summary Component (Desktop) */}
        <div className="clean-card sticky-calc-summary" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
            <span className="pulse-emerald-dot" />
            <span style={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--color-accent-indigo)' }}>
              Proyeksi Hasil Kampanye
            </span>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
              Estimasi Gross Revenue Bulanan
            </div>
            <div className="font-mono-num" style={{ fontSize: '36px', fontWeight: '800', color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              {formatIDR(projectedRevenue)}
            </div>
          </div>

          <div style={{ padding: '18px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '3px' }}>Target ROAS</div>
              <div className="font-mono-num" style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-accent-emerald)' }}>
                {selectedIndustry.roas.toFixed(1)}x
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '3px' }}>Estimasi Order / Leads</div>
              <div className="font-mono-num" style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                {estimatedOrders.toLocaleString('id-ID')}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px', marginBottom: '6px' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Alokasi Iklan:</span>
              <span className="font-mono-num" style={{ fontWeight: '600', color: 'var(--color-text-primary)' }}>{formatIDR(budget)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Estimasi Biaya Manajemen:</span>
              <span className="font-mono-num" style={{ fontWeight: '600', color: 'var(--color-accent-indigo)' }}>{formatIDR(agencyManagementFee)}</span>
            </div>
          </div>

          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>
            <span>Book Scope via WhatsApp</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Floating Bottom Drawer */}
      <div className="mobile-sticky-calc-drawer" aria-label="Mobile Calculation Summary">
        <div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: '600' }}>
            Estimasi Omset ({selectedIndustry.roas}x ROAS)
          </div>
          <div className="font-mono-num" style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-text-primary)' }}>
            {formatIDR(projectedRevenue)}
          </div>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 18px', minHeight: '40px', fontSize: '13px' }}>
          Book Scope
        </a>
      </div>
    </main>
  );
}
