import BottomListItem from "./BottomListItem/BottomListItem";

const BottomList = ({ items }) => {
  return (
    <div className="md:flex items-center justify-center hidden w-full">
      {items.map((item) => {
        return <BottomListItem item={item} key={item.name} />;
      })}
    </div>
  );
};

export default BottomList;
