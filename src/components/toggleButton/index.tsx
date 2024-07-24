import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../pages/landingPage/Landing.css'
function ToggleButton(props){
    return(
        <>
            <a href="#">
                <div className="toggleBtn position-relative  w-[200px] bg-[#D9D9D9] h-[46px] mt-[20px] mb-2 shadow-md ring-4 ring-transparent ring-offset-0 right-[-150px] transition-right duration-500 rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none hover:right-0 cursor-pointer">
                    <h3 className="toggleBtnTxt fw-bold position-absolute top-[50%] translate-y-[-50%] right-[23px] text-black">{props.btnName}</h3>
                    <div className="toggleBtnIcon position-absolute top-[50%] translate-y-[-50%] left-[10px]"><i className={`${props.icon}`}></i></div>
                </div>
            </a>
        </>
    );
}

export default  ToggleButton