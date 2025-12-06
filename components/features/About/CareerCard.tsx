import { cn } from "@/lib/utils";
import { Career } from "@/types/career";

const CareerCard = ({ career, children }: { career?: Career; children?: React.ReactNode }) => {
  if (!career) {
    return (
      <div className="relative flex flex-col gap-y-4 sm:gap-y-5 p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[40px] bg-[linear-gradient(150deg,rgba(44,245,153,0.15),rgba(10,174,234,0.15))]">
        <p className="font-poppins text-sm sm:text-base md:text-lg">Looking for New Team...</p>
      </div>
    );
  }

  const Icon = career.icon;

  return (
    <div 
      id={career.eng_name.toLowerCase()}
      className={cn("relative flex flex-col p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[40px]",
        {
          "bg-[linear-gradient(150deg,rgba(255,255,255,0.15),rgba(86,86,86,0.15))]": !career.isCurrent,
          "bg-[linear-gradient(150deg,rgba(44,245,153,0.15),rgba(10,174,234,0.15))]": career.isCurrent,
        }
      )}
    >
      <div className="relative flex flex-col gap-y-4 sm:gap-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end gap-y-1 sm:gap-y-0 gap-x-3">
          <h3 className="text-xl sm:text-2xl font-bold">{career.kor_name}</h3>
          <span className="text-xs sm:text-sm md:text-base">
            {career.department} · {career.position} · {career.period.start} - {career.period.end}
          </span>
        </div>
        <ul className="list-disc pl-4 leading-relaxed sm:leading-[1.8] text-sm sm:text-base space-y-1 sm:space-y-0">
          {career.descriptions.map((description) => (
            <li key={description}>{description}</li>
          ))}
        </ul>
        <Icon 
          className="absolute bottom-6 sm:bottom-7 md:bottom-8 right-6 sm:right-7 md:right-8 size-28 sm:size-32 md:size-[150px] object-contain text-white/20"
          aria-hidden="true"
        />
      </div>
      {children}
    </div>
  );
};

export default CareerCard;