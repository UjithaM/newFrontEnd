import React from "react";
import Iphone from "../../assets/img/iPhone.svg";
import Laptop from "../../assets/img/lap.svg";
import MicroPhone from "../../assets/img/Microphone.svg";
import Bike from "../../assets/img/bike.png";
import Slider from "react-slick";
import Car from "../../assets/img/car.png";
import LandingButton from "../Landing/LandingButton";

const Category = () => {
  return (
    <>
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* col 1 */}
            <div className="py-6 pl-5 bg-gradient-to-br mobile-hero-bg-color text-white rounded-3xl relative h-[320px] flex items-end z-10 hover:shadow-lg hover:scale-105 transition-transform">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 text-black">
                    Phones
                  </p>
                  <LandingButton
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-red-500"
                  />
                </div>
              </div>
              <img
                src={Iphone}
                alt="iphone"
                className="w-[100px] absolute bottom-0 right-0 mr-5"
              />
            </div>
            {/* col 2 */}
            <div className="py-6 pl-5 bg-gradient-to-br microphones-hero-bg-color text-white rounded-3xl relative h-[320px] flex items-end z-10 hover:shadow-lg hover:scale-105 transition-transform">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 text-black">
                    Mikes
                  </p>
                  <LandingButton
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-blue-500"
                  />
                </div>
              </div>
              <img
                src={MicroPhone}
                alt="iphone"
                className="w-[180px] absolute top-0 right-0 mr-5"
              />
            </div>
            {/* col 3 */}
            <div className="col-span-2 pl-5 bg-gradient-to-br laptop-hero-bg-color text-white rounded-3xl relative h-[320px] flex items-end z-10 hover:shadow-lg hover:scale-105 transition-transform">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 text-black">
                    Laptops
                  </p>
                  <LandingButton
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-green-500"
                  />
                </div>
              </div>
              <img
                src={Laptop}
                alt="laptop"
                className="w-[500px] absolute top-0 right-0 mr-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* col 1 */}
            <div className="col-span-2 pl-5 bg-gradient-to-br bikes-hero-bg-color text-white rounded-3xl relative h-[320px] flex items-end z-10 hover:shadow-lg hover:scale-105 transition-transform">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 text-black">
                    Bikes
                  </p>
                  <LandingButton
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-amber-500"
                  />
                </div>
              </div>
              <img
                src={Bike}
                alt="Bike"
                className="w-[350px] absolute top-0 right-0 mr-20"
              />
            </div>
            {/* col 2 */}
            <div className="col-span-2 pl-5 bg-gradient-to-br cars-hero-bg-color text-white rounded-3xl relative h-[320px] flex items-end z-10 hover:shadow-lg hover:scale-105 transition-transform">
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-white">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2 text-black">
                    Cars
                  </p>
                  <LandingButton
                    text="Browse"
                    bgColor="bg-white"
                    textColor="text-purple-500"
                  />
                </div>
              </div>
              <img
                src={Car}
                alt="Car"
                className="w-[450px] absolute top-0 right-0 mr-20 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
