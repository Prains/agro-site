import { Button, Input, Paragraph } from "@/components/ui";

export default function FooterFeedback() {
  return (
    <div>
      <p className="text-c4 font-title font-bold text-[16px] leading-[95%] mb-[30px] md:mb-[40px] lg:mb-[40px]">
        Закажите обратный звонок
      </p>
      <Input
        type="tel"
        placeholder="+7 495"
        className="outline-none text-c4 text-[12px] mb-[18px] pb-[8px] placeholder:text-c4"
      />
      <Button type="secondary" href="/" className="font-bold mb-[80px] md:mb-0">
        Обратный звонок
      </Button>
    </div>
  );
}
