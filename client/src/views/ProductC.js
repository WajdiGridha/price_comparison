import React from "react";
import GenericSection from "../components/sections/GenericSection";
import { Link } from "react-router-dom";
import { api } from "../utils/client";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
const ProductC = () => {
  let id = useParams();
  const { data } = useQuery(
    "/products",
    () => api.get("/products"),
    { refetchOnMount: false }
  );

  const cat = {
    1: "clavier",
    2: "impression",
    3: "climatisations",
    4: "video_projecteurs",
    5: "Serveurs",
    6: "composant_informatique",
    7: "cuisson",
    8: "menage",
    9: "recepteurs",
    10: "Mobile",
    11: "Centrifugeuse",
  };
  console.log(id.prodId);
  const filteredData =
    data?.filter((prod) => prod.category === cat[id.prodId]) || data;


  return (
    <React.Fragment>
      <GenericSection topDivider>
        <div className="container">
          <div className="flex flex-wrap  justify-center ">
            {data &&
              filteredData.map((prod, key) => (
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
export default ProductC;
