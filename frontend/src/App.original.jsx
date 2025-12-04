import React, { useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default function App() {
  const [cardData, setCardData] = useState({
    name: "张三",
    where: "全栈开发者",
    teach: "React, Node.js, 数据库设计",
    learn: "AI应用开发, 系统架构"
  });

  return (
    <>
      <Header />
      
      <div className="layout">
        {/* 左边编辑区 */}
        <div style={styles.editor}>
          <h2 style={styles.sectionTitle}>编辑名片</h2>
          <Editor cardData={cardData} setCardData={setCardData} />
        </div>

        {/* 右边预览区 */}
        <div style={styles.preview}>
          <Preview cardData={cardData} />
        </div>
      </div>
    </>
  );
}

const styles = {
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '2px solid var(--color-border)',
    height: 'calc(100vh - 60px)',
  },
  editor: {
    padding: '24px',
    borderRight: '2px solid var(--color-border)',
  },
  preview: {
    background: 'var(--color-bg)',
    overflow: 'auto',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '800',
    marginBottom: '24px',
  },
};