import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const PhoneData = [
    {
      id: 1,
      title: "Samsung Galaxy S21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIkeqEg6qc5DtuHO0RfK1-bPpjjHVR320Yg&s",
      price: 1000,
      aosDelay: 0,
    },
    {
      id: 2,
      title: "Samsung Galaxy S21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIkeqEg6qc5DtuHO0RfK1-bPpjjHVR320Yg&s",
      price: "1000",
      aosDelay: "100",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIkeqEg6qc5DtuHO0RfK1-bPpjjHVR320Yg&s",
      price: 1000,
      aosDelay: 200,
    },
    {
      id: 4,
      title: "Samsung Galaxy S21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIkeqEg6qc5DtuHO0RfK1-bPpjjHVR320Yg&s",
      price: 1000,
      aosDelay: 300,
    },
    {
      id: 5,
      title: "Samsung Galaxy S21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIkeqEg6qc5DtuHO0RfK1-bPpjjHVR320Yg&s",
      price: 1000,
      aosDelay: 400,
    },
    {
      id: 6,
      title: "Samsung Galaxy S21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIkeqEg6qc5DtuHO0RfK1-bPpjjHVR320Yg&s",
      price: 1000,
      aosDelay: 500,
    },
  ];

  const LaptopData = [
    {
      id: 1,
      title: "Samsung Galaxy S21",
      img: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      price: 1000,
      aosDelay: 600,
    },
    {
      id: 2,
      title: "Samsung Galaxy S21",
      img: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      price: 1000,
      aosDelay: 700,
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      img: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      price: 1000,
      aosDelay: 800,
    },
    {
      id: 4,
      title: "Samsung Galaxy S21",
      img: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      price: 1000,
      aosDelay: 900,
    },
    {
      id: 5,
      title: "Samsung Galaxy S21",
      img: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      price: 1000,
      aosDelay: 1000,
    },
    {
      id: 6,
      title: "Samsung Galaxy S21",
      img: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      price: 1000,
      aosDelay: 1100,
    },
  ];

  return (
    <div>
      <div className="ml-20 mr-20 mt-10">
        {/* Header section */}
        <div className="text-left mb-10 mx-auto space-y-2">
          <h1 className="text-2xl font-bold lg:text-2xl">
            Grab the best deal on{" "}
            <span className="text-blue-400">Smartphones</span>
          </h1>
          <hr className="border-4 border-blue-400"></hr>
        </div>
        {/* body section */}
        <ProductCard data={PhoneData} btnColor="bg-blue-500" textColor="text-blue-500"/>

        <div className="text-left mb-10 mx-auto space-y-2">
          <h1 className="text-2xl font-bold lg:text-2xl">
            Grab the best deal on <span className="text-red-400">Laptops</span>
          </h1>
          <hr className="border-4 border-red-400"></hr>
          
        </div>

        <ProductCard data={LaptopData} btnColor="bg-red-500" textColor="text-red-500"/>

  
      </div>
    </div>
  );
};

export default Products;
