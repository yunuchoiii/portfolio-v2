import { normalizeNotionRecordMap } from '@/lib/notion';
import { NextRequest, NextResponse } from 'next/server';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

// 노션 페이지는 자주 바뀌지 않으므로 CDN에 캐싱해 모달을 열 때마다 원본을 긁지 않게 한다
const CACHE_CONTROL = 'public, s-maxage=3600, stale-while-revalidate=86400';

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
    const normalizedRecordMap = normalizeNotionRecordMap(recordMap);

    if (!normalizedRecordMap) {
      return NextResponse.json(
        { error: 'Invalid Notion record map' },
        { status: 502 }
      );
    }

    return NextResponse.json(normalizedRecordMap, {
      headers: { 'Cache-Control': CACHE_CONTROL },
    });
  } catch (error) {
    console.error('Failed to fetch Notion page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Notion page' },
      { status: 500 }
    );
  }
}
