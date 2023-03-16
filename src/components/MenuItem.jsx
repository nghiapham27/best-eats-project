const MenuItem = ({ menuItem }) => {
  const { name, image } = menuItem;
  return (
    <div className="w-full">
      <div className="mx-auto max-h-[200px] max-w-[300px] flex justify-between items-center bg-gray-300 rounded-xl overflow-hidden shadow-lg hover:scale-105">
        <p className="text-sm sm:text-xl font-bold p-4">{name}</p>
        <img
          src={image}
          alt={name}
          className="max-w-[300px] h-[100px] w-[100px] object-cover"
        />
      </div>
    </div>
  );
};
export default MenuItem;
