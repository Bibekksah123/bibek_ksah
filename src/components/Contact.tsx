'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('bibekkumarsah.456@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // fallback
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 2rem 5rem',
        maxWidth: '1360px',
        margin: '0 auto',
      }}
    >
      {/* Section Indicator */}
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>06 / REACH OUT</span>
        </div>
        <span>KATHMANDU · AVAILABLE GLOBALLY</span>
      </div>

      {/* Main Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Editorial Headline & Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 className="editorial-title">
            Have an idea to build?<br />
            <em>Let&apos;s start the conversation.</em>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '520px',
            }}
          >
            I am currently open to high-impact full-stack engineering roles, technical contract projects, and ambitious product builds. Whether you need a full platform architecture or performance scaling, my inbox is open.
          </p>

          {/* Availability Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.6rem 1.1rem',
              borderRadius: '9999px',
              background: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              alignSelf: 'flex-start',
            }}
          >
            <span className="live-dot" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                letterSpacing: '0.1em',
                color: '#4ade80',
                textTransform: 'uppercase',
              }}
            >
              AVAILABLE FOR NEW ROLES &amp; PROJECTS
            </span>
          </div>
        </div>

        {/* Right Column: Direct Contact Interactive Box */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          }}
        >
          {/* Email Copy Card */}
          <div
            style={{
              background: 'rgba(5, 5, 7, 0.6)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              PRIMARY INBOX
            </span>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <a
                href="mailto:bibekkumarsah.456@gmail.com"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontWeight: 500,
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                bibekkumarsah.456@gmail.com
              </a>

              <button
                onClick={handleCopyEmail}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  background: copied ? '#22c55e' : 'rgba(255, 255, 255, 0.08)',
                  color: copied ? '#050507' : 'var(--cream)',
                  border: '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontWeight: 600,
                }}
              >
                {copied ? 'COPIED ✓' : 'COPY EMAIL'}
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                label: 'GitHub',
                handle: 'github.com/Bibekksah123',
                href: 'https://github.com/Bibekksah123',
              },
              {
                label: 'LinkedIn',
                handle: 'linkedin.com/in/bibek-sah',
                href: 'https://www.linkedin.com/in/bibek-sah-627bb32b5/',
              },
              {
                label: 'Direct Line / WhatsApp',
                handle: '+977 9813689796',
                href: 'tel:+9779813689796',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255, 255, 255, 0.06)';
                  el.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(255, 255, 255, 0.02)';
                  el.style.borderColor = 'var(--border)';
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                    {item.handle}
                  </span>
                </div>
                <span style={{ color: 'var(--cream)', fontSize: '0.9rem' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
