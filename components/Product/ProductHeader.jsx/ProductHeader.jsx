import { Paragraph, Subtitle } from "@/components/ui/index.js";

const ProductHeader = () => {
  return (
    <div className="flex items-start justify-center flex-col gap-5 lg:flex-row lg:justify-between lg:w-full md:gap-10 lg:gap-0">
      <Subtitle className="lg:w-1/2">ПРОДУКЦИЯ</Subtitle>
      <Paragraph className="lg:w-1/2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using
      </Paragraph>
    </div>
  );
};

export default ProductHeader;
