/**
 * 将名片数据编码为Base64 URL
 * @param {Object} cardData - 名片数据对象
 * @returns {string} - 包含Base64编码数据的URL
 */
export function encodeCardToUrl(cardData) {
  // 将名片数据转换为JSON字符串
  const jsonString = JSON.stringify(cardData);
  
  // 编码为Base64（正确处理UTF-8和中文）
  // 使用 unescape(encodeURIComponent(...)) 处理中文
  const base64String = btoa(unescape(encodeURIComponent(jsonString)));
  
  // 构建分享URL（指向/share页面）
  const baseUrl = window.location.origin;
  const url = `${baseUrl}/share?data=${encodeURIComponent(base64String)}`;
  
  return url;
}

/**
 * 从URL中解码名片数据
 * @param {string} url - 包含Base64数据的URL
 * @returns {Object|null} - 解码后的名片数据，如果无效则返回null
 */
export function decodeUrlToCard(url) {
  try {
    const urlObj = new URL(url);
    const base64Data = urlObj.searchParams.get('data');
    
    if (!base64Data) {
      return null;
    }
    
    // 解码Base64（正确处理UTF-8和中文）
    // 使用 decodeURIComponent(escape(...)) 处理中文
    const jsonString = decodeURIComponent(escape(atob(base64Data)));
    
    // 解析JSON
    const cardData = JSON.parse(jsonString);
    
    // 验证数据结构
    if (typeof cardData === 'object' && cardData !== null) {
      return cardData;
    }
    
    return null;
  } catch (error) {
    console.error('URL解码失败:', error);
    return null;
  }
}

/**
 * 检查当前URL是否包含名片数据
 * @returns {Object|null} - 如果URL包含有效数据则返回名片数据，否则返回null
 */
export function getCardDataFromCurrentUrl() {
  return decodeUrlToCard(window.location.href);
}

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} - 复制成功返回true，失败返回false
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // 降级方案：使用document.execCommand
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textArea);
      return success;
    } catch (fallbackErr) {
      console.error('复制到剪贴板失败:', fallbackErr);
      return false;
    }
  }
}