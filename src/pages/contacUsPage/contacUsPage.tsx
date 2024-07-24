import Nav from "../../components/nav/Nav.tsx";
import Footer from "../../components/footer/footer.tsx";



function ContactUsPage(){
    return(
        <>
            <Nav/>
            <div className="absolute w-full h-full " >
                <div className="mt-[50vh] transform -translate-y-1/2">
                    <h1 className="font-darker_grotesque  text-[37px] font-bold ml-[2rem]">Contact Us</h1>

                    <form className="text-center mt-12 flex flex-col items-center space-y-4">
                        <input placeholder="Name *" className="h-[78px] w-[560px] rounded-[20px] bg-[#FFFDFD] pl-4 placeholder:text-black placeholder:font-darker_grotesque placeholder:text-[25px] placeholder:font-[500] ring-2 ring-black focus:ring-4 focus:ring-white max-[581px]:w-[80%]"/>
                        <input placeholder="Email *" className="h-[78px] w-[560px] rounded-[20px] bg-[#FFFDFD] pl-4 placeholder:text-black placeholder:font-darker_grotesque placeholder:text-[25px] placeholder:font-[500] ring-2 ring-black focus:ring-4 focus:ring-white max-[581px]:w-[80%]"/>
                        <input placeholder="Massage *" className="h-[139px] w-[560px] rounded-[20px] bg-[#FFFDFD] pl-4 placeholder:text-black placeholder:font-darker_grotesque placeholder:text-[25px] placeholder:font-[500] ring-2 ring-black focus:ring-4 focus:ring-white max-[581px]:w-[80%]"/>
                        <a href="#">
                            <button className="bg-[#2E81FF] w-[135px] h-[41px] rounded-[10px] text-white font-poppins text-[19px] font-[500] max-[781px]:w-[100px] max-[781px]:h-[31] max-[781px]:text-[15px]">Send</button><br/>
                        </a>
                    </form>

                </div>

                <div className="mt-[50vh] transform -translate-y-96  w-full h-[215px] bg-[#D9D9D9] max-[617px]:h-[386px]">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default ContactUsPage