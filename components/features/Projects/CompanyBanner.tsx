import { cn } from "@/lib/utils";
import { CompanyBanner as CompanyBannerType } from "@/types/company";
import Image from "next/image";

interface CompanyBannerProps {
  banner: CompanyBannerType;
  className?: string;
}

/**
 * 회사 프로젝트 목록 옆에 세로로 서는 배너.
 * 높이를 스스로 정하지 않는다 — 부모 flex row의 stretch를 받아 카드 열과 같은 높이가 된다.
 * 그래서 프로젝트가 늘거나 줄어도 따로 손댈 곳이 없다.
 */
const CompanyBanner = ({ banner, className }: CompanyBannerProps) => {
  const isUp = banner.engDirection === "up";

  return (
    <div
      className={cn(
        "relative min-w-0 overflow-hidden flex flex-col",
        "px-4 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7",
        "rounded-[16px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[40px]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${banner.gradientFrom}, #FFFFFF)`,
      }}
    >
      {/* 상단 — 로고 왼쪽, 회사명·부제를 오른쪽에 두 줄로 */}
      <div className="relative z-10 flex items-center gap-x-2 sm:gap-x-2.5 md:gap-x-3">
        <Image
          src={banner.logo.src}
          width={banner.logo.width}
          height={banner.logo.height}
          alt=""
          aria-hidden="true"
          className="h-8 sm:h-10 md:h-12 lg:h-[64px] w-auto object-contain flex-shrink-0"
        />
        {/* 시안값: 회사명 Pretendard SemiBold 24px / 부제 Pretendard Regular 20px.
            Pretendard 는 body 기본 폰트라 따로 지정하지 않는다. */}
        <div className="flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 lg:gap-y-4 min-w-0">
          <p
            className="font-semibold leading-tight whitespace-nowrap text-[13px] sm:text-[16px] md:text-[20px] lg:text-[24px]"
            style={{ color: banner.nameColor }}
          >
            {banner.name}
          </p>
          <p className="font-normal leading-tight whitespace-nowrap text-[#2E2E2E] text-[11px] sm:text-[13px] md:text-[16px] lg:text-[20px]">
            {banner.subtitle}
          </p>
        </div>
      </div>

      {/* 하단 — 세로로 크게 깔리는 영문명 */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex items-end px-2 sm:px-3 md:px-4 pb-4 sm:pb-5 md:pb-6",
          isUp ? "justify-start" : "justify-end"
        )}
        aria-hidden="true"
      >
        <p
          className={cn(
            // 시안값: Montserrat ExtraBold 72px / 자간 -1%.
            // 72px 은 배너 폭이 시안과 같아지는 lg(배너 322px) 기준이고, 그 아래는 폭에 맞춰 줄인다.
            "font-montserrat font-extrabold leading-none tracking-[-0.01em] whitespace-pre",
            "text-[34px] sm:text-[46px] md:text-[56px] lg:text-[72px]"
          )}
          style={{
            color: banner.engColor,
            // 반응형 text-[] 유틸이 뒤에서 행간을 덮어써 leading-none 이 먹지 않는다. 여기서 못 박는다.
            lineHeight: 1,
            writingMode: "vertical-rl",
            transform: isUp ? "rotate(180deg)" : undefined,
          }}
        >
          {banner.engName.join("\n")}
        </p>
      </div>
    </div>
  );
};

export default CompanyBanner;
