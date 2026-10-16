'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Format time in Nepal Time (UTC+5:45)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        padding: '3rem 2rem 4rem',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          letterSpacing: '0.1em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}
      >
        {/* Left: Identity */}
        <div>
          <span style={{ color: '#ffffff', fontWeight: 500 }}>BIBEK SAH</span>
          <span style={{ margin: '0 0.5rem', color: 'var(--text-dim)' }}>/</span>
          <span>FULL-STACK SOFTWARE ENGINEER</span>
        </div>

        {/* Center: Live Nepal Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="live-dot" />
          <span>KATHMANDU, NEPAL</span>
          <span style={{ color: 'var(--text-dim)' }}>·</span>
          <span style={{ color: 'var(--cream)', fontWeight: 500 }}>
            {mounted ? `${time} NPT (UTC+5:45)` : 'NPT (UTC+5:45)'}
          </span>
        </div>

        {/* Right: Back to top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span>ALL RIGHTS RESERVED © {mounted ? new Date().getFullYear() : '2026'}</span>
          <a
            href="#top"
            style={{
              color: 'var(--cream)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--cream)')}
          >
            <span>TOP</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
