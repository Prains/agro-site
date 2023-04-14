import { Title } from "@/components/ui";
import MainImages from "./MainImages/MainImages";
import BottomList from "./BottomList/BottomList";

const Main = () => {
  const bottomListItems = [
    {
      title: "Опыт работы",
      subtitle: "12 лет",
      border: "border-x",
    },
    {
      title: "Довольных клиентов",
      subtitle: "1500+",
      border: "border-l",
    },
    {
      title: "Сотрудников",
      subtitle: "2000",
      border: "border-r",
    },
    {
      title: "Время доставки",
      subtitle: "1 день",
      border: "border-x",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-[324px] md:w-full">
      <Title className={"md:self-start mb-[17px] md:mb-[44px]"}>
        ПОСТАВЩИК <br />
        УКРЫВНЫХ МАТЕРИАЛОВ
      </Title>
      <MainImages />
      <BottomList items={bottomListItems} />
    </section>
  );
};

export default Main;
