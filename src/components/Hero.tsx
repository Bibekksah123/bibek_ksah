'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '6rem 2rem 2.5rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* Background Central Portrait with Vignette & Dark Fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '900px',
          height: '100%',
          maxHeight: '920px',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.88,
          maskImage:
            'radial-gradient(circle at 50% 40%, black 40%, transparent 80%), linear-gradient(to bottom, black 50%, transparent 95%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 40%, black 40%, transparent 80%), linear-gradient(to bottom, black 50%, transparent 95%)',
        }}
      >
        <Image
          src="/bibek-portrait.jpg"
          alt="Bibek Sah — Full-Stack Developer"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
          style={{
            objectFit: 'contain',
            objectPosition: 'top center',
            filter: 'contrast(1.1) brightness(0.92) grayscale(100%)',
          }}
        />
        {/* Soft bottom gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(5,5,7,0.1) 0%, rgba(5,5,7,0.3) 50%, #050507 96%)',
          }}
        />
      </div>

      {/* Subtle Hairline Background Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* Topline Metadata Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          paddingTop: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="live-dot" />
          <span>ENGINEER. SYSTEM BUILDER. ARCHITECT.</span>
        </div>
        <div className="hidden-sm" style={{ color: 'var(--text-muted)' }}>
          BASED IN KATHMANDU · THINKING BEYOND
        </div>
      </div>

      {/* Left Vertical Annotation (Desktop only) */}
      <div
        className="hidden-sm"
        style={{
          position: 'absolute',
          left: '2.5rem',
          top: '46%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          color: 'var(--text-dim)',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ color: 'var(--text-muted)' }}>01 / PRESENCE</span>
        <div style={{ width: '20px', height: '1px', background: 'var(--border)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span>FULL-STACK</span>
          <span>AI SYSTEMS</span>
          <span>REAL-TIME APIS</span>
        </div>
      </div>

      {/* Center Main Stage Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '1080px',
          margin: 'auto auto',
          padding: '2rem 1rem',
        }}
      >
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '1.25rem',
          }}
        >
          A Human Perspective on Technology
        </motion.div>

        {/* Monumental Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(4.2rem, 11vw, 9.5rem)',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            margin: '0 0 1.75rem 0',
          }}
        >
          Bibek <em style={{ fontStyle: 'italic', color: 'var(--cream)', fontWeight: 400 }}>Sah</em>
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            maxWidth: '640px',
            margin: '0 auto 2.25rem',
          }}
        >
          I build robust web systems, scale modern applications,
          <br className="desktop-break" /> and craft high-performance digital experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#work"
            className="pill-button-dark"
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>Explore my work</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>

          <a
            href="#contact"
            className="editorial-link"
            style={{
              fontSize: '0.92rem',
              fontWeight: 500,
            }}
          >
            <span>Start a conversation</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom Status & Discover Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          paddingTop: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-dim)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <a
          href="#about"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')
          }
        >
          <span
            style={{
              display: 'inline-block',
              width: '18px',
              height: '1px',
              background: 'currentColor',
            }}
          />
          <span>SCROLL TO DISCOVER</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>

        <div className="hidden-sm" style={{ color: 'var(--text-muted)' }}>
          ENGINEERING & SHIPPING SINCE 2022
        </div>

        <a
          href="#work"
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')
          }
        >
          AN ONGOING EXPLORATION ↗
        </a>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hidden-sm {
            display: none !important;
          }
          .desktop-break {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
