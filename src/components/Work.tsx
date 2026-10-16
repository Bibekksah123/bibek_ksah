'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Work() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section
      id="work"
      style={{
        padding: '7rem 2rem',
        maxWidth: '1360px',
        margin: '0 auto',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Section Indicator */}
      <div className="section-label">
        <div>
          <span className="square-bullet" />
          <span>02 / SELECTED WORK</span>
        </div>
        <span>BUILT. SCALED. PUT INTO THE WORLD.</span>
      </div>

      {/* Editorial Headline */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '4.5rem',
        }}
      >
        <h2 className="editorial-title">
          Ideas are a start.<br />
          <em>This is the work.</em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '380px',
            margin: 0,
          }}
        >
          From real-time WebRTC intelligence to mission-critical healthcare workflows. A few things I&apos;ve engineered and brought to life.
        </p>
      </div>

      {/* Work Gallery */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {/* Project 01: Featured Flagship (MeetFlow) */}
        <article
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
            transition: 'border-color 0.3s ease',
          }}
        >
          {/* Browser Bar Frame */}
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <span>meetflow.ai/workspace</span>
            <span>↗</span>
          </div>

          {/* Project Preview Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(320px, 45vw, 620px)',
              background: '#09090d',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/meetflow-preview.jpg"
              alt="MeetFlow — AI Meeting Intelligence Workspace"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            {/* Artifact Label Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1.25rem',
                display: 'flex',
                gap: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.12em',
                background: 'rgba(9, 9, 13, 0.85)',
                backdropFilter: 'blur(12px)',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                color: 'var(--cream)',
                textTransform: 'uppercase',
              }}
            >
              <span>AI & REAL-TIME ARCHITECTURE</span>
              <span style={{ color: 'var(--text-dim)' }}>|</span>
              <span>LIVEKIT + GEMINI AI</span>
            </div>
          </div>

          {/* Project Details Footer */}
          <div
            style={{
              padding: '1.75rem 2rem 2.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-start', flex: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: 'var(--text-dim)',
                  lineHeight: 1,
                }}
              >
                01
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '720px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  AI Product & Real-Time Architecture
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 400,
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  MeetFlow — AI Meeting Intelligence Workspace
                </h3>
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Records live WebRTC sessions using LiveKit, persists audio in private S3 storage, and streams Gemini AI transcripts with structured executive analysis. Features a high-concurrency PostgreSQL <code style={{ color: 'var(--cream)', background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.35rem', borderRadius: '4px' }}>SKIP LOCKED</code> worker queue for FFmpeg audio transcoding, bounded retries, and Notion task automation.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="editorial-link"
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--cream)',
                alignSelf: 'center',
              }}
            >
              <span>Explore the architecture</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </article>

        {/* 2-Column Grid: Projects 02 & 03 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Project 02: Janak Tech */}
          <article
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
            }}
          >
            <div className="browser-bar">
              <div className="browser-dots">
                <span /><span /><span />
              </div>
              <span>janaktech.com/news</span>
              <span>↗</span>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '280px', background: '#09090d' }}>
              <Image
                src="/janak-news-preview.jpg"
                alt="Janak Tech Digital Platform"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  letterSpacing: '0.1em',
                  background: 'rgba(9, 9, 13, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '4px',
                  color: 'var(--cream)',
                  textTransform: 'uppercase',
                }}
              >
                FULL-STACK & AI CONTENT DELIVERY
              </div>
            </div>

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  Media & E-Commerce Engineering
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-dim)' }}>
                  02
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.7rem',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                Janak Tech News & E-Commerce Platform
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
                Built high-traffic dynamic news system with AI-assisted editorial generation, RESTful backend APIs, and optimized asset loading. Implemented complete e-commerce store with role-based access control (RBAC), administrative analytics dashboard, and order processing.
              </p>
              <div style={{ paddingTop: '0.5rem' }}>
                <a href="#contact" className="editorial-link" style={{ fontSize: '0.88rem', color: 'var(--cream)' }}>
                  <span>Explore the platform</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Project 03: Nagarik NHMIS */}
          <article
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 45px rgba(0,0,0,0.4)',
            }}
          >
            <div className="browser-bar">
              <div className="browser-dots">
                <span /><span /><span />
              </div>
              <span>nhmis.nagarik.gov.np</span>
              <span>↗</span>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '280px', background: '#09090d' }}>
              <Image
                src="/nagarik-health-preview.jpg"
                alt="Nagarik NHMIS Health Platform"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  letterSpacing: '0.1em',
                  background: 'rgba(9, 9, 13, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '4px',
                  color: 'var(--cream)',
                  textTransform: 'uppercase',
                }}
              >
                ENTERPRISE HEALTHCARE & MEDICAL LABS
              </div>
            </div>

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  Healthcare Systems
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-dim)' }}>
                  03
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.7rem',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                Nagarik NHMIS Hospital & Lab Information System
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
                Developed reliable healthcare application data flows for patient records and hospital laboratory diagnostics. Implemented strict Joi request validation, MongoDB-backed transactional persistence, and equipment telemetry tracking for day-to-day medical operations.
              </p>
              <div style={{ paddingTop: '0.5rem' }}>
                <a href="#contact" className="editorial-link" style={{ fontSize: '0.88rem', color: 'var(--cream)' }}>
                  <span>Explore the system</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* MORE WAYS I BUILD List & Deep Technical Expandable Details */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            MORE WAYS I BUILD
          </span>

          {/* Project 04 Row */}
          <a
            href="#contact"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.25rem 0',
              borderBottom: '1px solid var(--border)',
              textDecoration: 'none',
              color: '#ffffff',
              transition: 'padding-left 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = '0.75rem';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = '0';
            }}
          >
            <div>
              <small
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-dim)',
                  marginBottom: '0.35rem',
                }}
              >
                04 / REAL-TIME ARCHITECTURE
              </small>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                  fontWeight: 400,
                }}
              >
                Match Real-Time Chat & Connection Platform{' '}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    border: '1px solid var(--border)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    color: 'var(--accent)',
                    verticalAlign: 'middle',
                    marginLeft: '0.5rem',
                  }}
                >
                  MVP
                </span>
              </span>
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>

          {/* Project 05 Row */}
          <a
            href="#contact"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.25rem 0',
              borderBottom: '1px solid var(--border)',
              textDecoration: 'none',
              color: '#ffffff',
              transition: 'padding-left 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = '0.75rem';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.paddingLeft = '0';
            }}
          >
            <div>
              <small
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: 'var(--text-dim)',
                  marginBottom: '0.35rem',
                }}
              >
                05 / APPLICATION BACKEND & SERVICES
              </small>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                  fontWeight: 400,
                }}
              >
                Coursera E-Learning Distributed Backend
              </span>
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>

          {/* Expandable Technical Accordion Details */}
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              marginTop: '0.5rem',
            }}
          >
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                color: 'var(--text)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                fontWeight: 500,
              }}
            >
              <span>Inside the MeetFlow architecture & worker pipeline</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--cream)' }}>
                {detailsOpen ? '−' : '+'}
              </span>
            </button>

            {detailsOpen && (
              <div
                style={{
                  padding: '0 1.5rem 1.5rem',
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  borderTop: '1px solid var(--border)',
                }}
              >
                <p style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  The worker architecture employs PostgreSQL row-level locking via <code style={{ color: 'var(--cream)' }}>SELECT ... FOR UPDATE SKIP LOCKED</code> to allow multiple consumer processes to claim audio jobs concurrently without deadlocks. Once claimed, FFmpeg compresses 16kHz mono audio, dispatches to Gemini 1.5 with Zod schema verification, and writes finalized JSON transcripts back to PostgreSQL with bounded exponential backoff retries.
                </p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {['PostgreSQL SKIP LOCKED', 'LiveKit WebRTC', 'FFmpeg Transcoding', 'Gemini 1.5 Flash', 'Zod Validation', 'S3 Storage'].map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border)',
                        color: 'var(--cream)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Explore all work link */}
          <div style={{ marginTop: '1rem' }}>
            <a
              href="https://github.com/bibeksah"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
              style={{
                fontSize: '0.95rem',
                color: 'var(--cream)',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Explore all repositories on GitHub</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
