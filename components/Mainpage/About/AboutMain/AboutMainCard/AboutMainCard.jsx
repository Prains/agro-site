export default function AboutMainCard({ title, text }) {
  return (
    <article className="pl-[8px] h-[100px] border-solid border-x w-[50%] mb-[15px] even:border-l-0 md:pl-[20px] lg:w-[25%] lg:mb-0 lg:h-[192px] lg:px-[15px] lg:first:border-l-0 lg:even:border-l-[1px]  lg:border-r-0 lg:last:border-r-0">
      <h3 className="font-title font-bold text-[13px] mb-[7px] leading-[90%] md:text-[15px] lg:text-[15px] md:w-[75%] lg:pt-[32px] lg:mb-[23px] lg:max-w-[90%] lg:w-[90%] lg:text-[18px]">
        {title}
      </h3>
      <p className="text-textSecondary font-text text-[10px] leading-[120%] max-w-[150px] md:max-w-[75%] md:text-[14px] md:leading-[120%] lg:max-w-[90%]">
        {text}
      </p>
    </article>
  );
}
