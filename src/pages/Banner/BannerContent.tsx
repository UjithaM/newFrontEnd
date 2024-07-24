const BannerContent = (props) => {
  return (
    <div className={`h-screen ${props.bgColor} relative flex flex-col`}>
      <div className="flex-grow flex items-center justify-center z-10">
        <p className="mainTextCss font-rajdhani font-bold text-[53px] leading-[1.2] text-center max-[1033px]:text-[45px] max-[881px]:text-[40px] max-[798px]:text-[35px] max-[437px]:text-[35px] max-[460px]:text-[32px] max-[335px]:text-[25px]">
        {props.text}
        </p>
      </div>
      <div className="relative flex items-end justify-center z-10 mb-8">
        <img
          src={props.imgLeft}
          alt="Banner Phone"
          className="banner-image-left"
        />
        <img
          src= {props.imgMiddle}
          alt="Banner Phone"
          className="banner-image-middle"
        />
        <img
          src= {props.imgRight}
          alt="Banner Phone"
          className="banner-image-right"
        />
      </div>
      <div className={`absolute ${props.lineColor} w-[200px] max-[339px]:w-[120px] top-0 left-0 right-0 h-full mx-auto`}></div>
    </div>
  );
};

export default BannerContent;
