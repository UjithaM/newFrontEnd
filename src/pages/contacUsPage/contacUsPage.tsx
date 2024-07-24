import Nav from "../../components/nav/Nav.tsx";
import Footer from "../../components/footer/footer.tsx";
import facebookIcon from '../assets/img/contacts/facebook.png';
import twitterIcon from '../assets/img/contacts/twitter.png';
import instaIcon from '../assets/img/contacts/insta.png';

function ContactUsPage(){
    return(
        <>
            <Nav/>

            <div className="h-full">
            <div className="absolute shadow  bg-white rounded w-[75%] h-[65vh] ml-[12%] top-24 mb-12">
                    <div className="mt-14">
                        <div className="flex flex-col lg:flex-row ">
                            <div className="flex-2 mt-20">
                                <h1 className="font-darker_grotesque text-[37px] font-bold ml-[8rem]">Location</h1>
                                <p className="font-poppins text-[19px] font-[400] ml-[8rem] mt-10">Grace Perice Road<br/>
                                    Panadura.
                                </p>


                                <h1 className="font-darker_grotesque text-[37px] font-bold ml-[8rem] mt-20">Follow us</h1>
                                <div className="flex ml-[8rem] mt-10 space-x-4">
                                    <a href="#"><img src={facebookIcon} alt="facebook" className="w-8 h-8"/></a>
                                    <a href="#"><img src={twitterIcon} alt="twitter" className="w-8 h-8"/></a>
                                    <a href="#"><img src={instaIcon} alt="instagram" className="w-8 h-8"/></a>
                                </div>
                                <p className="font-poppins text-[16px] font-[400] ml-[8rem] mt-4">
                                    @2024 All Rights Reserved
                                </p>
                            </div>

                            <div className="flex-1 mt-16 lg:mt-0 relative">
                                <div className="text-center">
                                    <h1 className="font-darker_grotesque text-[37px] font-bold mb-4">Contact Form</h1>
                                    <p className="font-poppins text-[19px] font-[400] mb-6">Please fill in the form below to
                                        contact us.</p>
                                </div>

                                <form className="text-center flex flex-col items-center space-y-4">
                                    <input placeholder="Enter your name"
                                           className="h-[70px] w-[560px] bg-[#e6e6e6] rounded-[3px] pl-4 placeholder:text-black placeholder:font-darker_grotesque placeholder:text-[20px] placeholder:font-[500] focus:ring-1 focus:ring-white max-[581px]:w-[80%]"/>
                                    <input placeholder="Enter a valid email"
                                           className="h-[70px] w-[560px] bg-[#e6e6e6] rounded-[3px] pl-4 placeholder:text-black placeholder:font-darker_grotesque placeholder:text-[20px] placeholder:font-[500] focus:ring-1 focus:ring-white max-[581px]:w-[80%]"/>
                                    <input placeholder="Enter your message"
                                           className="h-[139px] w-[560px] bg-[#e6e6e6] rounded-[3px] pl-4 placeholder:text-black placeholder:font-darker_grotesque placeholder:text-[20px] placeholder:font-[500] focus:ring-1 focus:ring-white max-[581px]:w-[80%]"/>
                                    <a href="#">
                                        <button
                                            className="bg-[#f5f5f5] w-[135px] h-[45px] border-b-black rounded-[5px] text-black font-poppins text-[19px] font-[400] max-[781px]:w-[100px] max-[781px]:h-[31px] ring-1 ring-black max-[781px]:text-[15px]">Submit
                                        </button>
                                        <br/>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
                <div
                    className="absolute bottom-0 mt-16 w-full h-[215px] bg-[#D9D9D9] max-[617px]:h-[386px]">
                       <Footer/>
                </div>

            </div>


        </>
    )
}

export default ContactUsPage