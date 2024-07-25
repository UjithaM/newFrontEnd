import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import images from '../../assets/constants/image.js';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate(); // Hook to get the navigate function

    const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value === 'option1') {
            // Navigate to the Register page
            navigate('/signUp');
        } else if (value === 'option2') {
            // Navigate to the Sign In page
            navigate('/');
        }
    };

    return (
        <>
           <nav className="px-5 w-full h-[60px] bg-[#FFFFFF] shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50 overflow-x-hidden overflow-hidden">
                {/* Logo */}
                <div className="logo flex items-center max-[767px]:absolute max-[767px]:right-[2rem]">
                    <img src={images.Logo} alt="logo" className="h-32 w-auto mr-2" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center">
                    <li className="ml-6"><a href="/home" className="text-black text-sm font-normal py-1 px-2n dev rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">Home</a></li>
                    <li className="ml-6"><a href="/itemSerch" className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px] ">Products</a></li>
                    <li className="ml-6">
                        <Link
                            to="/home/#aboutUs"
                            onClick={() => {
                                // Ensure the page has loaded before scrolling
                                setTimeout(() => {
                                    const element = document.querySelector('#aboutUs');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]"
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="ml-6"><a href="/contactUs" className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">Contact Us</a></li>
                    <li className="ml-6">
                        <select className="text-white text-sm font-normal py-1 px-2 rounded-lg  bg-[#2f80ff] transition duration-300 w-[100px] font-poppins"  onChange={handleSelectChange}>
                            <option value="" disabled={true} selected={true}>Register</option>
                            <option value="option1">Register</option>
                            <option value="option2">Sign In</option>
                        </select>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div className="hamburger md:hidden cursor-pointer " onClick={toggleMenu}>
                    <span className="line w-6 h-0.5 bg-black block mb-1"></span>
                    <span className="line w-6 h-0.5 bg-black block mb-1"></span>
                    <span className="line w-6 h-0.5 bg-black block mb-1"></span>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu bg-white w-[40%] h-full md:h-auto md:w-auto p-4 absolute top-[3.7rem]  left-0 md:static min-[767px]:hidden z-[999999999999]">
                    <ul className="flex flex-col items-start space-y-4 ">
                        <a href="/home"><li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">Home</li></a>
                        <a href="/itemSerch"><li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">Products</li></a>
                        <a href="/home"><li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">About Us</li></a>
                        <a href="/contactUs"><li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">Contact Us</li></a>
                        <li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">
                            <select className="text-white text-sm font-normal py-1 px-2 rounded-lg bg-[#2f80ff] transition duration-300 w-[100px] font-poppins"  onChange={handleSelectChange}>
                                <option value="" disabled={true} selected={true}>Register</option>
                                <option value="option1">Register</option>
                                <option value="option2">Sign In</option>
                            </select>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Nav;
