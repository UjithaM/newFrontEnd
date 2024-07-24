import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "../../components/nav/Nav.tsx";
import HomePage from "../homePage/home.tsx";

import Category from "../category/Category.tsx";
import Landing from "../Landing/Landing.tsx";
import Banner from "../../components/banner/Banner.tsx";


function LandingPage() {

  return (
    <>
      {/* ------ Navigation Component -------*/}
      <Nav />
      <Landing />
      <Category />
     

      <HomePage/>
    </>
  );
}

export default LandingPage;
