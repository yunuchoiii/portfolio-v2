import GradientTitle from "@/components/common/Typography/GradientTitle";
import { AWARD_LIST } from "@/constant/award";

const Award = () => {
  return <section className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
    <GradientTitle>Award</GradientTitle>
    <ul className="flex flex-col gap-y-4">
      {AWARD_LIST.map((award) => (
        <li key={award.date} className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 gap-x-5">
          <span className="text-blue-20 text-sm lg:text-base">
            {award.date}
          </span>
          <div className="text-sm lg:text-base">
            {award.title}
          </div>
        </li>
      ))}
    </ul>
  </section>;
};

export default Award;