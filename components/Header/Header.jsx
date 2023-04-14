import Image from "next/image";
import logo from "@/images/logo/logo.js";

const Header = () => {
  return <Image src={logo} alt="Логотип АгроСфера" />;
};

export default Header;
