import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iphone from "../../assets/img/iPhone.svg";
import Laptop from "../../assets/img/lap.svg";
import MicroPhone from "../../assets/img/Microphone.svg";
import Bike from "../../assets/img/bike.png";
import Slider from "react-slick";
import Car from "../../assets/img/car.png";
import LandingButton from "./LandingButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroData = [
  {
    id: 1,
    img: Iphone,
    title: "Latest",
    title2: "Phones",
    bgColor: "mobile-hero-bg-color",
  },
  {
    id: 2,
    img: Laptop,
    title: "Top",
    title2: "Laptops",
    bgColor: "laptop-hero-bg-color",
  },
  {
    id: 3,
    img: MicroPhone,
    title: "High-Quality",
    title2: "Microphones",
    bgColor: "microphones-hero-bg-color",
  },
  {
    id: 4,
    img: Bike,
    title: "Branded",
    title2: "Bikes",
    bgColor: "bikes-hero-bg-color",
  },
  {
    id: 5,
    img: Car,
    title: "Luxury",
    title2: "Cars",
    bgColor: "cars-hero-bg-color",
  },
];

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplay: true,
    afterChange: () => {
      AOS.refresh();
    },
  };

  return (
    <div className="ml-5 mr-5">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h[650px] hero-bg-color h-screen">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center h-screen relative">
                  <div
                    className={`flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-1 z-10 h-full`}
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <LandingButton
                        text="Shop by Category"
                        bgColor={data.bgColor}
                        textColor="text-black"
                      />
                    </div>
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2 h-full flex items-center justify-center sm:justify-end">
                    <div
                      className={`h-full flex items-center justify-center ${data.bgColor}`}
                    >
                      <img
                        data-aos="zoom-in"
                        data-aos-once="true"
                        src={data.img}
                        alt={data.title}
                        className="w-[1000px] h-[1000px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Landing;
