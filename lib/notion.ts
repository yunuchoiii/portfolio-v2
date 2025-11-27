/**
 * 노션 링크에서 페이지 ID를 추출합니다.
 * @param notionLink - 노션 페이지 링크
 * @returns 페이지 ID (32자리 해시)
 */
export const extractNotionPageId = (notionLink: string): string | null => {
  try {
    // URL에서 마지막 슬래시와 물음표 사이의 ID 추출
    const url = new URL(notionLink);
    const pathParts = url.pathname.split('/');
    const pageId = pathParts[pathParts.length - 1];
    
    // 32자리 해시인지 확인
    if (pageId && pageId.length === 32) {
      return pageId;
    }
    
    return null;
  } catch (error) {
    console.error('Failed to extract Notion page ID:', error);
    return null;
  }
};

/**
 * 노션 페이지 ID를 표준 형식으로 변환합니다 (하이픈 추가)
 * @param pageId - 32자리 페이지 ID
 * @returns 표준 형식의 페이지 ID (8-4-4-4-12)
 */
export const formatNotionPageId = (pageId: string): string => {
  return `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20, 32)}`;
};

