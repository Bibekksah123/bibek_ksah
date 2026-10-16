'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SkillFilter = 'all' | 'frontend' | 'backend' | 'data' | 'ai-cloud';

interface SkillGroup {
  id: string;
  category: SkillFilter;
  number: string;
  categoryTitle: string;
  highlight: string;
  skills: { name: string; context: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 'grp-frontend',
    category: 'frontend',
    number: '01',
    categoryTitle: 'FRONTEND ARCHITECTURE',
    highlight: 'Accessible, resilient, and responsive client experiences.',
    skills: [
      { name: 'TypeScript', context: 'Strict typing, shared domain models, end-to-end type safety' },
      { name: 'React & Next.js', context: 'Server Components, SSR/SSG, App Router, hydration optimization' },
      { name: 'Tailwind CSS & CSS Modules', context: 'Design tokens, dark mode systems, bespoke responsive layouts' },
      { name: 'Framer Motion', context: 'High-performance micro-interactions & layout orchestrations' },
    ],
  },
  {
    id: 'grp-backend',
    category: 'backend',
    number: '02',
    categoryTitle: 'BACKEND & REAL-TIME SYSTEMS',
    highlight: 'High-concurrency APIs, WebSockets, and queue architectures.',
    skills: [
      { name: 'Node.js & Express.js', context: 'Modular RESTful APIs, middleware chains, controller patterns' },
      { name: 'LiveKit WebRTC', context: 'Real-time media streaming, room topologies, audio/video ingestion' },
      { name: 'Socket.IO', context: 'Bidirectional low-latency messaging, connection heartbeats' },
      { name: 'Auth & Security', context: 'JWT token rotation, RBAC permissions, bcrypt hashing, Joi validation' },
    ],
  },
  {
    id: 'grp-data',
    category: 'data',
    number: '03',
    categoryTitle: 'DATA PERSISTENCE & SCHEMAS',
    highlight: 'ACID guarantees, distributed storage, and fast indexing.',
    skills: [
      { name: 'PostgreSQL', context: 'Row-level locking (SKIP LOCKED), indexing, transactional integrity' },
      { name: 'MongoDB & Mongoose', context: 'Aggregations, flexible document modeling, replica sets' },
      { name: 'Prisma ORM', context: 'Schema migrations, type-safe queries, relation joins' },
      { name: 'S3-Compatible Storage', context: 'Encrypted object storage for recordings & media artifacts' },
    ],
  },
  {
    id: 'grp-ai-cloud',
    category: 'ai-cloud',
    number: '04',
    categoryTitle: 'AI INTEGRATIONS & DEVOPS',
    highlight: 'Intelligent inference pipelines and automated containerization.',
    skills: [
      { name: 'Google Gemini API', context: 'Audio transcription, structured JSON outputs via Zod schemas' },
      { name: 'FFmpeg Audio Processing', context: 'Audio normalization, mono downmixing, 16kHz transcoding' },
      { name: 'Docker & Containers', context: 'Multi-stage builds, minimal runtime images, microservice isolation' },
      { name: 'AWS & Deployment', context: 'Cloud infrastructure, Vercel edge deployment, CI/CD automation' },
    ],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all');

  const filteredGroups =
    activeFilter === 'all'
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeFilter);

  return (
    <section
      id="skills"
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
          <span>05 / TECHNICAL EXPERTISE</span>
        </div>
        <span>STACKS. ARCHITECTURES. CAPABILITIES.</span>
      </div>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3.5rem',
        }}
      >
        <div>
          <h2 className="editorial-title">
            Engineered with rigor.<br />
            <em>Built to perform.</em>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              maxWidth: '480px',
              marginTop: '1rem',
              lineHeight: 1.6,
            }}
          >
            A systematic breakdown of the languages, runtimes, protocols, and database architectures I deploy to production.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          role="group"
          aria-label="Filter capabilities"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            background: 'var(--surface)',
            padding: '0.4rem',
            borderRadius: '9999px',
            border: '1px solid var(--border)',
          }}
        >
          {[
            { id: 'all', label: 'All disciplines' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & Real-Time' },
            { id: 'data', label: 'Databases' },
            { id: 'ai-cloud', label: 'AI & Cloud' },
          ].map((btn) => {
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id as SkillFilter)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  background: isActive ? 'var(--cream)' : 'transparent',
                  color: isActive ? '#050507' : 'var(--text-muted)',
                  border: 'none',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Skill Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2rem',
        }}
      >
        <AnimatePresence>
          {filteredGroups.map((group) => (
            <motion.div
              key={group.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.15em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  {group.categoryTitle}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    color: 'var(--text-dim)',
                  }}
                >
                  {group.number}
                </span>
              </div>

              <p style={{ fontSize: '0.94rem', color: 'var(--cream)', fontWeight: 400, margin: 0 }}>
                {group.highlight}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '1.25rem',
                }}
              >
                {group.skills.map((s) => (
                  <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      {s.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.84rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4,
                      }}
                    >
                      {s.context}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
