const Title = ({ children, className }) => {
  return <h1 className={"font-title text-3xl font-bold text-textBase md:text-7xl" + ` ${className}`}>{children}</h1>;
};

export default Title;
