"use client";

import { useEffect, useState } from "react";

interface GuestbookEntry {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Fetch entries from server memory API
  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/guestbook", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setEntries(data.entries || []);
      }
    } catch {
      setErrorMsg("방명록을 불러오는 데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      setErrorMsg("닉네임을 입력해 주세요.");
      return;
    }
    if (!content.trim()) {
      setErrorMsg("응원 글을 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, content }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "등록에 실패했습니다.");
      }

      const result = await res.json();
      if (result.entry) {
        setEntries((prev) => [result.entry, ...prev]);
        setContent("");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("오류가 발생했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
        date.getDate()
      ).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}`;
    } catch {
      return "";
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Title Header */}
      <section className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs sm:text-sm font-semibold">
          <span>💌</span>
          <span>따뜻한 소통의 공간</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
          응원 방명록
        </h1>
        <p className="text-base sm:text-lg text-[#526156]">
          샬롬자유학교 친구들에게 따뜻한 응원의 한마디를 남겨주세요.
        </p>
      </section>

      {/* Guestbook Form */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e3d5] shadow-xs">
        <h2 className="text-xl font-bold text-[#1b4332] mb-4 flex items-center gap-2">
          <span>✏️</span>
          <span>응원 글 남기기</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 text-sm rounded-xl bg-red-50 text-red-700 border border-red-200">
              {errorMsg}
            </div>
          )}

          <div>
            <label
              htmlFor="nickname"
              className="block text-sm font-semibold text-[#1b4332] mb-1.5"
            >
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="멋진 닉네임을 적어주세요 (예: 샬롬친구)"
              maxLength={20}
              className="w-full px-4 py-3 rounded-xl border border-[#d2e3d6] bg-[#fbf9f4] text-[#1a2e22] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#1b4332] focus:border-transparent text-sm transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-[#1b4332] mb-1.5"
            >
              응원 글
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="학교 친구들에게 전하고 싶은 따뜻한 응원을 남겨주세요!"
              rows={3}
              maxLength={300}
              className="w-full px-4 py-3 rounded-xl border border-[#d2e3d6] bg-[#fbf9f4] text-[#1a2e22] placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#1b4332] focus:border-transparent text-sm resize-none transition-all"
              required
            />
            <div className="text-right text-xs text-[#526156] mt-1">
              {content.length}/300자
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1b4332] text-white font-semibold text-sm hover:bg-[#2d6a4f] transition-all shadow-xs hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>등록 중...</span>
            ) : (
              <>
                <span>응원 남기기</span>
                <span>🌱</span>
              </>
            )}
          </button>
        </form>
      </section>

      {/* Guestbook List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1b4332] flex items-center gap-2">
            <span>💬</span>
            <span>함께 나누는 응원 목록 ({entries.length})</span>
          </h2>
          <button
            onClick={fetchEntries}
            type="button"
            className="text-xs text-[#2d6a4f] hover:underline font-medium"
          >
            새로고침 🔄
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-[#526156] text-sm">
            방명록을 불러오는 중이에요... ⏳
          </div>
        ) : entries.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 border border-dashed border-[#d2e3d6] text-center space-y-2">
            <span className="text-4xl">🌱</span>
            <p className="text-base font-bold text-[#1b4332]">
              아직 등록된 응원 글이 없어요.
            </p>
            <p className="text-sm text-[#526156]">
              첫 번째로 따뜻한 응원을 남겨주세요! 이왕이면 샬자~
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-2xl p-5 border border-[#e8e3d5] shadow-xs space-y-2 hover:border-[#1b4332]/30 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1b4332] text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#2d6a4f]"></span>
                    {entry.nickname}
                  </span>
                  <span className="text-[#526156]">
                    {formatDate(entry.createdAt)}
                  </span>
                </div>
                <p className="text-[#2d3748] text-sm leading-relaxed whitespace-pre-wrap">
                  {entry.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
