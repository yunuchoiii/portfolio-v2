import GradientTitle from "@/components/common/Typography/GradientTitle";
import { EDUCATION_LIST } from "@/constant/education";

const Education = () => {
  return <section className="flex flex-col gap-y-12">
    <GradientTitle>Education</GradientTitle>
    <ul className="flex flex-col gap-y-4">
      {EDUCATION_LIST.map((education) => (
        <li key={education.institution} className="flex gap-x-5">
          <span className="text-blue-20">
            {education.period.start} - {education.period.end}
          </span>
          <div>
            {`[${education.institution}] ${education.major}`}
          </div>
        </li>
      ))}
    </ul>
  </section>;
};

export default Education;