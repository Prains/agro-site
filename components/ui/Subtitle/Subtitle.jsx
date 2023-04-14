const Subtitle = ({ children, className }) => {
  return <h2 className={"font-title font-bold text-3xl md:text-[64px] text-textBase" + ` ${className}`}>{children}</h2>;
};

export default Subtitle;
