

const CategoryCard = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-delay="100"
    >
      <div
        className={`w-[200px] h-[200px] rounded-full relative justify-center text-center flex drop-shadow-2xl bg-[#EAECEE] hover:scale-110 transition-transform duration-500 ease-in-out`}
        onClick={() => {
          if  (props.title === "Cars") {
            window.location.href = `/itemSearch/cars`
          } else  if  (props.title === "Bikes") {
            window.location.href = `/itemSearch/bikes`
          } else  if  (props.title === "Laptops") {
            window.location.href = `/itemSearch/laptops`
          } else  if  (props.title === "MicroPhones") {
            window.location.href = `/itemSearch/microphones`
          } else  if  (props.title === "Smart Phones") {
            window.location.href = `/itemSearch/mobilePhones`
          }
        }}
      >
        <img
          src={props.img}
          alt=""
          className={` drop-shadow-2xl object-cover scale-125 ${props.width} ${props.height} absolute bottom-0`}
        />
      </div>

      <h1 className="text-center text-2xl font-bold mt-4">{props.title}</h1>
    </div>
  );
};

export default CategoryCard;
