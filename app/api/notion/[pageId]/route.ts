import { NotionAPI } from 'notion-client';
import { NextRequest, NextResponse } from 'next/server';

const notion = new NotionAPI();

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
    
    return NextResponse.json(recordMap);
  } catch (error) {
    console.error('Failed to fetch Notion page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Notion page' },
      { status: 500 }
    );
  }
}

