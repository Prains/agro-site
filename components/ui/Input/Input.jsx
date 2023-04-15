const Input = ({ className, type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className={
        "bg-transparent border-b border-[#5D5E61] pb-[11px] w-full placeholder:text-white text-white" +
        ` ${className}`
      }
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
