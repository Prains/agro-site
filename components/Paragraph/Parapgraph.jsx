const Paragraph = ({ children, className }) => {
  return <p className={"font-text text-textBase text-lg md:text-xl" + ` ${className}`}>{children}</p>;
};

export default Paragraph;
