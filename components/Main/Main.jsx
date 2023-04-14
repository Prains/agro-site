import { Paragraph, Subtitle } from "../ui";
import Title from "../ui/Title/Title";
import MainImages from "./MainImages/MainImages";

const Main = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[324px] md:w-full">
      <Title className={"md:self-start mb-[17px] md:mb-[44px]"}>
        ПОСТАВЩИК <br />
        УКРЫВНЫХ МАТЕРИАЛОВ
      </Title>
      <MainImages />
      <div>
        <div>
          <Paragraph>
            123<Subtitle>123</Subtitle>
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Main;
