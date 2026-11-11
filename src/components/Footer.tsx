export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e8e3d5] bg-[#f5f1e8] py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">
        <p className="text-xs sm:text-sm text-[#526156] leading-relaxed">
          학생 실습으로 만든 사이트예요 (공식 홈페이지 아님) · 공식 홈페이지:{" "}
          <a
            href="https://www.shalomfree.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1b4332] font-semibold underline underline-offset-4 hover:text-[#2d6a4f] transition-colors"
          >
            shalomfree.kr
          </a>
        </p>
      </div>
    </footer>
  );
}
