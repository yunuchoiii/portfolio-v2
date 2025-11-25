const GradientTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-[48px] font-extrabold italic font-poppins leading-none text-transparent bg-clip-text bg-gradient-to-r from-green-20 to-blue-30 pr-2 w-fit">
      {children}
    </h2>
  );
};

export default GradientTitle;