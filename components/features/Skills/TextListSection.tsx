import Title from "@/components/common/Typography/Title";

type TextListSectionProps = {
  title: string;
  items: string[];
};

const TextListSection = ({ title, items }: TextListSectionProps) => {
  return (
    <div className="flex flex-col gap-y-8 flex-shrink-0">
      <Title>{title}</Title>
      <div className="flex gap-x-6">
        <ul className="flex flex-col gap-y-5">
          {items.slice(0, 3).map((item, index) => (
            <li key={index} className="text-white text-sm lg:text-base whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
        {items.length > 3 && (
          <>
            <div className="w-px bg-white/50"></div>
            <ul className="flex flex-col gap-y-5">
              {items.slice(3).map((item, index) => (
                <li key={index} className="text-white text-sm lg:text-base whitespace-nowrap">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TextListSection;

