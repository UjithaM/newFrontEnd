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

function LandingPage() {
  const LandingBanners = [Banner1, Banner2];
  const TopProductsBanners = [Banner3, Banner3];

  return (
    <>
      {/* ------ Navigation Component -------*/}
      <div className="container">
        <Nav />
        <Landing bannerImages={LandingBanners} />
        <Products />

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
              Top <span className="text-blue-400">Electronic Brands</span>
            </h1>
            <hr className="border-4 border-blue-400"></hr>
          </div>
        </div>
        <Landing bannerImages={TopProductsBanners} />
      </div>
    </>
  );
}

export default LandingPage;
