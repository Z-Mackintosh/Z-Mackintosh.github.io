import React from "react";

export default function Editor({ cardData, setCardData }) {
  function update(field, value) {
    setCardData({ ...cardData, [field]: value });
  }

  return (
    <div style={styles.container}>
      <label className="block" style={styles.label}>
        <span style={styles.labelText}>姓名</span>
        <input
          style={styles.input}
          value={cardData.name}
          onChange={(e) => update("name", e.target.value)}
        />
      </label>

      <label className="block" style={styles.label}>
        <span style={styles.labelText}>我经常在的地方</span>
        <input
          style={styles.input}
          value={cardData.where}
          onChange={(e) => update("where", e.target.value)}
        />
      </label>

      <label className="block" style={styles.label}>
        <span style={styles.labelText}>我可以教你</span>
        <input
          style={styles.input}
          value={cardData.teach}
          onChange={(e) => update("teach", e.target.value)}
        />
      </label>

      <label className="block" style={styles.label}>
        <span style={styles.labelText}>我很想学习</span>
        <input
          style={styles.input}
          value={cardData.learn}
          onChange={(e) => update("learn", e.target.value)}
        />
      </label>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  labelText: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--color-text)',
  },
  input: {
    width: '280px',
    padding: '10px 12px',
    border: '2px solid var(--color-border)',
    background: 'var(--color-bg)',
    color: 'var(--color-text)',
    borderRadius: '4px',
    fontSize: '14px',
  }
};
