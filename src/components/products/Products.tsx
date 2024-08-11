
import ProductCard from "./ProductCard";
import {useEffect, useState} from "react";

const Products = () => {
  const [PhoneData, setPhoneData] = useState([]);
  const [LaptopData, setLaptopData] = useState([]);

    // Fetching data from the API
    useEffect(() => {

      const fetchPhoneData = async () => {
        try {
          const response = await fetch("https://offdealz.lk/api/mobilePhones?page=1", {
            headers: {
              'X-API-KEY': import.meta.env.VITE_API_KEY,
            }
          });
          const data = await response.json();
          setPhoneData(data.mobile.slice(0, 12));
        } catch (error) {
          console.log(error);
        }
      };
      fetchPhoneData();

      const fetchLaptopData = async () => {
        try {
          const response = await fetch("https://offdealz.lk/api/laptops?page=1", {
            headers: {
              'X-API-KEY': import.meta.env.VITE_API_KEY,
            }
          });
          const data = await response.json();
          setLaptopData(data.laptops.slice(0, 12));
        } catch (error) {
            console.log(error);
        }
      };
      fetchLaptopData();


    }, []);

  return (
    <div>
      <div className="mt-10">
        {/* Header section */}
        <div className="text-left mb-10 mx-auto space-y-2">
          <h1 className="text-2xl font-bold lg:text-2xl">
            Grab the best deal on{" "}
            <span className="text-blue-400">Smartphones</span>
          </h1>
          <hr className="border-4 border-blue-400"></hr>
        </div>
        {/* body section */}
        <ProductCard data={PhoneData} textColor="text-blue-500"/>

        <div className="text-left mb-10 mx-auto space-y-2">
          <h1 className="text-2xl font-bold lg:text-2xl">
            Grab the best deal on <span className="text-red-400">Laptops</span>
          </h1>
          <hr className="border-4 border-red-400"></hr>
          
        </div>

        <ProductCard data={LaptopData} textColor="text-red-500"/>

  
      </div>
    </div>
  );
};

export default Products;
