
import CountdownTimer from '../countdown/CountdownTimer';

import logo from '../../assets/img/logo.png';


const Banner = ({ data }) => {
  return (
    <div className="min-h-[500px] flex justify-center items-center ">
      <div className="w-full mr-5 ml-5 container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-lg"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <img src={logo} alt="logo" className="h-[60px] mb-2 bg-white rounded-xl" />
            <p 
              data-aos="slide-right"
              className="text-lg">{data.discount}</p>
            <h1 
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p 
              data-aos="fade-up"
              className="text-sm">{data.date}</p>
          </div>
          {/* second col */}
          <div 
            data-aos="zoom-in"
            className="h-full flex items-center">
            <img
              src={data.image}
              alt="Banner"
              className={`scale-150 ${data.width} drop-shadow-2xl object-cover`}
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <CountdownTimer endDate={data.endDate} /> {/* Pass the end date here */}
            <p 
              data-aos="zoom-out"
              className="font-bold text-xl">{data.title2}</p>
            <p 
              data-aos="fade-up"
              className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p 
              data-aos="fade-up"
              className="text-sm tracking-wide leading-5">{data.title4}</p>

            <div
              data-aos="fade-up"
              data-aos-offset="0"
            >
              <button
                style={{ color: data.bgColor }}
                className="bg-white px-4 py-2 rounded-full"
              >Show Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
