import { Input } from "@/components/ui";

const InputList = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[43px] w-full">
      <Input type="text" placeholder="ФИО" />
      <Input type="tel" placeholder="+7 (492)" />
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Компания" />
    </div>
  );
};

export default InputList;
