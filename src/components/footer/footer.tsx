import {
  FaBuilding,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobile,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../../assets/img/logo.png";
import qr from "../../assets/img/qr.png";

export default function Footer() {
  const FooterLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "#aboutUs",
    },
    {
      title: "Contact",
      link: "/contactUs",
    },

    {
      title: "Register",
      link: "/signUp",
    },
    {
      title: "Privacy Policy",
      link: "/",
    },
    {
      title: "Terms & Conditions",
      link: "/",
    },
  ];
  return (
    <>
      <div className="bg-[#EAFAF1]">
        <div className="container">
          <div className="grid md:grid-cols-3">
            {/* company details */}
            <div className="py-8 px-4">
              <a>
                <img
                  src={logo}
                  alt=""
                  className="w-[350px]"
                />
              </a>
            </div>
            {/* Footer links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="space-y-3">
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="text-gray-600 hover:text-black duration-300"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* company details */}
              <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                  Contact Us
                </h1>
                <div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-green-400 mr-2" />
                    <p>Colombo, Sri Lanka</p>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <FaMobile className="text-green-400 mr-2" />
                    <p> 077 123 4567 / 077 123 4567</p>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <FaEnvelope className="text-green-400 mr-2" />
                    <p>info@offdealz@gmail.com</p>
                  </div>

                  <div className="flex items-center gap-3 mt-6">
                    <FaBuilding className="text-green-400 mr-2" />
                    <p>OffDealz (Pvt) Ltd</p>
                  </div>
                  {/* social links */}
                  <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                      <FaFacebook className="text-3xl text-green-400 hover:text-black duration-300" />
                    </a>
                    <a href="#">
                      <FaInstagram className="text-3xl text-green-400 hover:text-black duration-300" />
                    </a>
                    <a href="#">
                      <FaTwitter className="text-3xl text-green-400 hover:text-black duration-300" />
                    </a>
                    <a href="#">
                      <FaWhatsapp className="text-3xl text-green-400 hover:text-black duration-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                  Scan QR Code
                </h1>
                <div className="flex items-center gap-3">
                  <div className="py-8 px-4">
                    <a>
                      <img
                        src= {qr}
                        alt=""
                        className="w-[350px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#A9DFBF] text-center p-2">
          <h1>Design & Developed by SoluTech (Pvt) Ltd</h1>
        </div>
      </div>
    </>
  );
}
