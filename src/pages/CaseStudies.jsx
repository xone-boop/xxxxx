import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const cases = [
    {
      sector: 'DTC Fashion & Apparel',
      url: 'luminaapparel.com/growth-case',
      primaryKpi: '4.82x ROAS',
      kpiSubtitle: 'Blended Return On Ad Spend',
      title: 'Scaling Toko Fashion dari Rp 80 Juta ke Rp 1.4 Miliar/Bulan',
      secondaryMetrics: [
        { num: '-36%', text: 'CAC Reduction' },
        { num: 'Rp 1.42 M', text: 'Monthly GMV' },
        { num: '48%', text: 'Repeat Rate' }
      ],
      desc: 'Restrukturisasi menyeluruh pada struktur campaign Advantage+ Meta Ads, dipadukan dengan sprint materi kreatif UGC mingguan dan penawaran bundling bernilai tinggi untuk memenangkan lelang iklan.',
      tags: ['Meta CBO Scaling', 'Creative Sprint', 'CAPI Server-Side']
    },
    {
      sector: 'Cosmeceutical Skincare',
      url: 'glowlabderma.id/whatsapp-funnel',
      primaryKpi: '14.200+ Leads',
      kpiSubtitle: 'Qualified Reseller & Direct Leads',
      title: 'Akuisisi 14.000+ Calon Reseller & Konsumen Aktif via WhatsApp Funnel',
      secondaryMetrics: [
        { num: 'Rp 7.800', text: 'Qualified CPL' },
        { num: '78.4%', text: 'Chat Open Rate' },
        { num: '3.9x', text: 'Sales Closing' }
      ],
      desc: 'Implementasi pre-lander interaktif kuis kulit sebelum pengalihan ke WhatsApp. Format ini menyaring 90% spam leads sehingga tim sales klien hanya menerima calon pembeli berprobabilitas closing tinggi.',
      tags: ['Direct WhatsApp Ads', 'Lead Qualification', 'Offer Testing']
    },
    {
      sector: 'Gadget & Smart Home Retail',
      url: 'nexusgadgets.shopee/star-plus',
      primaryKpi: '6.15x Shopee ROAS',
      kpiSubtitle: 'Peak Season Campaign Metric',
      title: 'Dominasi Kata Kunci Organik & Penjualan Shopee Star+ Seller',
      secondaryMetrics: [
        { num: '+280%', text: 'GMV Lift' },
        { num: 'Top 3', text: 'Category Rank' },
        { num: '12.4%', text: 'Lower CIR' }
      ],
      desc: 'Pembersihan kata kunci non-performer dan implementasi strategi dynamic bid pada jam-jam ramai pengguna Shopee, mendongkrak penjualan SKU unggulan masuk Top 3 Kategori.',
      tags: ['Shopee GMV Max', 'Discovery Ads', 'Bidding Automation']
    }
  ];

  return (
    <main className="container section-spacing">
      <div style={{ maxWidth: '720px', marginBottom: '52px' }}>
        <div className="section-eyebrow"><span className="eyebrow-indicator" /> Studi Kasus Klien</div>
        <h1 className="section-header-title">Hasil nyata dari eksekusi disiplin data.</h1>
        <p className="section-header-desc">
          Bukan klaim teoritis. Berikut adalah ringkasan performa riil portofolio klien dalam 90 hari terakhir eksekusi terarah.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {cases.map((cs, idx) => (
          <article className="browser-mockup" key={idx}>
            {/* Safari-style Browser Header */}
            <div className="browser-header">
              <div className="browser-dot dot-red" />
              <div className="browser-dot dot-yellow" />
              <div className="browser-dot dot-green" />
              <div className="browser-url-bar font-mono-num">
                https://{cs.url}
              </div>
            </div>

            {/* Browser Content */}
            <div className="browser-content">
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px', alignItems: 'center' }}>
                <div>
                  <span className="micro-tag" style={{ marginBottom: '14px' }}>{cs.sector}</span>
                  <h3 style={{ fontSize: '24px', lineHeight: '1.25', margin: '12px 0 16px', color: 'var(--color-text-primary)' }}>
                    {cs.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.68', marginBottom: '22px' }}>
                    {cs.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {cs.tags.map((t, tIdx) => (
                      <span key={tIdx} className="micro-tag" style={{ background: 'var(--color-surface-white)' }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Business Impact KPI Callouts */}
                <div style={{ background: 'var(--color-surface-muted)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                  <div style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border)' }}>
                    <div className="kpi-callout-number font-mono-num">{cs.primaryKpi}</div>
                    <div className="kpi-callout-label">{cs.kpiSubtitle}</div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {cs.secondaryMetrics.map((sm, smIdx) => (
                      <div key={smIdx}>
                        <div className="font-mono-num" style={{ fontSize: '18px', fontWeight: '800', color: 'var(--color-text-primary)' }}>{sm.num}</div>
                        <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginTop: '2px', fontWeight: '600' }}>{sm.text}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%', fontSize: '13.5px', minHeight: '40px' }}>
                      Konsultasikan Strategi Serupa
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
