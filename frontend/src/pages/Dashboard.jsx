import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const CARDS = [
  {
    label: 'Master',
    icon: '◈',
    description: 'Master data & configuration settings',
    path: '/master',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.20)',
  },
  {
    label: 'Budget',
    icon: '◉',
    description: 'Budget allocation and planning',
    path: '/budget',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.20)',
    tag: 'Under Construction',
  },
  {
    label: 'Banking',
    icon: '⬡',
    description: 'Bank accounts, statements & fund transfers',
    path: '/banking',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.22)',
  },
  {
    label: 'Receipts',
    icon: '◎',
    description: 'Project, revenue & tax receipt management',
    path: '/receipts',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.20)',
  },
  {
    label: 'Payments',
    icon: '◐',
    description: 'All payment types, settlements & clearances',
    path: '/payments',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.20)',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Layout title="Accounts Dashboard" subtitle="Centre for Sponsored Research and Consultancy · Anna University">
      <div style={styles.welcome}>
        <span style={styles.welcomeAccent}>Accounts Management System</span>
        <h1 style={styles.heading}>Select a Module</h1>
        <p style={styles.sub}>Navigate to any module to begin managing accounts and financial operations.</p>
      </div>

      <div style={styles.grid}>
        {CARDS.map(card => (
          <DashCard key={card.label} card={card} onClick={() => navigate(card.path)} />
        ))}
      </div>
    </Layout>
  );
}

function DashCard({ card, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.card,
        boxShadow: hovered
          ? `0 20px 60px ${card.glow}, 0 0 0 1px ${card.color}33, inset 0 1px 0 rgba(255,255,255,0.07)`
          : `0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px var(--border)`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div style={{ ...styles.accentLine, background: `linear-gradient(90deg, ${card.color}, transparent)` }} />

      {/* Icon */}
      <div style={{ ...styles.iconBox, background: `${card.color}18`, boxShadow: `0 0 20px ${card.glow}` }}>
        <span style={{ fontSize: 28, color: card.color }}>{card.icon}</span>
      </div>

      <div style={styles.cardLabel}>{card.label}</div>
      <div style={styles.cardDesc}>{card.description}</div>

      {card.tag && (
        <div style={{ ...styles.tag, background: `${card.color}18`, color: card.color }}>
          {card.tag}
        </div>
      )}
      {!card.tag && (
        <div style={{ ...styles.openLink, color: card.color }}>
          Open Module →
        </div>
      )}
    </div>
  );
}

// useState import needed inside same file:
import { useState } from 'react';

const styles = {
  welcome: {
  marginBottom: 36,
  textAlign: 'center',
},
  welcomeAccent: {
    fontSize: 11, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase',
    letterSpacing: '1.5px', display: 'block', marginBottom: 8,
  },
  heading: {
  fontSize: 32,
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: 8,
},
  sub: {
  fontSize: 14,
  color: 'var(--text-secondary)',
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto',
},
grid: {
  maxWidth: '1400px',
  margin: '0 auto',

  display: 'grid',

  gridTemplateColumns: 'repeat(auto-fill, 320px)',

  justifyContent: 'center',

  gap: '28px',
},
  card: {
    background: 'rgba(30,41,59,0.7)', backdropFilter: 'blur(16px)',
    borderRadius: 20, padding: '28px 24px', cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(.4,0,.2,1)', position: 'relative', overflow: 'hidden',
  },
  accentLine: { position: 'absolute', top: 0, left: 0, right: 0, height: 2 },
  iconBox: {
    width: 60, height: 60, borderRadius: 16, display: 'flex',
    alignItems: 'center', justifyContent: 'center', marginBottom: 18,
    transition: 'box-shadow 0.25s',
  },
  cardLabel: { fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, letterSpacing: '-0.3px' },
  cardDesc: { fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: 18 },
  tag: {
    display: 'inline-block', fontSize: 11, fontWeight: 600,
    padding: '4px 10px', borderRadius: 20, letterSpacing: '0.3px',
  },
  openLink: { fontSize: 13, fontWeight: 600 },
  
};