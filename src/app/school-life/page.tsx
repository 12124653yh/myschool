import Link from "next/link";

interface Activity {
  emoji: string;
  name: string;
  description: string;
  tag: string;
}

const activities: Activity[] = [
  {
    emoji: "☀️",
    name: "아침묵상",
    description: "하루를 시작하며 하나님과 나를 마주하는 시간",
    tag: "일상과 쉼",
  },
  {
    emoji: "🏠",
    name: "기숙사 생활",
    description: "함께 살아가며 배려와 사랑을 배우는 공동체 생활",
    tag: "공동체",
  },
  {
    emoji: "💡",
    name: "몰입주간",
    description: "하나의 주제에 온전히 집중하여 깊이 있게 탐구하는 시간",
    tag: "배움과 탐구",
  },
  {
    emoji: "🎒",
    name: "테마여행",
    description: "배운 것을 세상 속에서 직접 경험하는 테마 중심의 여행",
    tag: "도전과 여행",
  },
  {
    emoji: "🕊️",
    name: "비폭력대화",
    description: "마음을 솔직하게 표현하고 따뜻하게 경청하는 연습",
    tag: "관계와 평화",
  },
];

export default function SchoolLifePage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Title Header */}
      <section className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs sm:text-sm font-semibold">
          <span>🎒</span>
          <span>우리들의 일상과 배움</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
          학교생활
        </h1>
        <p className="text-base sm:text-lg text-[#526156]">
          재학생의 시선으로 소개하는 샬롬자유학교의 대표적인 5가지 활동이에요.
        </p>
      </section>

      {/* 5 Activity Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {activities.map((activity, index) => (
          <div
            key={activity.name}
            className={`bg-white rounded-3xl p-6 sm:p-7 border border-[#e8e3d5] shadow-xs hover:border-[#1b4332]/40 hover:shadow-md transition-all flex flex-col justify-between group ${
              index === 4 ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform">
                  {activity.emoji}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f4f9f5] text-[#2d6a4f] border border-[#d2e3d6]">
                  {activity.tag}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1b4332] mb-2 group-hover:text-[#2d6a4f] transition-colors">
                {activity.name}
              </h2>
              <p className="text-sm sm:text-base text-[#3d5a45] leading-relaxed">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA to Guestbook */}
      <section className="rounded-2xl bg-[#f4f9f5] border border-[#d2e3d6] p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#1b4332]">
            학교생활 이야기를 재미있게 보셨나요?
          </h3>
          <p className="text-sm text-[#526156] mt-0.5">
            샬롬자유학교 학생들에게 따뜻한 응원의 한마디를 남겨주세요!
          </p>
        </div>
        <Link
          href="/guestbook"
          className="mt-4 sm:mt-0 inline-block px-5 py-2.5 rounded-full bg-[#d97706] text-white font-semibold text-sm hover:bg-[#b45309] transition-all shrink-0"
        >
          방명록 남기러 가기 💌
        </Link>
      </section>
    </div>
  );
}
