import Link from "next/link";

const Primary = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={
        "text-white text-[9px] text-bold w-[101px] bg-black flex items-center justify-center h-[30px] md:w-[210px] md:h-[46px] md:text-sm hover:bg-textSecondary hover:text-black" +
        ` ${className}`
      }
    >
      {children}
    </Link>
  );
};

const Secondary = ({ children, className, href }) => {
  return (
    <Link
      href={href}
      className={
        "text-black text-[12px] flex items-center justify-center h-[35px] w-[229px] bg-white hover:bg-textSecondary hover:text-black md:w-[280px] md:h-[46px]" +
        ` ${className}`
      }
    >
      {children}
    </Link>
  );
};

const Button = ({ children, type, className, href }) => {
  if (type === "primary") {
    return (
      <Primary className={className} href={href}>
        {children}
      </Primary>
    );
  }
  if (type === "secondary") {
    return (
      <Secondary href={href} className={className}>
        {children}
      </Secondary>
    );
  }
};

export default Button;
