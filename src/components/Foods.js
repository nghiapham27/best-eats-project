import { useReducer } from 'react';
import { data, categories } from '../data';
import FoodItem from './FoodItem';
import MenuItem from './MenuItem';

const filterReducer = (state, { action, payload }) => {
  if (action === 'typeFilter') {
    const newFoods = data.filter(
      (food) =>
        (payload === 'all' || food.category === payload) &&
        (state.price === 'all' || state.price === food.price)
    );

    return { ...state, type: payload, foods: newFoods };
  }
  if (action === 'priceFilter') {
    const newFoods = data.filter(
      (food) =>
        (payload === 'all' || food.price === payload) &&
        (state.type === 'all' || state.type === food.category)
    );

    return { ...state, price: payload, foods: newFoods };
  } else throw new Error(`Unknown action ${action}`);
};

const Food = () => {
  // used for styling filter button & hanlde multiple search inputs
  const [filterInput, dispatch] = useReducer(filterReducer, {
    type: 'all',
    price: 'all',
    foods: data,
  });

  const filterTypeList = ['all', 'burger', 'pizza', 'salad', 'chicken'];
  const filterPriceList = ['all', '$', '$$', '$$$', '$$$$'];

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8">
      <h1 className="text-center text-orange-500 text-3xl font-bold">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between pt-6 ">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-600">Filter type</p>
          <div className="flex flex-wrap text-orange-400 py-2">
            {filterTypeList.map((type, index) => {
              const newType = type.split('')[0].toUpperCase() + type.slice(1);
              return (
                <button
                  key={index}
                  className={`btn-filter ${
                    type === filterInput.type && 'text-white bg-orange-400'
                  }`}
                  onClick={() =>
                    dispatch({ action: 'typeFilter', payload: type })
                  }
                >
                  {newType}
                </button>
              );
            })}
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-600">Filter Price</p>
          <div className="flex flex-wrap py-2 text-orange-500">
            {filterPriceList.map((price, index) => {
              return (
                <button
                  key={index}
                  className={`btn-filter ${
                    price === filterInput.price && 'text-white bg-orange-400'
                  }`}
                  onClick={() =>
                    dispatch({ action: 'priceFilter', payload: price })
                  }
                >
                  {price === 'all' ? 'All' : price}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="max-w-[1640px] mx-auto py-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filterInput.foods.map((food) => {
            return <FoodItem key={food.id} foodData={food} />;
          })}
        </ul>
      </div>

      {/* Top Menu Items  */}
      <div className="max-w-[1640px] mx-auto px-4 py-4">
        <h1 className="text-center text-orange-500 text-3xl font-bold">
          Top Rated Menu Items
        </h1>
        <div className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => {
            return <MenuItem key={item.id} menuItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Food;
