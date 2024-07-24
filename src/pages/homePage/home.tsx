import ImgCard from "../../components/imgCard";
import '../homePage/home.css'
import images from "../../assets/constants/image.js";
import Footer from "../../components/footer/footer.tsx";



function HomePage(){
    return(
        <>

            <div className="absolute bg-[#FFFFFF] top-full h-full w-full">

                {/*--------Trending Categories  Section---------*/}
                <div>
                    <h1 className="font-darker-grotesque text-[37px] font-semibold leading-[50.17px]  mt-20 ml-32        max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[24px]">
                        Trending Categories
                    </h1>


                    <div className="flex flex-col items-center bg-white min-h-screen w-full  pb-20">
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 ml-[8.3rem] mr-[8.3rem]">
                            <ImgCard name="Air Pod" img="AirPods"/>
                            <ImgCard name="Mouse" img="Mouse"/>
                            <ImgCard name="Smart Phone" img="Iphone"/>
                            <ImgCard name="Shoes" img="Shoes"/>
                            <ImgCard name="Laptops" img="Laptop"/>
                        </div>
                    </div>
                </div>



                {/*--------Summer Sale Section---------*/}
                <div id="summerSaleSection" className="absolute bg-[#A65858] h-[350px] w-[100%]  top-[700px]   max-[1371px]:top-[1000px] max-[920px]:top-[1300px] max-[693px]:top-[1985px] ">
                    <div className="max-[985px]:-ml-[7.5rem]">
                        <h1 className="font-impact text-[120px] text-white mt-14 ml-36  max-[648px]:text-[70px] max-[648px]:mt-[1rem]">
                            ULTRA <br/> &emsp; &ensp;&nbsp;<span className="absolute bassText bottom-[38px] max-[648px]:bottom-[172px] max-[648px]:text-[60px]">BASS</span>
                        </h1>
                        <img src={images.HeadSet2} alt="" className="relative h-[520px] w-[454px] -mt-[32rem]  ml-[9.5rem] z-[99999] max-[648px]:h-[278px] max-[648px]:-mt-[17rem] max-[648px]:ml-[3rem]"/>
                    </div>


                    <div className="absolute top-[0px] right-[20%] text-center  max-[1160px]:right-[8%] max-[780px]:top-[65px] max-[780px]:right-[2%] max-[648px]:right-[7%] max-[499px]:top-[173px] max-[356px]:-left-[37%]">
                        <h1 className="relative text-[70px] font-darker_grotesque text-white font-[900] leading-[108.48px]  max-[780px]:text-[40px] max-[780px]:leading-[60.48px] max-[499px]:text-[30px] max-[499px]:leading-[50.48px]">Hurry Up!</h1>
                        <h1 className="relative text-[40px] font-poppins text-[#D38D8D]  font-[900] leading-[6px]   max-[780px]:text-[24px] max-[780px]:leading-[3px] max-[499px]:text-[15px] max-[499px]:leading-[0px]">Summer Sale</h1>
                        <h1 className="font-poppins font-[300] text-[30px] text-white leading-[180px] max-[780px]:text-[20px] max-[780px]:leading-[120px] max-[499px]:text-[15px] max-[499px]:leading-[106px]">20% off</h1>
                        <div className="flex justify-center -mt-[28px]">
                            <a href="#">
                                <button className="bg-[#DBA5A5] rounded-[20px] h-[55px] w-[170px] font-poppins font-[700] text-[22px] text-white max-[780px]:w-[135px] max-[780px]:h-[46px] max-[780px]:text-[15px] max-[499px]:h-[35px] max-[499px]:w-[100px]">Shop now</button>
                            </a>
                        </div>
                    </div>



                    {/*--------Products Section---------*/}
                    <div className="relative max-[649px]:mt-[14rem]">

                        <h1 className="font-darker-grotesque text-[37px] font-[600] leading-[50.17px] text-left mt-20 ml-32    max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[42px]">
                            Products
                        </h1>



                        <div>
                            {/*-------Electronic Items--------*/}
                            <div>
                                <h1 className="font-darker-grotesque text-[37px] font-[600] leading-[50.17px] text-left mt-[4rem] ml-32     max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[24px]">
                                    Electronic Items
                                </h1>
                                <div className="flex flex-col items-center bg-white min-h-screen w-full  pb-20">
                                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 ml-[8.3rem] mr-[8.3rem]">
                                        <ImgCard name="Televisions" img="Tv2"/>
                                        <ImgCard name="Laptops" img="Laptop"/>
                                        <ImgCard name="Speakers" img="Jbl"/>
                                        <ImgCard name="Microphones" img="Microphone"/>
                                        <ImgCard name="Smart Phone" img="Iphone"/>

                                    </div>
                                </div>
                            </div>


                            {/*-------Furniture Items--------*/}
                            <div className="absolute top-[560px] w-full max-[1371px]:top-[900px]  max-[919.200px]:top-[1200px]">
                                <h1 className="font-darker-grotesque text-[37px] font-[600] leading-[50.17px] text-left ml-32         max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[24px]">
                                    Furniture Items
                                </h1>
                                <div className="flex flex-col items-center bg-white min-h-screen w-full pb-20">
                                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 ml-[8.3rem] mr-[8.3rem]">
                                        <ImgCard name="Cupboards" img="Cupboards" />
                                        <ImgCard name="Tables" img="Table" />
                                        <ImgCard name="Chairs" img="Chair2" />
                                        <ImgCard name="TV Stand" img="TvStand" />
                                        <ImgCard name="Cushion Chairs" img="Chair" />
                                    </div>


                                    {/*-------------------------------*/}


                                    <div className="relative w-[100%] h-[360px] bg-[#D9D9D9] top-[152px]  overflow-x-hidden overflow-y-hidden">

                                        <div className="relative left-[207px] max-[1047px]:left-[50px] max-[896px]:left-[10px]  max-[797px]:-top-[23px] max-[797px]:left-[96px] max-[797px]:-top-[13px] max-[617px]:left-[5px] max-[518px]:top-[10px]">
                                            <h1 className='font-poppins text-[43px] font-[600] leading-[194.5px] max-[797px]:text-[25px]   max-[518px]:leading-[83.5px]'>UP to  <span className="text-[#817D7D]">25%</span> Discount</h1>
                                            <button className="bg-[#D29B68] rounded-[30px] w-[203px] h-[49px] text-white font-poppins text-[23px] font-[600] -mt-[27px] ml-[7rem]     max-[797px]:text-[15px] max-[797px]:w-[130px] max-[797px]:ml-[3.4rem]">HURRY UP!</button>
                                            <h1 className="font-poppins text-[23px] font-[600]  leading-[48px] ml-[8.5rem] max-[797px]:text-[15px] max-[797px]:ml-[4.3rem] max-[518px]:leading-[30px]">Check it  now</h1>
                                            <h1 className="font-poppins text-[18px] font-[300]  leading-[90px] ml-[10rem]  max-[797px]:text-[13px] max-[797px]:ml-[5.3rem] max-[518px]:leading-[60px]">Shop now</h1>
                                        </div>
                                        <img src={images.PhoneGroup} alt="" className="absolute h-[350px]  -mt-[22.4rem] right-[5%] z-[99999]  max-[896px]:-right-[4%]  max-[797px]:h-[280px] max-[797px]:-mt-[18.2rem] max-[518px]:h-[250px] max-[518px]:-mt-[6.4rem] max-[426px]:h-[200px] max-[426px]:-mt-[3.3rem]"/>

                                    </div>

                                    {/*---------- About Us -------------*/}

                                    <div id="aboutUs" className="mt-52">
                                        <h1 className="font-darker-grotesque text-[37px] font-[600] leading-[50.17px] text-left mt-20 ml-32      max-[694px]:leading-[50.17px]  max-[694px]:ml-auto max-[694px]:mr-auto  max-[694px]:text-center  max-[694px]:text-[24px]">
                                            About Us
                                        </h1>

                                        <p className="font-darker_grotesque text-[23px] ml-36 mr-20 mt-4 font-[400] max-[694px]:text-[18px] max-[694px]:mr-12 max-[694px]:ml-12 max-[694px]:text-center">
                                            At our website, we are revolutionizing the online shopping  experience by offering a one-stop platform to search
                                            for  items  across  multiple shopping  websites.  Our goal is to make shopping  more  convenient,  efficient,  and
                                            enjoyable for our users.
                                        </p>

                                        <div className="text-center mt-20">
                                            <div className="inline-block mx-10">
                                                <img src={images.icon1} alt="Icon 1" className="w-[80px] h-auto mx-auto" />
                                                <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">Get the best value for money on <br/> over 500+ products</h1>
                                            </div>
                                            <div className="inline-block mx-10">
                                                <img src={images.icon2} alt="Icon 2" className="w-[80px] h-auto mx-auto" />
                                                <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">Track your item till it comes <br/> to your door step</h1>
                                            </div>
                                            <div className="inline-block mx-10">
                                                <img src={images.icon3} alt="Icon 3" className="w-[80px] h-auto mx-auto" />
                                                <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">Register with us and sell your <br/> products</h1>
                                            </div>

                                            <h1 className="relative top-[4.5rem] text-center font-darker_grotesque font-bold tracking-[0.3em] text-[18px] max-[694px]:text-[14px]">Engineered by SOLUTECH | 2024</h1>
                                        </div>

                                        {/*---------- Footer -------------*/}
                                        <div className="absolute top-full w-full h-[215px] bg-[#D9D9D9] max-[617px]:h-[386px]">
                                            <Footer/>
                                        </div>
                                        {/*<Footer/>*/}
                                        {/*<div>*/}
                                        {/*    <div className="absolute mt-20 w-full h-[215px] bg-[#D9D9D9] max-[617px]:h-[386px]">*/}

                                        {/*        <div className="relative top-10">*/}
                                        {/*            <div className="logo flex items-center">*/}
                                        {/*                <img src={images.Logo} alt="logo" className="h-[110px]  w-[111px] mr-2 max-[919px]:w-[72px] max-[781px]:w-[60px]" />*/}
                                        {/*                <h1 className="  text-[60px] text-black max-[919px]:text-[40px] max-[781px]:text-[24px]">LOGO</h1>*/}
                                        {/*                <img src={images.Line} alt="" className="ml-14 max-[919px]:ml-[2.5rem]"/>*/}
                                        {/*            </div>*/}

                                        {/*            <div className="-mt-[7.2rem] ml-[26rem] max-[919px]:ml-[17rem] max-[781px]:ml-[13rem] max-[617px]:ml-[54%] ">*/}
                                        {/*                <a href="#">*/}
                                        {/*                    <button className="bg-[#2E81FF] w-[135px] h-[41px] rounded-[30px] font-poppins text-[19px] font-[500] max-[781px]:w-[100px] max-[781px]:h-[31] max-[781px]:text-[15px]">Sign In</button><br/>*/}
                                        {/*                </a>*/}
                                        {/*                <a href="#">*/}
                                        {/*                    <button className="ml-[1.9rem] mt-3  font-poppins text-[19px] font-[500] text-[#797979] max-[781px]:text-[15px] max-[781px]:ml-[1.2rem]">Register</button>*/}
                                        {/*                </a>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}

                                        {/*        <div className="absolute right-[10%] -mt-[5.2rem] max-[1023px]:right-[2%] max-[617px]:left-0 max-[617px]:mt-24 ">*/}
                                        {/*            <ul className="max-[781px]:ml-[2.5rem] ">*/}
                                        {/*                <li><a href="#" className="hover:text-gray-900 text-[20px] font-[600] font-poppins leading-[30px] max-[781px]:text-[15px]">Menu</a></li>*/}
                                        {/*                <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">Home</a></li>*/}
                                        {/*                <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">Products</a></li>*/}
                                        {/*                <li><a href="#" className="hover:text-gray-900 text-[18px] fonr-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">About Us</a></li>*/}
                                        {/*                <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">Contact Us</a></li>*/}
                                        {/*            </ul>*/}

                                        {/*            <div className="relative ml-40 -mt-[10.5rem] ">*/}
                                        {/*                <ul>*/}
                                        {/*                    <li><a href="#" className="hover:text-gray-900 text-[20px] font-[600] font-poppins leading-[30px] max-[781px]:text-[15px]">Services</a></li>*/}
                                        {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">Buy Products</a></li>*/}
                                        {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">Track Products</a></li>*/}
                                        {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] fonr-[400] font-poppins leading-[35px] max-[781px]:text-[12px]">Register as a seller</a></li>*/}
                                        {/*                </ul>*/}
                                        {/*            </div>*/}

                                        {/*        </div>*/}



                                        {/*    </div>*/}
                                        {/*</div>*/}

                                    </div>

                                </div>
                            </div>

                           </div>

                    </div>

                    {/*------------------------------*/}

                    {/*<div className="relative w-[100%] h-[360px] bg-[#D9D9D9] top-[152px]">*/}

                    {/*    <div className="relative left-[207px]">*/}
                    {/*        <h1 className='font-poppins text-[43px] font-[600] leading-[194.5px]'>UP to  <span className="text-[#817D7D]">25%</span> Discount</h1>*/}
                    {/*        <button className="bg-[#D29B68] rounded-[30px] w-[203px] h-[49px] text-white font-poppins text-[23px] font-[600] -mt-[27px] ml-[7rem]">HURRY UP!</button>*/}
                    {/*        <h1 className="font-poppins text-[23px] font-[600]  leading-[48px] ml-[8.5rem]">Check it  now</h1>*/}
                    {/*        <h1 className="font-poppins text-[18px] font-[300]  leading-[90px] ml-[10rem]">Shop now</h1>*/}
                    {/*    </div>*/}
                    {/*    <img src={images.PhoneGroup} alt="" className="absolute h-[350px]  -mt-[22.4rem] right-[5%] z-[99999]"/>*/}

                    {/*</div>*/}


                    {/*---------- About Us -------------*/}

                    {/*<div className="mt-52">*/}
                    {/*    <h1 className="font-darker-grotesque text-[37px] font-[600] leading-[50.17px] text-left mt-20 ml-36">*/}
                    {/*        About Us*/}
                    {/*    </h1>*/}

                    {/*    <p className="font-darker_grotesque text-[23px] ml-36 mr-20 mt-4 font-[400]">*/}
                    {/*        At our website, we are revolutionizing the online shopping  experience by offering a one-stop platform to search*/}
                    {/*        for  items  across  multiple shopping  websites.  Our goal is to make shopping  more  convenient,  efficient,  and*/}
                    {/*        enjoyable for our users.*/}
                    {/*    </p>*/}

                    {/*    <div className="text-center mt-20">*/}
                    {/*        <div className="inline-block mx-10">*/}
                    {/*            <img src={images.icon1} alt="Icon 1" className="w-[80px] h-auto mx-auto" />*/}
                    {/*            <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">Get the best value for money on <br/> over 500+ products</h1>*/}
                    {/*        </div>*/}
                    {/*        <div className="inline-block mx-10">*/}
                    {/*            <img src={images.icon2} alt="Icon 2" className="w-[80px] h-auto mx-auto" />*/}
                    {/*            <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">Track your item till it comes <br/> to your door step</h1>*/}
                    {/*        </div>*/}
                    {/*        <div className="inline-block mx-10">*/}
                    {/*            <img src={images.icon3} alt="Icon 3" className="w-[80px] h-auto mx-auto" />*/}
                    {/*            <h1 className="text-center mt-4 font-poppins text-[15px] font-[500]">Register with us and sell your <br/> products</h1>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    /!*---------- Footer -------------*!/*/}

                    {/*    <footer>*/}
                    {/*        <div className="relative mt-20 w-full h-[215px] bg-[#D9D9D9]">*/}

                    {/*            <div className="relative top-10">*/}
                    {/*                <div className="logo flex items-center">*/}
                    {/*                    <img src={images.Logo} alt="logo" className="h-[110px]  w-[111px] mr-2" />*/}
                    {/*                    <h1 className="  text-[60px] text-black">LOGO</h1>*/}
                    {/*                    <img src={images.Line} alt="" className="ml-14"/>*/}
                    {/*                </div>*/}

                    {/*                <div className="-mt-[7.2rem] ml-[26rem]">*/}
                    {/*                    <button className="bg-[#2E81FF] w-[135px] h-[41px] rounded-[30px] font-poppins text-[19px] font-[500]">Sign In</button><br/>*/}
                    {/*                    <button className="ml-[1.9rem] mt-3  font-poppins text-[19px] font-[500] text-[#797979]">Register</button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="absolute right-[10%] -mt-[5.2rem]">*/}
                    {/*                <ul>*/}
                    {/*                    <li><a href="#" className="hover:text-gray-900 text-[20px] font-[600] font-poppins leading-[30px]">Menu</a></li>*/}
                    {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px]">Home</a></li>*/}
                    {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px]">Products</a></li>*/}
                    {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] fonr-[400] font-poppins leading-[35px]">About Us</a></li>*/}
                    {/*                    <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px]">Contact Us</a></li>*/}
                    {/*                </ul>*/}

                    {/*                <div className="relative ml-40 -mt-[10.5rem]">*/}
                    {/*                    <ul>*/}
                    {/*                        <li><a href="#" className="hover:text-gray-900 text-[20px] font-[600] font-poppins leading-[30px]">Services</a></li>*/}
                    {/*                        <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px]">Buy Products</a></li>*/}
                    {/*                        <li><a href="#" className="hover:text-gray-900 text-[18px] font-[400] font-poppins leading-[35px]">Track Products</a></li>*/}
                    {/*                        <li><a href="#" className="hover:text-gray-900 text-[18px] fonr-[400] font-poppins leading-[35px]">Register as a seller</a></li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}

                    {/*            </div>*/}



                    {/*        </div>*/}
                    {/*    </footer>*/}



                    {/*</div>*/}

                </div>


            </div>

        </>
    )
}
export default HomePage;