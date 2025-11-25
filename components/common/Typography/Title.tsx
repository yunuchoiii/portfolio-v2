const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[32px] font-extrabold italic font-poppins leading-none text-white pr-2 w-fit">
      {children}
    </h3>
  );
};

export default Title;