import React from "react";
import { toPng } from "html-to-image";

export default function DownloadButton({ cardRef }) {
  function download() {
    if (!cardRef.current) return;

    toPng(cardRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "my_card.png";
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <button
      onClick={download}
      style={styles.button}
      onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      保存为图片
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 18px',
    border: '2px solid var(--color-border)',
    background: 'var(--color-accent)',
    color: 'white',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'transform 0.05s',
  }
};