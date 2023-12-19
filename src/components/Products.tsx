import { useEffect, useState } from "react";
import { ProductType } from "../dataType";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

const url = "https://dummyjson.com/products";
const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { data, loading, error } = useFetch(url);
  useEffect(() => {
    if (data) {
      const productsData = data as { products: ProductType[] };
      setProducts(productsData.products);
    }
  }, [data]);

  if (loading) return <h1>loading...</h1>;
  
  if (error) return <h1>Error: Something went wrong!</h1>;

  return (
    <div className="max-w-[1500px] lg:w-[1140px] mx-auto bg-[#18181b] py-10">
      <div className="mt-10 pt-10 flex flex-wrap gap-6 items-center justify-center">
        {products?.map((item) => (
          <div key={item.id}>
            <ProductCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              discountPercentage={item.discountPercentage}
              images={item.images}
              rating={item.rating}
              stock={item.stock}
              thumbnail={item.thumbnail}
              brand={item.brand}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
