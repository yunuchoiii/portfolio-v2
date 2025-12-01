const Skeleton = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <div 
      className={`bg-white/10 animate-pulse rounded-md`}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
    />
  );
};

export default Skeleton;