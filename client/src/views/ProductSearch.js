import React from "react";
import GenericSection from "../components/sections/GenericSection";
import { Link } from "react-router-dom";
import { api } from "../utils/client";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
const ProductSearch = () => {
  let slug= useParams();
  const { data } = useQuery(
    "products",
    () => api.get("products"),
    { refetchOnMount: false }
  );
    let queryString = slug.slug.toUpperCase()

  const result =
    data?.filter((prod) => prod.name.search(queryString) !== -1) || data;

  return (
    <React.Fragment>
      <GenericSection topDivider>
        <div className="container">
          <div className="flex flex-wrap  justify-center ">
            {data &&
              result.map((prod, key) => (
                <div
                  key={key}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full mx-4 my-4"
                >
                  <Link
                    to={`/product?link=${prod.link}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={prod.image}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {prod.category}
                    </h3>
                    <h2 className="text-white title-font text-sm font-medium">
                      {prod.name}
                    </h2>
                    <p className="mt-1">{prod.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </GenericSection>
    </React.Fragment>
  );
};
export default ProductSearch;
