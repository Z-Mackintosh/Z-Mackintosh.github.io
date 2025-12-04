import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { encodeCardToUrl } from "./utils/urlEncoder";
import "./styles/responsive.css";

export default function AppShowcase() {
  const [cardData, setCardData] = useState({
    name: "张明",
    where: "数字创意工作室",
    teach: "UI/UX设计, 品牌策略, 创意编程",
    learn: "生成式AI, 空间计算, 可持续设计"
  });

  const cardRef = useRef();

  function update(field, value) {
    setCardData({ ...cardData, [field]: value });
  }

  function downloadCard() {
    if (!cardRef.current) return;

    toPng(cardRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "my_card.png";
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <div style={styles.container}>
      {/* 顶部 Header */}
      <header style={styles.header}>
        <div style={styles.headerInner} className="header-inner">
          <div style={styles.brandContainer}>
            <span style={styles.brand}>KEY CARD</span>
            <div style={styles.brandAccent}></div>
          </div>
          <nav style={styles.nav} className="nav">
            {/* 导航链接已移除 */}
          </nav>
        </div>
      </header>

      <div style={styles.mainLayout} className="main-layout">
        {/* 左侧编辑区 - 增强视觉层次 */}
        <div style={styles.editorSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle} className="section-title">编辑名片</h2>
            <div style={styles.titleDecoration}></div>
          </div>
          
          <div style={styles.editorCard} className="editor-card">
            <div style={styles.inputGroup}>
              <div style={styles.inputLabelContainer}>
                <span style={styles.inputLabel}>姓名</span>
                <div style={styles.labelAccent}></div>
              </div>
              <input
                style={styles.inputField} className="input-field"
                value={cardData.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="输入你的名字"
                onFocus={e => {
                  e.target.style.borderColor = '#007BFF';
                  e.target.style.background = '#fff';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,123,255,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#1a1a1a';
                  e.target.style.background = '#f8f9fa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <div style={styles.inputLabelContainer}>
                <span style={styles.inputLabel}>我经常在的地方</span>
                <div style={styles.labelAccent}></div>
              </div>
              <input
                style={styles.inputField} className="input-field"
                value={cardData.where}
                onChange={(e) => update("where", e.target.value)}
                placeholder="工作场所或常去的地方"
                onFocus={e => {
                  e.target.style.borderColor = '#007BFF';
                  e.target.style.background = '#fff';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,123,255,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#1a1a1a';
                  e.target.style.background = '#f8f9fa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <div style={styles.inputLabelContainer}>
                <span style={styles.inputLabel}>我可以教你</span>
                <div style={styles.labelAccent}></div>
              </div>
              <input
                style={styles.inputField} className="input-field"
                value={cardData.teach}
                onChange={(e) => update("teach", e.target.value)}
                placeholder="你的专业技能或知识"
                onFocus={e => {
                  e.target.style.borderColor = '#007BFF';
                  e.target.style.background = '#fff';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,123,255,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#1a1a1a';
                  e.target.style.background = '#f8f9fa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={styles.inputGroup}>
              <div style={styles.inputLabelContainer}>
                <span style={styles.inputLabel}>我很想学习</span>
                <div style={styles.labelAccent}></div>
              </div>
              <input
                style={styles.inputField} className="input-field"
                value={cardData.learn}
                onChange={(e) => update("learn", e.target.value)}
                placeholder="你想要学习的新技能"
                onFocus={e => {
                  e.target.style.borderColor = '#007BFF';
                  e.target.style.background = '#fff';
                  e.target.style.boxShadow = '0 0 0 2px rgba(0,123,255,0.2)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = '#1a1a1a';
                  e.target.style.background = '#f8f9fa';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>


          </div>
        </div>

        {/* 右侧预览区 - 增强视觉冲击 */}
        <div style={styles.previewSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle} className="section-title">实时预览</h2>
            <div style={styles.titleDecoration}></div>
          </div>

          <div style={styles.previewContainer}>
            {/* 名片阴影效果 */}
            <div style={styles.cardShadow}></div>
            
            {/* 主名片 */}
            <div ref={cardRef} style={styles.previewCard} className="preview-card">
              <div style={styles.cardHeader}>
                <div style={styles.nameBadge}>
                  <h1 style={styles.cardName} className="card-name">{cardData.name}</h1>
                  <div style={styles.nameUnderline}></div>
                </div>
              </div>

              <div style={styles.cardContent}>
                <div style={styles.infoItem}>
                  <div style={styles.infoIcon} className="info-icon">📍</div>
                  <div style={styles.infoText}>
                    <div style={styles.infoLabel}>我经常在的地方</div>
                    <div style={styles.infoValue} className="info-value">{cardData.where}</div>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <div style={styles.infoIcon} className="info-icon">🎓</div>
                  <div style={styles.infoText}>
                    <div style={styles.infoLabel}>我可以教你</div>
                    <div style={styles.infoValue} className="info-value">{cardData.teach}</div>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <div style={styles.infoIcon} className="info-icon">🚀</div>
                  <div style={styles.infoText}>
                    <div style={styles.infoLabel}>我很想学习</div>
                    <div style={styles.infoValue} className="info-value">{cardData.learn}</div>
                  </div>
                </div>
              </div>

              <div style={styles.cardFooter}>
                <div style={styles.footerPattern}></div>
                <div style={styles.footerText}>MADE BY KEYCARD</div>
              </div>
            </div>

            {/* 下载与分享按钮区域（已替换为水平按钮组） */}
            <div style={styles.actionArea}>
              <div style={styles.buttonRow} className="button-row">
                {/* 下载按钮（保持原有 downloadCard 行为与交互） */}
                <button
                  style={styles.downloadButton} className="download-button"
                  onClick={downloadCard}
                  onMouseDown={(e) => {
                    styles.buttonMouseDown(e);
                  }}
                  onMouseUp={(e) => {
                    styles.buttonMouseUp(e);
                  }}
                  onMouseEnter={(e) => {
                    styles.buttonMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    styles.buttonMouseLeave(e);
                  }}
                >
                  <span style={styles.buttonText}>下载名片</span>
                  <div style={styles.buttonAccent} className="button-accent"></div>
                </button>

                {/* 分享链接按钮（新） */}
                <button
                  style={styles.downloadButton} className="download-button"
                  onClick={() => {
                    const url = encodeCardToUrl(cardData);
                    navigator.clipboard.writeText(url);
                    alert("已复制分享链接：\n" + url);
                  }}
                  onMouseDown={(e) => {
                    styles.buttonMouseDown(e);
                  }}
                  onMouseUp={(e) => {
                    styles.buttonMouseUp(e);
                  }}
                  onMouseEnter={(e) => {
                    styles.buttonMouseEnter(e);
                  }}
                  onMouseLeave={(e) => {
                    styles.buttonMouseLeave(e);
                  }}
                >
                  <span style={styles.buttonText}>分享链接</span>
                  <div style={styles.buttonAccent} className="button-accent"></div>
                </button>
              </div>

              <div style={styles.buttonHint}>PNG格式 · 高清输出 · 支持URL分享</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  header: {
    background: '#1a1a1a',
    padding: '20px 0',
    borderBottom: '3px solid #007BFF',
  },
  headerInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  brand: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '900',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  brandAccent: {
    width: '80px',
    height: '3px',
    background: '#007BFF',
  },
  nav: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    padding: '8px 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s',
  },
  mainLayout: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  editorSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  previewSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  sectionHeader: {
    position: 'relative',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '900',
    color: '#1a1a1a',
    margin: '0 0 8px 0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  titleDecoration: {
    width: '60px',
    height: '4px',
    background: '#007BFF',
  },
  editorCard: {
    background: '#fff',
    border: '3px solid #1a1a1a',
    padding: '32px',
    boxShadow: '8px 8px 0 #1a1a1a',
  },
  inputGroup: {
    marginBottom: '24px',
  },
  inputLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  marginBottom: '8px',
  },
  inputLabel: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1a1a1a',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  labelAccent: {
    flex: 1,
    height: '2px',
    background: 'repeating-linear-gradient(90deg, #1a1a1a, #1a1a1a 2px, transparent 2px, transparent 4px)',
  },
  inputField: {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #1a1a1a',
    background: '#f8f9fa',
    color: '#1a1a1a',
    fontSize: '16px',
    fontWeight: '500',
    outline: 'none',
    transition: 'all 0.2s',
  },
  inputFieldFocus: {
    borderColor: '#007BFF',
    background: '#fff',
    boxShadow: '0 0 0 2px rgba(0,123,255,0.2)',
  },
  editorFooter: {
    marginTop: '32px',
    paddingTop: '16px',
    borderTop: '2px solid #e9ecef',
  },
  hintText: {
    fontSize: '12px',
    color: '#666',
    fontStyle: 'italic',
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
  actionArea: {
    marginTop: '40px',
    textAlign: 'center',
  },
  downloadButton: {
    position: 'relative',
    background: '#007BFF',
    color: '#fff',
    border: '3px solid #007BFF',
    padding: '18px 40px',
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginBottom: '12px',
  },
  buttonText: {
    position: 'relative',
    zIndex: 1,
  },
  buttonAccent: {
    position: 'absolute',
    top: '4px',
    left: '4px',
    right: '-4px',
    bottom: '-4px',
    background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #0056b3 2px, #0056b3 4px)',
    zIndex: 0,
  },
  buttonHint: {
    fontSize: '12px',
    color: '#666',
    fontStyle: 'italic',
  },

  /* 新增：按钮行样式 */
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '12px',
  },

  /* 新增：交互事件函数（在 JSX 中直接引用） */
  buttonMouseDown: (e) => {
    e.currentTarget.style.transform = 'scale(0.97) translateY(2px)';
    e.currentTarget.style.background = '#0056b3';
    e.currentTarget.style.borderColor = '#0056b3';
  },

  buttonMouseUp: (e) => {
    e.currentTarget.style.transform = 'scale(1) translateY(0)';
    e.currentTarget.style.background = '#007BFF';
    e.currentTarget.style.borderColor = '#007BFF';
  },

  buttonMouseEnter: (e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 6px 0 #0056b3';
  },

  buttonMouseLeave: (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.background = '#007BFF';
    e.currentTarget.style.borderColor = '#007BFF';
  },
};

