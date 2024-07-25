import React from "react";

const CategoryCard = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="100"
    >
      <div
        className={`w-[200px] h-[200px] rounded-full relative justify-center text-center flex drop-shadow-2xl bg-[#EAECEE] hover:scale-105 transition-transform duration-500 ease-in-out`}
      >
        <img
          src={props.img}
          alt=""
          className={` drop-shadow-2xl object-cover scale-125 ${props.width} ${props.height} absolute bottom-0`}
        />
      </div>

      <h1 className="text-center text-2xl font-bold mt-4">{props.title}</h1>
    </div>
  );
};

export default CategoryCard;
