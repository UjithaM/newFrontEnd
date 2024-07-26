import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "../../components/nav/Nav.tsx";
import HomePage from "../homePage/home.tsx";

import Landing from "../Landing/Landing.tsx";

import Products from "../../components/products/Products.tsx";
import Category from "../../components/category/Category.tsx";
import Banner from "../../components/banner/Banner.tsx";

import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";
import Banner4 from "../../assets/img/banner4.png";
import Banner5 from "../../assets/img/banner5.png";
import Banner6 from "../../assets/img/banner6.png";
import Banner7 from "../../assets/img/banner7.png";
import Banner8 from "../../assets/img/banner8.png";

import Footer from "../../components/footer/footer.tsx";
import AboutUsPage from "../aboutUsPage/AboutUsPage.tsx";


function LandingPage() {
  const LandingBanners = [Banner6,Banner1, Banner2, Banner5, Banner7 ,Banner8];
  const TopProductsBanners = [Banner3, Banner4];

  return (
    <>
      {/* ------ Navigation Component -------*/}
      <Nav />

      <Landing bannerImages={LandingBanners} />
      <div className="container">
        <Products />
      </div>

      <Banner
        data={{
          discount: "50% off",
          title: "iPhone 11",
          date: "Valid till 31st Dec",
          image: "src/assets/img/iPhone.svg",
          title2: "Capture Your Moments",
          title3: "With Stunning Clarity",
          title4: "Available Now!",
          bgColor: "#5D6D7E",
          endDate: "2024-07-30T23:59:59",
          width: "w-[150px]",
        }}
      />

      <div className="container mt-7">
        <div className="text-left mb-10 mx-auto space-y-2">
          <h1 className="text-2xl font-bold lg:text-2xl">
            Shop From <span className="text-blue-400">Top Categories</span>
          </h1>
          <hr className="border-4 border-blue-400"></hr>
        </div>
      </div>

      <Category />

      <div className="container mt-12">
        <div className="text-left mb-10 mx-auto space-y-2">
          <h1 className="text-2xl font-bold lg:text-2xl">
            Top <span className="text-red-400">Electronic Brands</span>
          </h1>
          <hr className="border-4 border-red-400"></hr>
        </div>
      </div>

      <div className="container">
        <Landing bannerImages={TopProductsBanners} />
      </div>

      <Banner
        data={{
          discount: "Special Offer: 15% Off",
          title: "HP Pavilion Series",
          date: "Offer Ends on 31st Dec",
          image: "src/assets/img/hp-lap.png",
          title2: "Unleash Productivity",
          title3: "With Power and Performance",
          title4: "Available Now!",
          bgColor: "#004080", // A color that matches the HP brand
          endDate: "2024-07-31T23:59:59",
          width: "w-[300px]", // Slightly wider for better visibility
        }}
      />

      <div className="container" id="aboutUs">
        <AboutUsPage />
      </div>
      <Footer />  

      
    </>
  );
}

export default LandingPage;
