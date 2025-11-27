import GradientTitle from "@/components/common/Typography/GradientTitle";
import { CAREER_LIST } from "@/constant/career";
import { Career as CareerType } from "@/types/career";
import CareerCard from "./CareerCard";

const Career = () => {
  //구직 중 상태
  const isSearching = true;

  return (
    <section className="w-full max-w-[928px] flex flex-col gap-y-6 sm:gap-y-8">
      <GradientTitle>
        Career
      </GradientTitle>
      <div className="flex flex-col gap-y-6 lg:gap-y-8">
        {isSearching && <CareerCard />}
        {CAREER_LIST.map((career: CareerType) => (
          <CareerCard key={career.company} career={career} />
        ))}
      </div>
    </section>
  );
};

export default Career;