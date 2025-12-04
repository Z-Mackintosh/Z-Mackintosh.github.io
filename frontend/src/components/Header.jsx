export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.title}>Build Your OWN Card</div>
      <nav style={styles.nav}>
        <a href="#" style={styles.link}>文档</a>
        <a href="#" style={styles.link}>GitHub</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    borderBottom: '2px solid var(--color-border)',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: '800',
  },
  nav: {
    display: 'flex',
    gap: '16px',
  },
  link: {
    color: 'var(--color-text)',
    fontWeight: 500,
    textDecoration: 'underline',
  }
};

