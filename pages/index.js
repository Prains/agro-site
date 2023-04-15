import {
  About,
  Main,
  Partner,
  Product,
  Reviews,
} from "@/components/Mainpage/Mainpage";
import Gap from "@/components/Gap/Gap";

export default function Home() {
  return (
    <>
      <Main />
      <Gap />
      <Product />
      <Gap />
      <About />
      <Partner />
      <Reviews />
    </>
  );
}
