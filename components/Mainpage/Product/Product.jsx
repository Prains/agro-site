import ProductHeader from "./ProductHeader.jsx/ProductHeader";
import ProductShowRoom from "./ProductShowRoom/ProductShowRoom";

const Product = () => {
  const tabsList = [
    { name: "Мебельный спабонд" },
    { name: "Укрывной Материал" },
    { name: "Геотекстиль" },
    { name: "Геотекстиль Ак Дорнит" },
  ];

  return (
    <section className="w-[87%]">
      <ProductHeader />
      <ProductShowRoom list={tabsList} />
    </section>
  );
};

export default Product;
