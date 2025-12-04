import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// 安全支持中文的 Base64 解码函数
function safeDecodeBase64(str) {
  try {
    return JSON.parse(
      decodeURIComponent(escape(atob(str)))
    );
  } catch (error) {
    console.error("Base64 解码失败：", error);
    return null;
  }
}

export default function SharePage() {
  const [searchParams] = useSearchParams();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const data = searchParams.get("data");
    if (!data) return;

    const decoded = safeDecodeBase64(data);
    setCardData(decoded);
  }, [searchParams]);

  // 数据无效时显示错误提示
  if (!cardData) {
    return (
      <div style={styles.container}>
        <div style={{ padding: 40, textAlign: "center" }}>
          <h1>无效名片数据</h1>
          <p>请确认分享链接是否完整。</p>
        </div>
      </div>
    );
  }

  // 成功渲染名片（使用与AppShowcase相同的样式）
  return (
    <div style={styles.container}>
      <div style={styles.previewContainer}>
        {/* 名片阴影效果 */}
        <div style={styles.cardShadow}></div>
        
        {/* 主名片 */}
        <div style={styles.previewCard}>
          <div style={styles.cardHeader}>
            <div style={styles.nameBadge}>
              <h1 style={styles.cardName}>{cardData.name}</h1>
              <div style={styles.nameUnderline}></div>
            </div>
          </div>

          <div style={styles.cardContent}>
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>📍</div>
              <div style={styles.infoText}>
                <div style={styles.infoLabel}>我经常在的地方</div>
                <div style={styles.infoValue}>{cardData.where}</div>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>🎓</div>
              <div style={styles.infoText}>
                <div style={styles.infoLabel}>我可以教你</div>
                <div style={styles.infoValue}>{cardData.teach}</div>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>🚀</div>
              <div style={styles.infoText}>
                <div style={styles.infoLabel}>我很想学习</div>
                <div style={styles.infoValue}>{cardData.learn}</div>
              </div>
            </div>
          </div>

          <div style={styles.cardFooter}>
            <div style={styles.footerPattern}></div>
            <div style={styles.footerText}>MADE BY KEYCARD</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 从AppShowcase.jsx复制的样式
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  previewContainer: {
    position: 'relative',
  },
  cardShadow: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    right: '-12px',
    bottom: '-12px',
    background: '#1a1a1a',
    zIndex: 0,
  },
  previewCard: {
    position: 'relative',
    background: '#fff',
    border: '3px solid #1a1a1a',
    padding: '40px',
    zIndex: 1,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '360px',
  },
  cardHeader: {
    marginBottom: '32px',
  },
  nameBadge: {
    position: 'relative',
  },
  cardName: {
    fontSize: '36px',
    fontWeight: '900',
    color: '#1a1a1a',
    margin: '0 0 8px 0',
    letterSpacing: '-0.5px',
  },
  nameUnderline: {
    width: '80px',
    height: '4px',
    background: '#007BFF',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  infoItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: '20px',
    width: '40px',
    height: '40px',
    background: '#f8f9fa',
    border: '2px solid #007BFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoText: {
    flex: 1,
  },
  infoLabel: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  infoValue: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#1a1a1a',
    lineHeight: '1.5',
  },
  cardFooter: {
    marginTop: '40px',
    paddingTop: '24px',
    borderTop: '2px solid #e9ecef',
  },
  footerPattern: {
    height: '2px',
    background: 'repeating-linear-gradient(90deg, #1a1a1a, #1a1a1a 4px, transparent 4px, transparent 8px)',
    marginBottom: '12px',
  },
  footerText: {
    fontSize: '10px',
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};