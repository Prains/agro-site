const ButtonList = () => {
  return (
    <div className="flex items-center justify-between w-full mt-[64px] max-w-[617px]">
      <button className="bg-transparent border-[#535356] border border-solid max-w-[280px] w-full h-[35px] text-[#7E7F81] font-text text-xs">
        Скачать предложение
      </button>
      <button
        type="submit"
        className="max-w-[280px] w-full bg-white h-[35px] md:h-[46px] font-text text-xs font-bold"
      >
        Отправить данные
      </button>
    </div>
  );
};

export default ButtonList;
