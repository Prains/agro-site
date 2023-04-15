import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col gap-[17px] mb-[37px]">
      <Link
        href="mailto:order@agrosfera.pro"
        className="uppercase text-white text-lg underline lg:text-xl"
      >
        order@agrosfera.pro
      </Link>
      <Link
        href="tel:+7(495) 022 91 23"
        className="text-white text-lg lg:text-xl"
      >
        +7(495) 022 91 23
      </Link>
    </div>
  );
};

export default Links;
