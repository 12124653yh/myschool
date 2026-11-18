import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json({ entries: data || [] });
  } catch {
    return NextResponse.json(
      { error: "방명록을 불러오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
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

    const { data, error } = await supabase
      .from("guestbook")
      .insert([
        {
          nickname: nickname.trim().slice(0, 20),
          content: content.trim().slice(0, 300),
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, entry: data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "요청을 처리하는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
