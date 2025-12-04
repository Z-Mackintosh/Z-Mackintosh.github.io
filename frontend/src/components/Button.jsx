export default function Button({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 18px',
        border: '2px solid var(--color-border)',
        background: 'var(--color-accent)',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'transform 0.05s',
        ...style
      }}
      onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {children}
    </button>
  );
}

