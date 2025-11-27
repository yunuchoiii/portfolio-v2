import GradientTitle from "@/components/common/Typography/GradientTitle";
import { EDUCATION_LIST } from "@/constant/education";

const Education = () => {
  return <section className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
    <GradientTitle>Education</GradientTitle>
    <ul className="flex flex-col gap-y-4">
      {EDUCATION_LIST.map((education) => (
        <li key={education.institution} className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 gap-x-5">
          <span className="text-blue-20 text-sm lg:text-base">
            {education.period.start} - {education.period.end}
          </span>
          <div className="text-sm lg:text-base">
            {`[${education.institution}] ${education.major}`}
          </div>
        </li>
      ))}
    </ul>
  </section>;
};

export default Education;