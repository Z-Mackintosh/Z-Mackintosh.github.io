export default function TextInput({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '6px',
          border: '2px solid var(--color-border)',
          fontSize: '14px',
          outline: 'none',
        }}
      />
    </div>
  );
}

