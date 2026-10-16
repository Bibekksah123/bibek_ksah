'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  strengths: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 'exp-1',
    number: '01',
    category: 'PRODUCT & FRONTEND ARCHITECTURE',
    title: 'Build with perspective.',
    description:
      'I connect what users and businesses need with what modern web architecture can do. From clean component hierarchies to responsive, accessible, high-performance interfaces.',
    strengths: 'TypeScript · React · Next.js · Frontend Architecture · UI/UX · State Management',
  },
  {
    id: 'exp-2',
    number: '02',
    category: 'BACKEND & REAL-TIME PLATFORMS',
    title: 'Make complexity click.',
    description:
      'I turn demanding concurrency requirements into resilient backend architectures with strict schema validation, streaming WebRTC/WebSockets, and background worker queues.',
    strengths: 'Node.js · Express · Socket.IO · LiveKit · REST APIs · Microservices · Joi & Zod',
  },
  {
    id: 'exp-3',
    number: '03',
    category: 'DATA INTEGRITY & CLOUD RELIABILITY',
    title: 'Bring systems forward.',
    description:
      'I build robust data persistence layers, transactional integrity, Docker containerization, and automated deployment pipelines that keep services reliable and scalable.',
    strengths: 'PostgreSQL · MongoDB · Prisma ORM · Docker · AWS · CI/CD Pipelines · Linux',
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  return (
    <>
      {/* Chapter Index Strip */}
      <div
        style={{
          borderBottom: '1px solid var(--border)',
          background: 'var(--surface)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '1.25rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.76rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <a href="#work" style={{ color: 'var(--cream)', textDecoration: 'none' }}>
            All work ↗
          </a>
          <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Engineering philosophy ↗
          </a>
          <a href="#expertise" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            How I think & work ↗
          </a>
          <a href="#impact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            Impact & milestones ↗
          </a>
        </div>
      </div>

      {/* Section 03 / HOW I THINK & WORK */}
      <section
        id="expertise"
        style={{
          padding: '7rem 2rem',
          maxWidth: '1360px',
          margin: '0 auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">
          <div>
            <span className="square-bullet" />
            <span>03 / HOW I THINK &amp; WORK</span>
          </div>
          <span>DEPTH MEETS PERSPECTIVE</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Heading & Thinking Path */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="editorial-title">
              How I work.<br />
              <em>From idea to impact.</em>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', margin: 0 }}>
              Choose a discipline. Follow the engineering process.
            </p>

            {/* Ordered Thinking Steps */}
            <div
              style={{
                marginTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderLeft: '1px solid var(--border)',
                paddingLeft: '1.5rem',
              }}
            >
              {[
                { num: '01', text: 'Understand core bottlenecks & domain needs' },
                { num: '02', text: 'Shape schemas, APIs & component architecture' },
                { num: '03', text: 'Build, benchmark, test & ship to production' },
              ].map((step, idx) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.98rem',
                    color: idx === 0 ? 'var(--cream)' : 'var(--text-muted)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--accent)',
                    }}
                  >
                    {step.num}
                  </span>
                  <span>{step.text}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a href="#work" className="editorial-link" style={{ fontSize: '0.92rem', color: 'var(--cream)' }}>
                <span>Explore the engineering solutions</span>
                <span style={{ fontSize: '0.8rem' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {accordionItems.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <article
                  key={item.id}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                    aria-expanded={isExpanded}
                    style={{
                      width: '100%',
                      padding: '1.5rem 1.75rem',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <div>
                      <small
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--accent)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {item.number} / {item.category}
                      </small>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.65rem',
                          fontWeight: 400,
                          color: '#ffffff',
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.4rem',
                        color: 'var(--cream)',
                        fontWeight: 300,
                      }}
                    >
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 1.75rem 1.75rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            paddingTop: '1.25rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '0.94rem',
                              color: 'var(--text-muted)',
                              lineHeight: 1.6,
                              margin: 0,
                            }}
                          >
                            {item.description}
                          </p>
                          <p
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.74rem',
                              color: 'var(--cream-dim)',
                              margin: 0,
                              lineHeight: 1.5,
                            }}
                          >
                            {item.strengths}
                          </p>
                          <a
                            href="#contact"
                            className="editorial-link"
                            style={{ fontSize: '0.85rem', color: 'var(--cream)', alignSelf: 'flex-start' }}
                          >
                            <span>Background &amp; full capabilities ↗</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 04 / THE WORK, MULTIPLIED (Impact & Career Story) */}
      <section
        id="impact"
        style={{
          padding: '7rem 2rem',
          maxWidth: '1360px',
          margin: '0 auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">
          <div>
            <span className="square-bullet" />
            <span>04 / THE WORK, MULTIPLIED</span>
          </div>
          <span>PEOPLE. PRODUCTS. POSSIBILITY.</span>
        </div>

        {/* Impact Title */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 className="editorial-title">
            Reach is a number.<br />
            <em>Impact is personal.</em>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              maxWidth: '440px',
              marginTop: '1rem',
            }}
          >
            Every system, API endpoint, and interface is an opportunity to make workflows smoother and more reliable.
          </p>
        </div>

        {/* Lead Impact Metric Highlight */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              15,000<span style={{ color: 'var(--accent)' }}>+</span>
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginTop: '0.5rem',
              }}
            >
              ACTIVE END-USERS IMPACTED
            </span>
          </div>

          <div style={{ maxWidth: '480px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 400,
                color: '#ffffff',
                marginBottom: '0.75rem',
              }}
            >
              Healthcare workflows digitized.<br />
              Digital media delivered instantly.
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Across hospital laboratories in Nepal with Nagarik NHMIS, and high-volume digital publishing with Janak Tech. Real people benefiting from robust, dependable software.
            </p>
          </div>
        </div>

        {/* Impact Stat Pair + Common Thread */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          <div
            style={{
              padding: '2rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
            }}
          >
            <strong
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '2.8rem',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}
            >
              2.5<em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>×</em>
            </strong>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)', margin: '0 0 0.5rem' }}>
              Performance Latency Reduction
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Achieved through database indexing, selective querying, server-side caching, and bundle optimization.
            </p>
          </div>

          <div
            style={{
              padding: '2rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
            }}
          >
            <strong
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '2.8rem',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '0.75rem',
              }}
            >
              100<em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>%</em>
            </strong>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)', margin: '0 0 0.5rem' }}>
              Schema Validation Coverage
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Zero unverified payload ingestion with end-to-end Joi and Zod schema validation across all critical API gateways.
            </p>
          </div>

          <div
            style={{
              padding: '2rem',
              background: 'rgba(255, 112, 51, 0.04)',
              border: '1px solid rgba(255, 112, 51, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                color: 'var(--accent)',
                marginBottom: '0.5rem',
              }}
            >
              THE CORE PRINCIPLE
            </span>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#ffffff',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Build something resilient.<br />
              Make it simple to understand.<br />
              <em style={{ color: 'var(--cream)' }}>Give it room to scale.</em>
            </p>
          </div>
        </div>

        {/* Company Building Story (Milestones) */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '3rem',
          }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              CAREER JOURNEY / TIMELINE
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#ffffff',
                marginTop: '0.5rem',
              }}
            >
              From complex problems.<br />
              <em>To software that delivers.</em>
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 600 }}>
                2025 – 2026
              </span>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#ffffff', margin: '0.4rem 0' }}>
                Full-Stack Developer, Janak Tech
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Engineered AI-assisted digital publishing platform and full-stack e-commerce solution with role-based access control, admin analytics, and automated order fulfillment.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 600 }}>
                2025
              </span>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#ffffff', margin: '0.4rem 0' }}>
                Web Developer, Nagarik Solution
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Developed health-application backend data flows for patient records and hospital laboratory diagnostics. Implemented Joi validation, MongoDB storage, and equipment tracking.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 600 }}>
                Today
              </span>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#ffffff', margin: '0.4rem 0' }}>
                Specialized in Real-Time &amp; AI
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Architecting next-generation real-time applications with LiveKit, Gemini AI, PostgreSQL concurrency queues, and modern Next.js 15 full-stack infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
