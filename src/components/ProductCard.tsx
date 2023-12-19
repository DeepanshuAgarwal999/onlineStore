import { NavLink } from "react-router-dom";
import { ProductType } from "../dataType";
const ProductCard = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  images,
  rating,
  stock,
  thumbnail,
  brand,
  category,
}: ProductType) => {
  console.log(images);

  return (
    <div className="max-sm:w-[300px] max-sm:height[420px] sm:w-[320px] h-auto mx-auto bg-[#18181b] overflow-hidden rounded-xl">
      <div className="group relative overflow-hidden rounded-lg">
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        <img
          className="group-hover:scale-125 object-cover h-[250px] w-full transition-all duration-500 "
          src={thumbnail}
          alt={title}
        />
        <div className="absolute -bottom-full left-12 group-hover:bottom-20 z-50 transition-all duration-500 ">
          <span className="text-white">{title}</span>
        </div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-10 z-50 transition-all duration-700">
          <span className="text-white text-3xl line-clamp-1">
            {description}
          </span>
        </div>
      </div>
      <div className="p-2 bg-[#262629] ">
        <div className="flex gap-1">
          <h1 className="text-lg font-semibold text-white line-clamp-1 capitalize">
            {price}.00$
          </h1>
          <p className="text-sm pr-1 py-1 line-clamp-2 font-semibold text-red-400">
            {discountPercentage}% off
          </p>
        </div>
        <div className="py-1 font-semibold text-white text-sm line-clamp-1 capitalize flex justify-between">
          <span>{brand}</span>
          <p>{category}</p>
        </div>
        <NavLink
          to={`/item/${id}`}
          className="font-semibold text-[16px] text-white hover:opacity-75 "
        >
          View Product
        </NavLink>
        <div className="flex items-center gap-1 justify-between pt-1">
          <div className="flex items-center gap-2 pl-1 justify-between">
            <p className="font-semibold text-[14px]  text-[#A1A1AA] line-clamp-1">
              stock left - <span className="text-red-500">{stock}</span>
              {stock < 80 ? (
                <span className="text-[#f68646]"> hurry up!</span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="flex items-center gap-1 justify-between px-1 text-white">
            ⭐ {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
