const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 cursor-pointer">
      {/* Card 1 */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl p-4">
          <div className="text-white">
            <p className="font-bold text-xl">Sun's Out, BOGO's Out</p>
            <p>Through 8/26</p>
          </div>
          <button className="absolute bottom-4 bg-white border-white text-black font-bold rounded-lg px-2">
            Order Now
          </button>
        </div>
        {/* img */}
        <img
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="max-h-[200px] w-full rounded-xl object-cover"
        />
      </div>

      {/* Card 2 */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl p-4">
          <div className="text-white">
            <p className="font-bold text-xl">New Restaurants</p>
            <p>Through Daily</p>
          </div>
          <button className="absolute bottom-4 bg-white border-white text-black font-bold rounded-lg px-2">
            Order Now
          </button>
        </div>
        {/* img */}
        <img
          src="https://images.unsplash.com/photo-1678269367737-eb7f31f720f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZvb2R8ZW58MHwwfDJ8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
          alt=""
          className="max-h-[200px] w-full rounded-xl object-cover"
        />
      </div>

      {/* Card 3 */}
      <div className="relative rounded-xl">
        {/* Overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl p-4">
          <div className="text-white">
            <p className="font-bold text-xl">We Delivered Desserts</p>
            <p>Tasty Treats</p>
          </div>
          <button className="absolute bottom-4 bg-white border-white text-black font-bold rounded-lg px-2">
            Order Now
          </button>
        </div>
        {/* img */}
        <img
          src="https://images.unsplash.com/photo-1524526967094-4448faba6b81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRlc3NlcnRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="max-h-[200px] w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
};
export default HeadlineCards;
