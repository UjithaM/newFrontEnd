import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Banner/Landing.css";
import Nav from "../../components/nav/Nav.tsx";
import HomePage from "../homePage/home.tsx";
import Banner from "../Banner/Banner.tsx";


function LandingPage() {
  return (
    <>
      {/* ------ Navigation Component -------*/}
      <Nav />
      <Banner />

      <HomePage />
    </>
  );
}

export default LandingPage;
