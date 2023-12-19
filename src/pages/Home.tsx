import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen bg-black pt-10">
        <div className="bgImg max-w-[1500px] lg:w-[1140px] mx-auto relative z-50">
          {/* <div className="bg-black/70 w-full h-full absolute z-40 "></div> */}
          <h2 className="max-sm:text-xl sm:text-2xl lg:text-3xl font-semibold max-sm:w-[70%] sm:w-[50%] lg:w-[40%] pt-20 text-white px-10 z-50 relative drop-shadow-lg shadow-black">
            Unlocking Dreams, <br /> One Click at a Time : Your Ultimate
            Destination for Seamless Shopping!
          </h2>
        </div>
        <div>
          <h1 className="text-4xl text-[#ECB459] font-semibold py-5 text-center z-50 relative">
            All Products
          </h1>
          <Products />
        </div>
      </section>
    </>
  );
};

export default Home;
