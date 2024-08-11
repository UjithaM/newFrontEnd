

const LandingButton = ({ text, bgColor, textColor }) => {
  return (
      <button onClick={() => alert("Button Clicked")}
          className={`${bgColor} ${textColor} cursor-pointer hover:scale-105
    duration-300 py-2 px-8 rounded-full relative z-10 font-bold text-lg`}
      >
        {text}
      </button>
  );
};

export default LandingButton;