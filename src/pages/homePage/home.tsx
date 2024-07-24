import ImgCard from "../../components/imgCard";
import "../homePage/home.css";
import images from "../../assets/constants/image.js";
import Footer from "../../components/footer/footer.tsx";
import { Image } from "@nextui-org/react";

function HomePage() {
  return (
    <>
      <div className="absolute bg-[#FFFFFF] top-full h-full w-full">
        {/*--------Trending Categories  Section---------*/}
        <div>
          <h1 className="font-darker-grotesque text-[37px] font-semibold leading-[50.17px]  mt-20 ml-32        max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[24px]">
            Trending Categories
          </h1>

          <div className="flex flex-col items-center bg-white min-h-screen w-full  pb-20">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 ml-[8.3rem] mr-[8.3rem]">
              <ImgCard name="Smart Phone" img="Iphone" />
              <ImgCard name="Laptops" img="Laptop" />
              <ImgCard name="Bike" img="Bike" />
              <ImgCard name="Car" img="Car" />
              <ImgCard name="Micro Phones" img="Microphone" />
            </div>
          </div>
        </div>

        {/*--------Summer Sale Section---------*/}
        <div
          id="summerSaleSection"
          className="absolute bg-[#A65858] h-[350px] w-[100%]  top-[700px]   max-[1371px]:top-[1000px] max-[920px]:top-[1300px] max-[693px]:top-[1985px] "
        >
   <div className="max-[985px]:-ml-[7.5rem]">
  <h1 className="font-impact text-[120px] text-white mt-14 ml-36 max-[648px]:text-[70px] max-[648px]:mt-[1rem]">
    CRYSTAL <br /> &emsp; &ensp;&nbsp;
    <span className="absolute bassText bottom-[38px] max-[648px]:bottom-[172px] max-[648px]:text-[60px]">
      CLEAR
    </span>
  </h1>
  <img
    src={images.Microphone}
    alt="Microphone"
    className="relative h-[520px] w-[454px] -mt-[32rem] ml-[9.5rem] z-[99999] max-[648px]:h-[278px] max-[648px]:-mt-[17rem] max-[648px]:ml-[3rem]"
  />
</div>


          <div className="absolute top-[0px] right-[20%] text-center  max-[1160px]:right-[8%] max-[780px]:top-[65px] max-[780px]:right-[2%] max-[648px]:right-[7%] max-[499px]:top-[173px] max-[356px]:-left-[37%]">
            <h1 className="relative text-[70px] font-darker_grotesque text-white font-[900] leading-[108.48px]  max-[780px]:text-[40px] max-[780px]:leading-[60.48px] max-[499px]:text-[30px] max-[499px]:leading-[50.48px]">
              Hurry Up!
            </h1>
            <h1 className="relative text-[40px] font-poppins text-[#D38D8D]  font-[900] leading-[6px]   max-[780px]:text-[24px] max-[780px]:leading-[3px] max-[499px]:text-[15px] max-[499px]:leading-[0px]">
              Summer Sale
            </h1>
            <h1 className="font-poppins font-[300] text-[30px] text-white leading-[180px] max-[780px]:text-[20px] max-[780px]:leading-[120px] max-[499px]:text-[15px] max-[499px]:leading-[106px]">
              20% off
            </h1>
            <div className="flex justify-center -mt-[28px]">
              <a href="#">
                <button className="bg-[#DBA5A5] rounded-[20px] h-[55px] w-[170px] font-poppins font-[700] text-[22px] text-white max-[780px]:w-[135px] max-[780px]:h-[46px] max-[780px]:text-[15px] max-[499px]:h-[35px] max-[499px]:w-[100px]">
                  Shop now
                </button>
              </a>
            </div>
          </div>

          {/*--------Products Section---------*/}
          <div className="relative">
            <div>
              {/*-------Electronic Items--------*/}

              {/*-------Furniture Items--------*/}
              <div>
                <div className="flex flex-col items-center bg-white min-h-screen w-full pb-20">
                  {/*-------------------------------*/}

                  {/*---------- About Us -------------*/}

                  <div id="aboutUs" className="mt-52">
                    <h1 className="font-darker-grotesque text-[37px] font-[600] leading-[50.17px] text-left mt-20 ml-32      max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[24px]">
                      About Us
                    </h1>

                    <p className="font-darker_grotesque text-[23px] ml-36 mr-20 mt-4 font-[400] max-[694px]:text-[18px] max-[694px]:mr-12 max-[694px]:ml-12 max-[694px]:text-center">
                      At our website, we are revolutionizing the online shopping
                      experience by offering a one-stop platform to search for
                      items across multiple shopping websites. Our goal is to
                      make shopping more convenient, efficient, and enjoyable
                      for our users.
                    </p>

                    <div className="text-center mt-20">
                      <div className="inline-block mx-10">
                        <img
                          src={images.icon1}
                          alt="Icon 1"
                          className="w-[80px] h-auto mx-auto"
                        />
                        <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">
                          Get the best value for money on <br /> over 500+
                          products
                        </h1>
                      </div>
                      <div className="inline-block mx-10">
                        <img
                          src={images.icon2}
                          alt="Icon 2"
                          className="w-[80px] h-auto mx-auto"
                        />
                        <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">
                          Track your item till it comes <br /> to your door step
                        </h1>
                      </div>
                      <div className="inline-block mx-10">
                        <img
                          src={images.icon3}
                          alt="Icon 3"
                          className="w-[80px] h-auto mx-auto"
                        />
                        <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">
                          Register with us and sell your <br /> products
                        </h1>
                      </div>

                      <h1 className="relative top-[4.5rem] text-center font-darker_grotesque font-bold tracking-[0.3em] text-[18px] max-[694px]:text-[14px]">
                        Engineered by SOLUTECH | 2024
                      </h1>
                    </div>

                    {/*---------- Footer -------------*/}

                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
