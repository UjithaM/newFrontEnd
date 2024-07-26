
import LandingButton from "../../pages/Landing/LandingButton";

const ProductCard = ({ data ,btnColor,textColor }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            key={data.id}
            data-aos = "fade-up"
            data-aos-delay = {data.aosDelay}
            className="group bg-white p-4 rounded-md shadow-md flex flex-col items-center"
          >
            <div 
            className="relative">
              <img
                src={data.img}
                alt=""
                className="[h-100px] w-[160px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <LandingButton
                  text={"Show More"}
                  bgColor={btnColor}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7 mt-2">
              <h2 className="font-semibold mb-1">{data.title}</h2>
              <h2 className={`font-bold ${textColor}`} >Rs.{data.price} /=</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
