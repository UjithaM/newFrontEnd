import images from "../../assets/constants/image.js";

export default function Footer() {
  return (
    <>
      <div className="absolute top-full w-full h-[215px] bg-[#D9D9D9] max-[617px]:h-[386px]">
        <div>
          <div>
            <div className="relative top-10">
              <div className="logo flex items-center">
                <img
                  src={images.Logo}
                  alt="logo"
                  className="h-[110px]  w-[111px] mr-2 max-[919px]:w-[72px] max-[781px]:w-[60px]"
                />
                <h1 className="  text-[60px] text-black max-[919px]:text-[40px] max-[781px]:text-[24px]">
                  LOGO
                </h1>
                <img
                  src={images.Line}
                  alt=""
                  className="ml-14 max-[919px]:ml-[2.5rem]"
                />
              </div>

              <div className="-mt-[7.2rem] ml-[26rem] max-[919px]:ml-[17rem] max-[781px]:ml-[13rem] max-[617px]:ml-[54%] ">
                <a href="#">
                  <button className="bg-[#2E81FF] w-[135px] h-[41px] rounded-[30px] font-poppins text-[19px] font-[500] max-[781px]:w-[100px] max-[781px]:h-[31] max-[781px]:text-[15px]">
                    Sign In
                  </button>
                  <br />
                </a>
                <a href="#">
                  <button className="ml-[1.9rem] mt-3  font-poppins text-[19px] font-[500] text-[#797979] max-[781px]:text-[15px] max-[781px]:ml-[1.2rem]">
                    Register
                  </button>
                </a>
              </div>
            </div>

            <div className="absolute right-[10%] -mt-[5.2rem] max-[1023px]:right-[2%] max-[617px]:left-0 max-[617px]:mt-24 ">
              <ul className="max-[781px]:ml-[2.5rem] ">
                <li>
                  <a
                    href=""
                    className="hover:text-gray-900 text-[20px] font-[600] font-poppins leading-[30px] max-[781px]:text-[15px]"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="/home"
                    className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/itemSerch"
                    className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/home"
                    className="hover:text-gray-900 text-[18px] fonr-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contactUs"
                    className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>

              <div className="relative ml-40 -mt-[10.5rem] ">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 text-[20px] font-[600] font-poppins leading-[30px] max-[781px]:text-[15px]"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                    >
                      Buy Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                    >
                      Track Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 text-[18px] fonr-[400] font-poppins leading-[35px] max-[781px]:text-[12px]"
                    >
                      Register as a seller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
