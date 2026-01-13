import { ImageResponse } from 'next/og';
import { siteConfig } from './_config/site';

export const runtime = 'edge';
export const alt = siteConfig.seo.defaultTitle;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#050505',
          padding: '64px',
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 800, color: '#FAFAFA', letterSpacing: -1 }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 14, fontSize: 26, color: '#B3B3B3', maxWidth: 900 }}>
          {siteConfig.seo.defaultDescription}
        </div>
        <div style={{ marginTop: 26, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <div
            style={{
              fontSize: 18,
              color: '#FDE68A',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              padding: '10px 14px',
              borderRadius: 999,
            }}
          >
            Seshego • Polokwane
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#D1FAE5',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              padding: '10px 14px',
              borderRadius: 999,
            }}
          >
            {siteConfig.highlights.studentAccreditation}
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#E5E7EB',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '10px 14px',
              borderRadius: 999,
            }}
          >
            {siteConfig.highlights.studentDistanceKm} km to Capricorn TVET College
          </div>
        </div>
        <div style={{ marginTop: 36, fontSize: 18, color: '#9CA3AF' }}>
          {siteConfig.url.replace('https://', '')}
        </div>
      </div>
    ),
    size,
  );
}
