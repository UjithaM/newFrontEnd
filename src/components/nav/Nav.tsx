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



    const handleLinkClick = (event) => {
        const value = event.target.value;
        if (value === 'laptops'){
            navigate('/itemSearch/laptops');
        } else if (value === 'phones'){
            navigate('/itemSearch/phones');
        } else if (value === 'microphones'){
            navigate('/itemSearch/microphones');
        } else if (value === 'bikes'){
            navigate('/itemSearch/bikes');
        } else if (value === 'cars'){
            navigate('/itemSearch/cars');
        }
    };

    return (
        <>
            <nav className="px-5 w-full h-[60px] bg-[#FFFFFF] shadow-md flex justify-between items-center fixed z-[99999999999999999999] overflow-x-hidden">
                {/* Logo */}
                <div className="logo flex items-center max-[767px]:absolute max-[767px]:right-[2rem]">
                    <img src={images.Logo} alt="logo" className="h-8 w-auto mr-2" />
                    <h1 className="text-lg font-semibold text-white" style={{ background: 'linear-gradient(to right, #b927fc 0%, #2c64fc 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>LOGO</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center">
                    <li className="ml-6"><a href="/home" className="text-black text-sm font-normal py-1 px-2n dev rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">Home</a></li>
                    <li className="ml-6">
                        <select
                            className=" text-sm font-normal py-1 px-2 rounded-lg  transition duration-300 w-[100px] font-poppins"
                            onChange={handleLinkClick}>
                            <option value="" disabled={true} selected={true}>Products</option>
                            <option value="laptops">Laptops</option>
                            <option value="phones">Phones</option>
                            <option value="microphones">Microphones</option>
                            <option value="bikes">Bikes</option>
                            <option value="cars">Cars</option>
                        </select>
                    </li>
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
                    <li className="ml-6"><a href="/signUp" className="text-black text-sm font-normal py-1 px-2 rounded-lg hover:bg-gray-100 transition duration-300 font-poppins text-[18px]">Register</a></li>
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
                        <a href="/home">
                            <li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">Home</li>
                        </a>

                            <select
                                className=" text-sm font-normal py-1 px-1 rounded-lg  transition duration-300 w-[100px] font-poppins"
                                onChange={handleLinkClick}>
                                <option value="" disabled={true} selected={true}>Products</option>
                                <option value="laptops">Laptops</option>
                                <option value="phones">Phones</option>
                                <option value="microphones">Microphones</option>
                                <option value="bikes">Bikes</option>
                                <option value="cars">Cars</option>
                            </select>

                        <a href="/home">
                            <li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">About
                                Us
                            </li>
                        </a>
                        <a href="/contactUs">
                            <li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">Contact
                                Us
                            </li>
                        </a>
                        <a href="/signUp">
                        <li className="text-black text-sm font-normal py-1 px-2 rounded-lg transition duration-300 font-poppins text-[18px]">Register
                            </li>
                        </a>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Nav;
