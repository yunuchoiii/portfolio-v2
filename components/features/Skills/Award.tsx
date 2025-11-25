import GradientTitle from "@/components/common/Typography/GradientTitle";
import { AWARD_LIST } from "@/constant/award";

const Award = () => {
  return <section className="flex flex-col gap-y-12">
    <GradientTitle>Award</GradientTitle>
    <ul className="flex flex-col gap-y-4">
      {AWARD_LIST.map((award) => (
        <li key={award.date} className="flex gap-x-5">
          <span className="text-blue-20">
            {award.date}
          </span>
          <div>
            {award.title}
          </div>
        </li>
      ))}
    </ul>
  </section>;
};

export default Award;