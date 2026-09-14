import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    channel: 'Meta Ads',
    budget: 'Rp 10.000.000 - Rp 25.000.000',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo PrimeClick, nama saya ${formData.name} (${formData.email}) dari brand ${formData.brand}. Saya ingin konsultasi audit untuk channel ${formData.channel} dengan estimasi ad spend ${formData.budget}. Catatan: ${formData.notes || '-'}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="container section-spacing">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}><span className="eyebrow-indicator" /> Kontak & Konsultasi</div>
          <h1 className="section-header-title">Mulai sesi strategic audit akun Anda.</h1>
          <p className="section-header-desc" style={{ margin: '0 auto' }}>
            Pilih jalur komunikasi langsung atau isi formulir di bawah untuk menghubungkan tim spesialis kami.
          </p>
        </div>

        {/* Fast Channels Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '36px' }}>
          <a
            href="https://wa.me/6281234567890?text=Halo%20PrimeClick%2C%20saya%20ingin%20konsultasi%20langsung."
            target="_blank"
            rel="noopener noreferrer"
            className="fast-channel-card"
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-accent-emerald)', marginBottom: '4px' }}>
                Respon Cepat (&lt; 15 Menit)
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                Direct WhatsApp Chat
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                Chat langsung dengan Senior Media Buyer
              </div>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-accent-emerald)', display: 'grid', placeItems: 'center', fontWeight: 'bold' }}>
              &rarr;
            </div>
          </a>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fast-channel-card"
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-accent-indigo)', marginBottom: '4px' }}>
                Kalender Terbuka
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-text-primary)' }}>
                Book 15-Min Discovery Call
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                Jadwalkan sesi Google Meet 1-on-1
              </div>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--color-accent-indigo)', display: 'grid', placeItems: 'center', fontWeight: 'bold' }}>
              &rarr;
            </div>
          </a>
        </div>

        {/* Structured Intake Form */}
        <form onSubmit={handleSubmit} className="clean-card" style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '24px' }}>Formulir Analisis Awal Akun Iklan</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Budi Santoso"
                  className="clean-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                  Email Bisnis
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="budi@brandanda.com"
                  className="clean-input"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                Nama Brand / Perusahaan & Website/Toko
              </label>
              <input
                type="text"
                name="brand"
                required
                value={formData.brand}
                onChange={handleChange}
                placeholder="Lumina Apparel (luminaapparel.com / shopee.co.id/lumina)"
                className="clean-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                  Fokus Channel Scaling
                </label>
                <select
                  name="channel"
                  value={formData.channel}
                  onChange={handleChange}
                  className="clean-input"
                >
                  <option value="Meta Ads">Meta Ads (Instagram & Facebook)</option>
                  <option value="Shopee Ads">Shopee Ads (Marketplace Scaling)</option>
                  <option value="Creative Strategy">Creative Strategy & UGC Sprint</option>
                  <option value="Omnichannel">Omnichannel Full-Stack</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                  Alokasi Ad Spend Bulanan
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="clean-input"
                >
                  <option value="Rp 10.000.000 - Rp 25.000.000">Rp 10 Juta - Rp 25 Juta</option>
                  <option value="Rp 25.000.000 - Rp 50.000.000">Rp 25 Juta - Rp 50 Juta</option>
                  <option value="Rp 50.000.000 - Rp 100.000.000">Rp 50 Juta - Rp 100 Juta</option>
                  <option value="Diatas Rp 100.000.000">Diatas Rp 100 Juta</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--color-text-primary)', marginBottom: '6px' }}>
                Kendala Utama / Target Pertumbuhan Saat Ini
              </label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Ceritakan bottleneck campaign atau target scaling yang ingin dicapai..."
                className="clean-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
              Kirim Formulir & Lanjutkan ke WhatsApp
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
