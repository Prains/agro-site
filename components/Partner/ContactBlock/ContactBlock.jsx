import ContactHeader from "./ContactHeader/ContactHeader";
import Links from "./Links/Links";

const ContactBlock = () => {
  return (
    <div className="border-t border-white border-solid mt-[58px] lg:w-1/3 w-full pt-[49px] lg:border-l lg:border-t-0 lg:border-[#535356] lg:pl-[62px]">
      <ContactHeader />
      <Links />
      <button className="bg-transparent text-[#7E7F81] border border-[#535356] p-[12px] font-text lg:max-w-[280px] lg:w-full">
        Получить консультацию
      </button>
    </div>
  );
};

export default ContactBlock;
