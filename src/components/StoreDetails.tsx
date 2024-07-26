import { useState, useEffect } from 'react';
import riyasewana from "../assets/img/companies/riyasewana.png";
import abans from "../assets/img/companies/abans.png";
import autolanka from "../assets/img/companies/autolanka.jpg";
import celltronic from "../assets/img/companies/celltronics.jpeg";
import dialcom from "../assets/img/companies/dialcom.png";
import laptop from "../assets/img/companies/laptop.lk.png";
import life_mobile from "../assets/img/companies/lifemobile.jpg";
import nanotec from "../assets/img/companies/nanotec.jpeg";
import otc from "../assets/img/companies/otc.png";
import redtech from "../assets/img/companies/redtech.jpeg";
import saleme from "../assets/img/companies/saleme.png";
import xmobile from "../assets/img/companies/xmobile.jpeg";
import {Button, Slider} from "@nextui-org/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Product {
    _id: string;
    title: string;
    image: string;
    description: string;
    price: string;
    site: string;
    url: string;
}

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

interface StoreDetailsProps {
    category: string;
}

const siteLogos: { [key: string]: string } = {
    riyasewana: riyasewana,
    abans: abans,
    autolanka: autolanka,
    celltronic: celltronic,
    dialcom: dialcom,
    laptop: laptop,
    life_mobile: life_mobile,
    nanotec: nanotec,
    otc: otc,
    redtech: redtech,
    saleme: saleme,
    xmobile: xmobile,
};

const PAGE_SIZE = 3;

function StoreDetails({ category }: StoreDetailsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async (page: number, category: string) => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://offdealz.lk/api/${category}?page=${page}`, {
                    headers: {
                        'X-API-KEY': import.meta.env.VITE_API_KEY,
                    },
                });
                const data = await response.json();
                if (category === 'laptops') {
                    setProducts(data.laptops);
                } else if (category === 'phones') {
                    setProducts(data.phones);
                } else if (category === 'bikes') {
                    setProducts(data.bike);
                } else if (category === 'cars') {
                    setProducts(data.car);
                } else if (category === 'microphones') {
                    setProducts(data.microphones);
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                setTotalPages(data.totalPages || 1);
            } catch (e: any) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts(currentPage, category);
    }, [category, currentPage]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleMoreInfoClick = (productId: string) => {
        if (expandedProductId === productId) {
            setExpandedProductId(null); // Collapse if already expanded
        } else {
            setExpandedProductId(productId); // Expand the clicked card
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const startPage = Math.max(1, currentPage - Math.floor(PAGE_SIZE / 2));
    const endPage = Math.min(totalPages, startPage + PAGE_SIZE - 1);

    return (
        <div className="container mx-auto px-4">
            <div className="relative">
                {/* Render the expanded card at the top */}
                {expandedProductId && (
                    products
                        .filter(product => product._id === expandedProductId)
                        .map(product => (
                            <div
                                key={product._id}
                                className="fixed top-[7vh] left-0 right-0 z-20 bg-white shadow-lg h-[60vh] w-[80vw] mx-auto rounded-lg p-4"
                                style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
                            >
                                {product.image.length > 1 ? (
                                    <Slider {...sliderSettings}>
                                        {product.image.map((img, index) => (
                                            <div key={index}>
                                                <img
                                                    className="w-[25vw] h-[55vh] object-cover absolute left-1 top-2 bottom-2"
                                                    src={img}
                                                    alt={`Product ${product._id} - ${index}`}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    <img
                                        className="w-[25vw] h-[55vh] object-cover absolute left-1 top-2 bottom-2"
                                        src={product.image[0]}
                                        alt={`Product ${product._id}`}
                                    />
                                )}
                                <div className="relative">
                                    {/*<img*/}
                                    {/*    className=""*/}
                                    {/*    src={product.image[0]}*/}
                                    {/*    alt={`Product ${product._id}`}*/}
                                    {/*/>*/}
                                    <button
                                        className="absolute top-4 right-4 text-3xl text-black"
                                        onClick={() => setExpandedProductId(null)}
                                    >
                                        &times;
                                    </button>
                                    <div className="p-6 absolute right-20  top-0">

                                        <h2 className="text-xl font-semibold absolute right-20">{product.title}</h2>
                                        <p className="text-lg font-bold text-blue-400 absolute right-20 mt-14">Rs: {product.price}</p>
                                        <p className="text-sm text-gray-600 absolute right-20 mt-24">From: {product.site}</p>
                                        <p className="mt-40 w-[35vw] ">{product.description}</p>

                                        <a href={product.url}>
                                            <Button className=" mt-56 absolute right-20 bg-blue-500 font-bold hover:shadow-2xl rounded" >
                                                Buy Now
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                )}

                {/* Render the other products below the expanded card */}
                <div
                    className={`mt-8 ${expandedProductId ? 'pt-[50vh]' : ''} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                    {products
                        .filter(product => product._id !== expandedProductId)
                        .map(product => (
                            <div
                                key={product._id}
                                className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 cursor-pointer"
                                onClick={() => handleMoreInfoClick(product._id)}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                        src={product.image[0]}
                                        alt={`Product ${product._id}`}
                                    />
                                    <img
                                        className="absolute top-1 right-1 w-20 h-20"
                                        src={siteLogos[product.site] || 'path/to/default/logo.png'}
                                        alt={product.site}
                                    />
                                </div>
                                <div className="px-6 py-6">
                                    <div className="font-semibold text-lg mb-2">{product.title}</div>
                                    <p className="font-bold mb-2 text-blue-400">Rs: {product.price}</p>
                                    <div className="font-medium text-sm mb-8 text-gray-600">From: {product.site}</div>
                                    <button
                                        className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-indigo-600 transition-colors duration-300 w-full"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent click event from bubbling up
                                            handleMoreInfoClick(product._id);
                                        }}
                                    >
                                        More Information
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                <button
                    className={`px-4 py-2 mx-1 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors duration-300`}
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                <button
                    className={`px-4 py-2 mx-1 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors duration-300`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                    <button
                        key={startPage + index}
                        className={`px-4 py-2 mx-1 rounded-full ${currentPage === startPage + index ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-300`}
                        onClick={() => handlePageChange(startPage + index)}
                    >
                        {startPage + index}
                    </button>
                ))}
                <button
                    className={`px-4 py-2 mx-1 rounded-full ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors duration-300`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
                <button
                    className={`px-4 py-2 mx-1 rounded-full ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors duration-300`}
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
            </div>
        </div>
    );
}

export default StoreDetails;
