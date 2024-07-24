import images from "../../assets/constants/image.js";

function ImgCard(props) {
    return (
        <div className="relative flex flex-col items-center mt-14  ">
            <div className="w-[202px] h-[211px] bg-white shadow-ImgCard flex flex-col items-center justify-center">
                <img src={images[props.img]} alt="Air Pods" className="w-fit h-fit object-cover" />
            </div>
            <h1 className="mt-8 font-poppins text-[18px]">{props.name}</h1>
        </div>
    );
}

export default ImgCard;
