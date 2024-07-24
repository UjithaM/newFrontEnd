import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BannerContent from "./BannerContent";
import "./Banner.css"; // CSS for animations

const Banner = () => {
  // State to hold the banner content
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // Array of banner contents
  const bannerContents = [
    {
      bgColor: "bg-green-200",
      imgLeft: "src/assets/img/iPhone.svg",
      imgMiddle: "src/assets/img/banner-phones.png",
      imgRight: "src/assets/img/banner-samsung.png",
      text: (
        <>
          Shop top smartphones, unbeatable deals!
          <br />
          Upgrade your tech today online.
        </>
      ),
      lineColor: "bg-green-700",
    },
    {
      bgColor: "bg-blue-200",
      imgLeft: "src/assets/img/lap.svg",
      imgMiddle: "src/assets/img/banner-left-mac.png",
      imgRight: "src/assets/img/banner-left-mac.png",
      text: (
        <>
          Get the best laptops at the best prices!
          <br />
          Shop now and get free shipping.
        </>
      ),
      lineColor: "bg-blue-700",
    },
    {
      bgColor: "bg-yellow-200",
      imgLeft: "src/assets/img/bike.svg",
      imgMiddle: "src/assets/img/banner-bike.png",
      imgRight: "src/assets/img/banner-bike.png",
      text: (
        <>
          Get the best bikes at the best prices!
          <br />
          Shop now and get free shipping.
        </>
      ),
      lineColor: "bg-yellow-700",
    },
    {
      bgColor: "bg-red-200",
      imgLeft: "src/assets/img/microphone.svg",
      imgMiddle: "src/assets/img/banner-microphone.png",
      imgRight: "src/assets/img/banner-microphone.png",
      text: (
        <>
          Get the best microphones at the best prices!
          <br />
          Shop now and get free shipping.
        </>
      ),
      lineColor: "bg-red-700",
    },
  ];

  // Function to update banner content
  const updateBannerContent = () => {
    setCurrentContentIndex(
      (prevIndex) => (prevIndex + 1) % bannerContents.length
    );
  };

  // Use effect to change content dynamically (for example, after 5 seconds)
  useEffect(() => {
    const timer = setInterval(updateBannerContent, 5000);
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <>
      {/* Search Bar */}
      <div className=" p-4 text-center absolute z-20 top-80 w-full">
        <div className="search-container relative flex items-center w-1/2 max-[555px]:w-fit mx-auto">
          <i className="fas fa-search search-icon absolute left-3 text-gray-500"></i>
          <input
            type="text"
            className="form-control pl-10 pr-32 h-[40px] rounded-[12px] bg-[#D9D9D9] font-darker_grotesque"
            id="searchBar"
            placeholder="Search your product here..."
          />
          <a
            href="#"
            className="search-button absolute right-2 bg-[#6D6D6D] text-white h-[30px] w-[121px] rounded-[5px] font-poppins max-[644px]:w-[82px] max-[644px]:h-[30px]"
          >
            <button
              className="search-button absolute right-2 bg-[#6D6D6D] text-white h-[30px] w-[121px] rounded-[5px] font-poppins max-[644px]:w-[82px] max-[644px]:h-[30px]"
              id="searchButton"
            >
              Search
            </button>
          </a>
        </div>
      </div>
      <TransitionGroup>
        <CSSTransition
          key={currentContentIndex}
          timeout={1000}
          classNames="blur-fade"
        >
          <BannerContent
            bgColor={bannerContents[currentContentIndex].bgColor}
            imgLeft={bannerContents[currentContentIndex].imgLeft}
            imgMiddle={bannerContents[currentContentIndex].imgMiddle}
            imgRight={bannerContents[currentContentIndex].imgRight}
            text={bannerContents[currentContentIndex].text}
            lineColor={bannerContents[currentContentIndex].lineColor}
          />
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Banner;
