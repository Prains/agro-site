const Subtitle = ({ children, className }) => {
  return <h2 className={"font-title font-bold text-3xl md:text-6xl text-textBase" + ` ${className}`}>{children}</h2>;
};

export default Subtitle;
