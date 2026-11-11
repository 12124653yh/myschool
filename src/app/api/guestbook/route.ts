import { NextResponse } from "next/server";
import { getEntries, addEntry } from "@/lib/store";


export async function GET() {
  const entries = getEntries();
  return NextResponse.json({ entries });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nickname, content } = body;

    if (!nickname || typeof nickname !== "string" || !nickname.trim()) {
      return NextResponse.json(
        { error: "닉네임을 입력해 주세요." },
        { status: 400 }
      );
    }

    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { error: "응원 글을 입력해 주세요." },
        { status: 400 }
      );
    }

    const newEntry = addEntry(nickname, content);
    return NextResponse.json({ success: true, entry: newEntry }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "요청을 처리하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
