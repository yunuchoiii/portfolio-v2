const Skeleton = ({ width, height }: { width: number; height: number }) => {
  return (
    <div 
      className={`bg-white/10 animate-pulse rounded-md`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default Skeleton;