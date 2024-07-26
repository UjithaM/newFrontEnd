
import { FaMapMarkerAlt, FaEnvelope, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="container px-4 mx-auto mt-12 mb-12">
      <div className="text-left mb-10 mx-auto space-y-2">
        <h1 className="text-2xl font-bold lg:text-2xl">
          About <span className="text-green-400">Us</span>
        </h1>
        <hr className="border-4 border-green-400" />
      </div>

      <div className="w-full h-auto">
        <div className="text-center mx-auto mb-6">
          <img 
            className="w-1/2 md:w-1/4 h-auto mx-auto"
            src="src/assets/img/logo.png" 
            alt="Logo" 
          />
        </div>
        <div className="text-center">
          <p className="text-xl md:text-2xl italic mb-6 px-4 md:px-0">
            "This site is created in order to reduce the time spent by customers online. 
            The best recommendations are given by comparing the price, ratings, etc., 
            of the products they are looking for. Our mission is to provide you with 
            the most efficient and seamless shopping experience by presenting top-quality 
            options tailored to your needs."
          </p>
          <div className="text-lg leading-7 mx-auto w-full md:w-2/3 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0">
            <div className="flex items-center">
              <FaBuilding className="text-green-400 mr-2" />
              <strong>Company Name:</strong> OFFDEALZ
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-green-400 mr-2" />
              <strong>Founded:</strong> 2021
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-green-400 mr-2" />
              <strong>Location:</strong> Colombo, Sri Lanka
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-400 mr-2" />
              <strong>Contact:</strong> info@offdealz@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
