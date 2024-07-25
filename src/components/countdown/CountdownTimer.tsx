
import Countdown from 'react-countdown';

const CountdownTimer = ({ endDate }) => {
  return (
    <div data-aos="zoom-in" className="flex flex-col items-center justify-center bg-white  rounded-lg shadow-lg w-[300px]">
      <h2 className="text-lg font-bold mb-2 text-black">Discount Ends In:</h2>
      <Countdown date={endDate} renderer={({ days, hours, minutes, seconds }) => (
        <div className="text-center justify-center">
          <div className="text-2xl font-bold text-black">{days}d {hours}h {minutes}m {seconds}s</div>
        </div>
      )} />
    </div>
  );
};

export default CountdownTimer;
