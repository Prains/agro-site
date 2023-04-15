import ContactBlock from "./ContactBlock/ContactBlock";
import PartnerForm from "./PartnerForm/PartnerForm";

const Partner = () => {
  return (
    <section className="bg-[#303030]  py-[60px] md:py-[87px] w-full">
      <div className="w-[87%] flex items-center justify-center flex-col mx-auto my-0 lg:flex-row">
        <PartnerForm />
        <ContactBlock />
      </div>
    </section>
  );
};

export default Partner;
