import AboutMain from "./AboutMain/AboutMain";
import { Subtitle } from "../../ui";

const About = () => {
  return (
    <div className="w-[87%] mb-[70px] md:mb-[110px] lg:mb-[180px]">
      <Subtitle className="text-[30px] mb-[20px] leading-[100%]">
        ЭКСПЕРТЫ ОТРАСЛИ БОЛЕЕ 12 ЛЕТ
      </Subtitle>
      <AboutMain />
    </div>
  );
};

export default About;
