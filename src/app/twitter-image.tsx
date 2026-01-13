import { ImageResponse } from 'next/og';
import { siteConfig } from './_config/site';

export const runtime = 'edge';
export const alt = siteConfig.seo.defaultTitle;
export const size = { width: 1200, height: 600 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#050505',
          padding: '64px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 52, fontWeight: 800, color: '#FAFAFA', letterSpacing: -1 }}>
            {siteConfig.shortName}
            <span style={{ color: '#F59E0B' }}> Accommodations</span>
          </div>
          <div style={{ marginTop: 12, fontSize: 24, color: '#B3B3B3', maxWidth: 860 }}>
            {siteConfig.tagline}
          </div>
          <div style={{ marginTop: 24, fontSize: 18, color: '#E5E7EB' }}>
            Student (NSFAS) + General • Seshego, Polokwane
          </div>
        </div>
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: 999,
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FDE68A',
            fontSize: 22,
            fontWeight: 700,
            textAlign: 'center',
            padding: 24,
          }}
        >
          {siteConfig.highlights.studentAccreditation}
        </div>
      </div>
    ),
    size,
  );
}
