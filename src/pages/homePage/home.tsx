import ImgCard from "../../components/imgCard";
import "../homePage/home.css";
import images from "../../assets/constants/image.js";
import Footer from "../../components/footer/footer.tsx";
import { Image } from "@nextui-org/react";
import Banner from "../../components/banner/Banner.tsx";

function HomePage() {
  return (
    <>
      <div className="absolute bg-[#FFFFFF] top-full h-full w-full">
        {/*--------Summer Sale Section---------*/}
        <div
          id="summerSaleSection"
          className="absolute  h-[350px] w-[100%]  top-[700px]   max-[1371px]:top-[1000px] max-[920px]:top-[1300px] max-[693px]:top-[1985px] "
        >
          <Banner
            data={{
              discount: "50% off",
              title: "iPhone 11",
              date: "Valid till 31st Dec",
              image: "src/assets/img/iPhone.svg",
              title2: "Capture Your Moments",
              title3: "With Stunning Clarity",
              title4: "Available Now!",
              bgColor: "#5D6D7E",
            }}
          />

          

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
