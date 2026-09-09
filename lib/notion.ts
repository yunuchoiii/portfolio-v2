import type { ExtendedRecordMap } from "notion-types";

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


type NotionBlockValue = { id?: string };

type NotionBlockEntry = {
  role?: string;
  value?: NotionBlockValue | { value?: NotionBlockValue };
  spaceId?: string;
};

/**
 * notion-client가 내려주는 recordMap의 block을 react-notion-x가 다룰 수 있는 형태로 맞춥니다.
 * - value가 한 겹 더 감싸인 경우({ value: { value } })를 펴줍니다
 * - value.id가 없는 블록은 렌더러를 크래시시키므로 버립니다
 * - role이 비어 있으면 "reader"로 채웁니다
 * @returns 정규화된 recordMap. 살아남은 블록이 하나도 없으면 null
 */
export const normalizeNotionRecordMap = (data: unknown): ExtendedRecordMap | null => {
  if (typeof data !== "object" || data === null) return null;

  const { block } = data as { block?: Record<string, NotionBlockEntry> };
  if (!block || typeof block !== "object") return null;

  const normalizedBlock: Record<string, { role: string; value: NotionBlockValue; spaceId?: string }> = {};

  for (const [key, entry] of Object.entries(block)) {
    const directValue = entry?.value as NotionBlockValue | undefined;
    const nestedValue = (entry?.value as { value?: NotionBlockValue } | undefined)?.value;
    const resolvedValue = directValue?.id ? directValue : nestedValue;

    if (!resolvedValue?.id) continue;

    normalizedBlock[key] = {
      role: entry?.role ?? "reader",
      value: resolvedValue,
      spaceId: entry?.spaceId,
    };
  }

  if (Object.keys(normalizedBlock).length === 0) return null;

  return {
    ...(data as ExtendedRecordMap),
    block: normalizedBlock as unknown as ExtendedRecordMap["block"],
  };
};
