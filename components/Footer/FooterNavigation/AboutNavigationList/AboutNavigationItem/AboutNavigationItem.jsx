export default function AboutNavigationItem({ title }) {
  return (
    <li className="text-c4 text-text text-[12px] leading-[95%] cursor-pointer mt-[16px] first:mt-0 md:mt-[18px] md:ml-0 lg:mt-[22px]">
      <a>{title}</a>
    </li>
  );
}
