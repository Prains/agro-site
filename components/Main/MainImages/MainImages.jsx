import { greenimage, greenimagedesktop } from "@/images/Homepage/main/main";
import Image from "next/image";

const MainImages = () => {
  return (
    <>
      <Image
        src={greenimage}
        alt="Зеленое поле с высоты птичьего полета"
        className="md:hidden"
      />
      <Image
        src={greenimagedesktop}
        alt="Зеленое поле с высоты птичьего полета"
        className="hidden md:block w-full"
      />
    </>
  );
};

export default MainImages;
