import React, { useRef } from "react";
import DownloadButton from "./DownloadButton";

export default function Preview({ cardData }) {
  const cardRef = useRef();

  return (
    <div style={styles.container}>
      <div 
        ref={cardRef} 
        style={styles.card}
      >
        <h1 style={styles.name}>{cardData.name}</h1>
        <div style={styles.details}>
          <p><strong style={styles.label}>我经常在的地方：</strong> {cardData.where}</p>
          <p><strong style={styles.label}>我可以教你：</strong> {cardData.teach}</p>
          <p><strong style={styles.label}>我很想学习：</strong> {cardData.learn}</p>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <DownloadButton cardRef={cardRef} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
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
    color: 'var(--color-text)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    color: 'var(--gray-600)',
  },
  label: {
    color: 'var(--color-text)',
  },
  buttonContainer: {
    marginTop: '24px',
  }
};