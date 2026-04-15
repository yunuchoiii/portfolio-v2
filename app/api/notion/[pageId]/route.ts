import { NotionAPI } from 'notion-client';
import { NextRequest, NextResponse } from 'next/server';

const notion = new NotionAPI();

type BlockValue = {
  id?: string;
};

type BlockEntry = {
  role?: string;
  value?: BlockValue | { value?: BlockValue };
  spaceId?: string;
};

const normalizeRecordMap = <T extends { block?: unknown }>(recordMap: T): T => {
  const block = recordMap.block as Record<string, BlockEntry> | undefined;
  if (!block || typeof block !== 'object') {
    return recordMap;
  }

  const normalizedBlock: Record<string, { value: BlockValue; role?: string; spaceId?: string }> = {};

  for (const [key, entry] of Object.entries(block)) {
    const directValue = entry?.value as BlockValue | undefined;
    const nestedValue = (entry?.value as { value?: BlockValue } | undefined)?.value;
    const resolvedValue = directValue?.id ? directValue : nestedValue;

    // react-notion-x가 처리 가능한 블록(value.id 존재)만 전달
    if (resolvedValue?.id) {
      normalizedBlock[key] = {
        value: resolvedValue,
        role: entry?.role,
        spaceId: entry?.spaceId,
      };
    }
  }

  return {
    ...recordMap,
    block: normalizedBlock,
  } as T;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { pageId: string } }
) {
  try {
    const { pageId } = params;
    
    if (!pageId) {
      return NextResponse.json(
        { error: 'Page ID is required' },
        { status: 400 }
      );
    }

    // 페이지 ID 형식 변환 (하이픈 제거)
    const formattedPageId = pageId.replace(/-/g, '');
    
    const recordMap = await notion.getPage(formattedPageId);
    const normalizedRecordMap = normalizeRecordMap(recordMap);

    return NextResponse.json(normalizedRecordMap);
  } catch (error) {
    console.error('Failed to fetch Notion page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Notion page' },
      { status: 500 }
    );
  }
}

