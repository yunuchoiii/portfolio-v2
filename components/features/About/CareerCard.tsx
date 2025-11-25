import { cn } from "@/lib/utils";
import { Career } from "@/types/career";

const CareerCard = ({ career }: { career?: Career }) => {
  if (!career) {
    return (
      <div className="relative flex flex-col gap-y-5 p-10 rounded-[40px] bg-[linear-gradient(150deg,rgba(44,245,153,0.15),rgba(10,174,234,0.15))]">
        <p className="font-poppins">Looking for New Team...</p>
      </div>
    );
  }

  const Icon = career.icon;

  return (
    <div 
      className={cn("relative flex flex-col gap-y-5 p-10 rounded-[40px]",
        {
          "bg-[linear-gradient(150deg,rgba(255,255,255,0.15),rgba(86,86,86,0.15))]": !career.isCurrent,
          "bg-[linear-gradient(150deg,rgba(44,245,153,0.15),rgba(10,174,234,0.15))]": career.isCurrent,
        }
      )}
    >
      <div className="flex items-end gap-x-3">
        <h3 className="text-2xl font-bold">{career.company}</h3>
        <span>
          {career.department} · {career.position} · {career.period.start} - {career.period.end}
        </span>
      </div>
      <ul className="list-disc list-inside leading-[1.8]">
        {career.descriptions.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
      <Icon 
        className="absolute bottom-[60px] right-10 size-[150px] object-contain text-white/20"
      />
    </div>
  );
};

export default CareerCard;