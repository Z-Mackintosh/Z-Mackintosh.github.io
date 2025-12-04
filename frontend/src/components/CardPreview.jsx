export default function CardPreview({ name, job }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.name}>{name}</div>
        <div style={styles.job}>{job}</div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '32px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '340px',
    border: '2px solid var(--color-border)',
    padding: '24px',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  name: {
    fontSize: '28px',
    fontWeight: 800,
  },
  job: {
    fontSize: '16px',
    color: 'var(--gray-600)',
  },
};

