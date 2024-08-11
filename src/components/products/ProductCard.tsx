const ProductCard = ({ data, textColor }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 place-items-center">
                {data.map((data) => (
                    <div
                        key={data.id}
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className="group bg-white p-4 rounded-md shadow-md flex flex-col items-center hover:shadow-[#2FB44B] hover:shadow-xl transition duration-300 ease-in-out cursor-pointer mt-10"
                        style={{ height: '250px' }}
                    >
                        <div className="relative">
                            <img
                                src={data.image}
                                alt=""
                                className="w-[160px]  object-cover rounded-md"
                            />
                        </div>
                        <div className="leading-7 mt-2 text-center">
                            <h2 className="font-semibold mb-1 truncate" style={{ maxWidth: '160px' }}>
                                {data.title}
                            </h2>
                            <h2 className={`font-bold ${textColor}`}>Rs.{data.price} /=</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;