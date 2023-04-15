import { Subtitle, Input } from "@/components/ui";
import InputList from "./InputList/InputList";
import ButtonList from "./ButtonsList/ButtonsList";

const PartnerForm = () => {
  return (
    <form className="flex items-center justify-center flex-col lg:pr-[62px] lg:w-2/3">
      <Subtitle className="text-white text-xl mb-[58px] lg:text-3xl">
        Станьте нашим партнером - получите индивидуальное коммерческое
        предложение
      </Subtitle>
      <InputList />
      <ButtonList />
    </form>
  );
};

export default PartnerForm;
