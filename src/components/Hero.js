import HeadlineCards from './HeadlineCards';

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[400px] relative">
        <div className="absolute flex flex-col justify-center  font-bold text-gray-200 w-full h-full max-h-[700px] bg-black/40 md:text-4xl">
          <h1 className="px-4 text-4xl sm:text-5xl md:6-xl lg:text-7xl">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:6-xl lg:text-7xl">
            <span className="text-orange-600">Foods</span> Delivered
          </h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1627492376333-9572d2bc99d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1111&q=80"
          alt="main-hero"
          className="w-full max-h-[400px] z-[-10] object-cover"
        />
      </div>
    </div>
  );
};
export default Hero;
