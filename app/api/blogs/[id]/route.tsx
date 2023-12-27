import { script } from '@/script';
import Blog from '@/models/blog';

import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await script();
    const blog = await Blog.findById(params.id);
    return new NextResponse(JSON.stringify(blog));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};
