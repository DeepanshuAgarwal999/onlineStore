import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { ProductType } from "../dataType";
import Navbar from "../components/Navbar";
const Product = () => {
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [imgId, setImgId] = useState<number>(1);
  const { data, loading, error } = useFetch(url);
  console.log(product);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data, imgId]);
  const len = Number(
    product?.images &&
      product.images.length !== undefined &&
      product.images.length - 1
  );
  const handlePrevClick = () => {
    if (imgId > 1) setImgId((prev) => prev - 1);
    else setImgId(len);
  };

  const handleNextClick = () => {
    if (imgId <= len) {
      setImgId((prev) => prev + 1);
    } else {
      setImgId(1);
    }
  };

  if (loading) return <h1>loading...</h1>;

  if (error) return <h1>Error: Something went wrong!</h1>;

  if (!product) return <div>No product found</div>;

  return (
    <>
      <Navbar />
      <section className="w-full bg-black min-h-screen relative py-5">
        <h1 className="text-4xl font-semibold text-white text-center pt-10">
          {product.title}
        </h1>
        <div className="flex lg:flex-row flex-col justify-around px-4 mt-10 gap-6 items-center min-h-screen">
          {/* left section */}
          <div className="flex items-center gap-5 justify-center text-white h-full z-20 lg:w-[50%] ">
            <button
              className="py-3 px-4 bg-slate-600 rounded-lg hover:text-slate-500 duration-150 font-semibold"
              onClick={handlePrevClick}
            >
              Prev
            </button>

            <div className="w-[70%] max-sm:h-[300px] h-[380px] lg:h-[450px]">
              <img
                src={`https://i.dummyjson.com/data/products/${product.id}/${imgId}.jpg`}
                alt=""
                className="w-full h-full rounded-lg"
              />
            </div>
            <button
              className="py-3 px-4 bg-slate-600 rounded-lg hover:text-slate-500 duration-150 font-semibold"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>

          {/* right section */}
          <div className="flex flex-col items-center gap-5 text-white lg:w-[40%] w-[60%] z-10  border-l border-white/20">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <h1 className="text-xl">
              <span className="text-[#A1A1AA]">Brand </span> - {product.brand}
            </h1>
            <h1 className="text-xl text-white">
              <span className="text-[#A1A1AA]">Category </span> -{" "}
              {product.category}
            </h1>
            <h1 className="text-xl text-white">
              <span className="text-[#A1A1AA]">Price </span> - {product.price}
            </h1>{" "}
            <h1 className="text-xl text-white">
              <span className="text-red-500">Discount </span> -{" "}
              {product.discountPercentage}%
            </h1>{" "}
            <h1 className="text-xl text-white">
              <span className="text-[#A1A1AA]">Stock</span> - {product.stock}
            </h1>
            <p className="text-sm text-white bg-[#18181b] max-sm:w-full w-[60%] py-4 px-5 rounded-lg tracking-wider">
              <span className="text-left text-[#A1A1AA] text-lg py-2 block">
                Description
              </span>
              <br />
              <span className="text-center"> {product.description}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
