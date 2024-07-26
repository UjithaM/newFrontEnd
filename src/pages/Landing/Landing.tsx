import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../pages/Landing/landing.css";
const Landing = ({ bannerImages =[] }) => {
  const settings = {
    arrows: true,
    infinite: true,
    dots: true,
    dotsClass: "slick-dots",
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000, 
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplay: true,
  };

  return (
    <div className="relative rounded-3xl">
      <div className="mt-[80px] mx-8 sm:mx-8 lg:mx-16 rounded-3xl"> {/* Adjust margin for responsiveness */}
        <div className="overflow-hidden rounded-3xl">
          <Slider {...settings}>
            {bannerImages.map((banner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={banner}
                  alt={`banner${index + 1}`}
                  className="w-full h-auto max-h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Landing;
