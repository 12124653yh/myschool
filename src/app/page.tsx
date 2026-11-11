import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-b from-[#eef6f0] to-[#f4f9f5] border border-[#d2e3d6] p-6 sm:p-12 text-center shadow-xs">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs sm:text-sm font-semibold mb-6">
          <span>🌱</span>
          <span>재학생이 소개하는 우리 학교 이야기</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#1b4332] tracking-tight leading-tight mb-4">
          “이왕이면 샬자~”
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-[#2d6a4f] mb-3">
          샬롬자유학교
        </p>

        <p className="text-base sm:text-lg text-[#3d5a45] max-w-xl mx-auto font-medium leading-relaxed mb-8">
          하나님의 형상을 회복하고 삶의 힘을 기르는 교육
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/school-life"
            className="px-6 py-3 rounded-full bg-[#1b4332] text-white font-semibold text-sm sm:text-base hover:bg-[#2d6a4f] transition-all shadow-xs hover:shadow-md active:scale-95"
          >
            학교생활 둘러보기 🎒
          </Link>
          <Link
            href="/guestbook"
            className="px-6 py-3 rounded-full bg-[#d97706] text-white font-semibold text-sm sm:text-base hover:bg-[#b45309] transition-all shadow-xs hover:shadow-md active:scale-95"
          >
            응원 남기기 💌
          </Link>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-6">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332] flex items-center justify-center sm:justify-start gap-2">
            <span>🌿</span>
            <span>핵심 가치</span>
          </h2>
          <p className="text-sm sm:text-base text-[#526156] mt-1">
            샬롬자유학교에서 우리가 함께 맛보고 실천하는 가치예요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* 자유의 맛 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e3d5] shadow-xs hover:border-[#1b4332]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#fef3c7] text-[#d97706] text-2xl flex items-center justify-center mb-4">
                🍋
              </div>
              <h3 className="text-xl font-bold text-[#1b4332] mb-2">
                자유의 맛
              </h3>
              <p className="text-[#3d5a45] text-sm sm:text-base leading-relaxed">
                선택하고 책임지는 연습
              </p>
            </div>
          </div>

          {/* 사랑의 멋 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e3d5] shadow-xs hover:border-[#1b4332]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#fee2e2] text-[#dc2626] text-2xl flex items-center justify-center mb-4">
                💖
              </div>
              <h3 className="text-xl font-bold text-[#1b4332] mb-2">
                사랑의 멋
              </h3>
              <p className="text-[#3d5a45] text-sm sm:text-base leading-relaxed">
                하나님, 나와 이웃, 자연 사랑
              </p>
            </div>
          </div>

          {/* 대안의 삶 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e3d5] shadow-xs hover:border-[#1b4332]/40 hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#0284c7] text-2xl flex items-center justify-center mb-4">
                🧭
              </div>
              <h3 className="text-xl font-bold text-[#1b4332] mb-2">
                대안의 삶
              </h3>
              <p className="text-[#3d5a45] text-sm sm:text-base leading-relaxed">
                앎과 삶의 일치
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1 Year Flow Section */}
      <section className="space-y-6">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332] flex items-center justify-center sm:justify-start gap-2">
            <span>📅</span>
            <span>1년 흐름</span>
          </h2>
          <p className="text-sm sm:text-base text-[#526156] mt-1">
            배움이 뿌리내리고 자라나는 1년의 과정이에요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* 1학기 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#1b4332]/20 flex items-center gap-4 shadow-xs">
            <div className="w-11 h-11 rounded-full bg-[#1b4332] text-white font-bold flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <span className="text-xs font-semibold text-[#526156]">1학기</span>
              <h4 className="text-lg font-bold text-[#1b4332]">기초</h4>
            </div>
          </div>

          {/* 2학기 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#1b4332]/20 flex items-center gap-4 shadow-xs">
            <div className="w-11 h-11 rounded-full bg-[#2d6a4f] text-white font-bold flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <span className="text-xs font-semibold text-[#526156]">2학기</span>
              <h4 className="text-lg font-bold text-[#1b4332]">방향</h4>
            </div>
          </div>

          {/* 3학기 */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#1b4332]/20 flex items-center gap-4 shadow-xs">
            <div className="w-11 h-11 rounded-full bg-[#d97706] text-white font-bold flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <span className="text-xs font-semibold text-[#526156]">3학기</span>
              <h4 className="text-lg font-bold text-[#1b4332]">대안</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
