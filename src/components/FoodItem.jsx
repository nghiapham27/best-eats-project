const FoodItem = ({ foodData }) => {
  const { name, image, price } = foodData;
  return (
    <li className="relative max-h-[250px] shadow-xl rounded-xl overflow-hidden hover:scale-105 duration-300 ">
      <img
        src={image}
        alt={name}
        className="max-h-[250px] h-[200px] w-full object-cover"
      />
      <div className="absolute bottom-0 w-full flex flex-col sm:flex-row justify-between items-center p-2 bg-white z-10 text-sm sm:text-xl  ">
        <p className="font-bold">{name}</p>
        <p className="bg-orange-400 text-white rounded-full px-2">{price}</p>
      </div>
    </li>
  );
};
export default FoodItem;
