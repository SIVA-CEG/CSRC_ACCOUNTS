import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV = [
  { label: 'Dashboard', icon: '⊞', path: '/dashboard' },
  {
    label: 'Master', icon: '◈', path: '/master',
    children: [
      { label: 'Campus', path: '/master/campus' },
      { label: 'Departments', path: '/master/departments' },
      { label: 'Designation', path: '/master/designation' },
      { label: 'Faculties', path: '/master/faculties' },
      { label: 'Beneficiaries', path: '/master/beneficiaries' },
      { label: 'Schemes', path: '/master/schemes' },
      { label: 'PI Roles', path: '/master/pi-roles' },
      { label: 'User Activation', path: '/master/user-activation' },
    ]
  },
  { label: 'Budget', icon: '◉', path: '/budget' },
  {
    label: 'Banking', icon: '⬡', path: '/banking',
    children: [
      {
        label: 'Bank', icon: '○', path: '/banking/bank',
        children: [
          { label: 'New Entry', path: '/banking/bank/new-entry' },
          { label: 'Original Statements', path: '/banking/bank/original-statements' },
          { label: 'Current Statements', path: '/banking/bank/current-statements' },
        ]
      },
      {
        label: 'Fund Transfer', icon: '○', path: '/banking/fund-transfer',
        children: [
          { label: 'Revenue Account', path: '/banking/fund-transfer/revenue-account' },
          { label: 'Project Account', path: '/banking/fund-transfer/project-account' },
          { label: 'MOPR Account', path: '/banking/fund-transfer/mopr-account' },
          { label: 'TTDF Account', path: '/banking/fund-transfer/ttdf-account' },
          { label: 'Consultancy Account', path: '/banking/fund-transfer/consultancy-account' },
          { label: 'TEC Account', path: '/banking/fund-transfer/tec-account' },
          { label: 'TAX Account', path: '/banking/fund-transfer/tax-account' },
        ]
      },
    ]
  },
  {
    label: 'Receipts', icon: '◎', path: '/receipts',
    children: [
      { label: 'Project A/c', path: '/receipts/project-ac' },
      { label: 'MoPR A/c', path: '/receipts/mopr-ac' },
      { label: 'TTDF A/c', path: '/receipts/ttdf-ac' },
      { label: 'Revenue A/c', path: '/receipts/revenue-ac' },
      { label: 'Tax A/c', path: '/receipts/tax-ac' },
      { label: 'Receipt Lock', path: '/receipts/receipt-lock' },
    ]
  },
  {
    label: 'Payments', icon: '◐', path: '/payments',
    children: [
      { label: 'Revenue A/c', path: '/payments/revenue-ac' },
      { label: 'Project A/c', path: '/payments/project-ac' },
      { label: 'MOPR A/c', path: '/payments/mopr-ac' },
      { label: 'TTDF A/c', path: '/payments/ttdf-ac' },
      { label: 'Tax A/c', path: '/payments/tax-ac' },
      { label: 'Unspent Amount', path: '/payments/unspent-amount' },
      { label: 'Adv Settlement', path: '/payments/adv-settlement' },
      { label: 'Bank Clearance', path: '/payments/bank-clearance' },
      { label: 'Voucher Clearance', path: '/payments/voucher-clearance' },
      { label: 'Payment Types', path: '/payments/payment-types' },
      { label: 'Sub-head Types', path: '/payments/subhead-types' },
      { label: 'Payment Lock', path: '/payments/payment-lock' },
    ]
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState({});
  const [openSubs, setOpenSubs] = useState({});

  const toggle = (label) => setOpenGroups(p => ({ ...p, [label]: !p[label] }));
  const toggleSub = (label) => setOpenSubs(p => ({ ...p, [label]: !p[label] }));
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <aside style={sideStyles.sidebar}>
      
      {/* Logo */}
      <div style={sideStyles.logoArea}>
        <div style={sideStyles.logoIcon}>
          <img src="src/assets/csrc-logo.png" alt="Logo"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10 }}
            onError={e => { e.target.style.display = 'none'; }}
          />
          <span style={sideStyles.logoText}>C</span>
        </div>
        <div>
          <div style={sideStyles.brandName}>CSRC</div>
          <div style={sideStyles.brandSub}>Accounts System</div>
        </div>
      </div>

      <div style={sideStyles.divider} />

      <nav style={sideStyles.nav}>
        {NAV.map(item => (
          <div key={item.label}>
            <div
              style={{
                ...sideStyles.navItem,
                ...(isActive(item.path) ? sideStyles.navActive : {}),
              }}
              onClick={() => {
                if (item.children) toggle(item.label);
                else navigate(item.path);
              }}
            >
              <span style={sideStyles.navIcon}>{item.icon}</span>
              <span style={sideStyles.navLabel}>{item.label}</span>
              {item.children && (
                <span style={sideStyles.chevron}>
                  {openGroups[item.label] ? '▾' : '▸'}
                </span>
              )}
            </div>

            {/* Level-1 children */}
            {item.children && openGroups[item.label] && (
              <div style={sideStyles.childGroup}>
                {item.children.map(child => (
                  <div key={child.label}>
                    <div
                      style={{
                        ...sideStyles.childItem,
                        ...(isActive(child.path) ? sideStyles.childActive : {}),
                      }}
                      onClick={() => {
                        if (child.children) toggleSub(child.label);
                        else navigate(child.path);
                      }}
                    >
                      <span style={sideStyles.dot}>○</span>
                      <span>{child.label}</span>
                      {child.children && (
                        <span style={sideStyles.chevronSm}>
                          {openSubs[child.label] ? '▾' : '▸'}
                        </span>
                      )}
                    </div>

                    {/* Level-2 children */}
                    {child.children && openSubs[child.label] && (
                      <div style={sideStyles.grandchildGroup}>
                        {child.children.map(gc => (
                          <div
                            key={gc.label}
                            style={{
                              ...sideStyles.grandchildItem,
                              ...(location.pathname === gc.path ? sideStyles.grandchildActive : {}),
                            }}
                            onClick={() => navigate(gc.path)}
                          >
                            — {gc.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom user chip */}
      <div style={sideStyles.userChip}>
        <div style={sideStyles.userAvatar}>A</div>
        <div>
          <div style={sideStyles.userName}>Admin User</div>
          <div style={sideStyles.userRole}>Accounts Office</div>
        </div>
      </div>
    </aside>
  );
}

const sideStyles = {
  sidebar: {
  width: '280px',
  minHeight: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,

  background:
  'linear-gradient(180deg, #081420 0%, #166534 60%, #f59e0b 100%)',

  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',

  borderRight: '1px solid rgba(255,255,255,0.08)',

  boxShadow:
    '0 0 40px rgba(0,0,0,0.25)',

  overflowY: 'auto',
  zIndex: 999,

  display: 'flex',
  flexDirection: 'column',
},
  logoArea: {
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  marginBottom: '10px',
},
  logoIcon: {
  width: '58px',
  height: '58px',
  borderRadius: '18px',

  background: 'rgba(255,255,255,0.08)',

  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',

  border: '1px solid rgba(255,255,255,0.12)',

  boxShadow:
    '0 8px 30px rgba(0,0,0,.25)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
  logoText: { color: '#fff', fontWeight: 800, fontSize: 17, position: 'absolute' },
  brandName:{
  color:'#fff',
  fontWeight:'800',
  fontSize:'18px',
  letterSpacing:'0.5px'
},

brandSub:{
  color:'rgba(255,255,255,.65)',
  fontSize:'11px'
},
  divider: { height: 1, background: 'var(--border)', margin: '0 14px 10px' },
  nav: { flex: 1, padding: '0 10px', display: 'flex', flexDirection: 'column', gap: 2 },
  navItem:{
  display:'flex',
  alignItems:'center',
  gap:'12px',

  padding:'12px 16px',
  marginBottom:'6px',

  borderRadius:'14px',

  cursor:'pointer',

  color:'rgba(255,255,255,.78)',

  transition:'all .25s ease',

  border:'1px solid transparent',
},
  navActive:{
  background:
    'linear-gradient(135deg, rgba(16,185,129,.25), rgba(52,211,153,.12))',

  border:
    '1px solid rgba(52,211,153,.35)',

  color:'#fff',

  boxShadow:
    '0 8px 25px rgba(16,185,129,.25)',
},
navIcon: {
  width: '36px',
  height: '36px',

  borderRadius: '12px',

  backdropFilter: 'blur(12px)',

  background:
    'linear-gradient(135deg, rgba(255,255,255,.08), rgba(255,255,255,.03))',

  border:
    '1px solid rgba(255,255,255,.08)',

  boxShadow:
    '0 4px 12px rgba(0,0,0,.12)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '15px',

  color: '#4ade80',

  flexShrink: 0,
},
  navLabel: { flex: 1 },
  chevron: { fontSize: 10, marginLeft: 'auto', color: 'var(--text-muted)' },
  childGroup:{
  marginLeft:'16px',
  paddingLeft:'16px',
  borderLeft:'1px solid rgba(255,255,255,.08)',
},
  childItem:{
  padding:'10px 12px',
  borderRadius:'10px',
  color:'rgba(255,255,255,.65)',
},
  childActive:{
  background:'rgba(52,211,153,.12)',
  color:'#34d399',
},
  dot: { fontSize: 9, color: 'var(--text-muted)' },
  chevronSm: { fontSize: 9, marginLeft: 'auto', color: 'var(--text-muted)' },
  grandchildGroup: { paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 1, marginBottom: 2 },
  grandchildItem: {
    padding: '6px 8px', fontSize: 11.5, color: 'var(--text-muted)',
    cursor: 'pointer', borderRadius: 6, transition: 'all 0.15s', userSelect: 'none',
  },
  grandchildActive: { color: 'var(--accent-glow)', color: 'var(--accent)' },
  userChip:{
  margin:'18px',
  padding:'14px',

  borderRadius:'18px',

  background:
    'rgba(255,255,255,.06)',

  backdropFilter:'blur(20px)',

  border:
    '1px solid rgba(255,255,255,.08)',

  boxShadow:
    '0 8px 25px rgba(0,0,0,.18)',

  display:'flex',
  gap:'12px',
  alignItems:'center',
},
  userAvatar:{
  width:'44px',
  height:'44px',

  borderRadius:'14px',

  background:
    'linear-gradient(135deg,#10b981,#22c55e)',

  boxShadow:
    '0 6px 18px rgba(16,185,129,.35)',

  color:'#fff',
  fontWeight:'700',
  fontSize:'16px',

  display:'flex',
  alignItems:'center',
  justifyContent:'center',
},
  userName: { fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' },
  userRole: { fontSize: 10, color: 'var(--text-muted)' },
};