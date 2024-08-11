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
import patpatLk from "../assets/img/companies/download.jpeg";
import { Button } from "@nextui-org/react";
import Slider, { CustomArrowProps } from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2 cursor-pointer z-10`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

const PrevArrow: React.FC<CustomArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2 cursor-pointer z-10`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

interface Product {
    _id: string;
    title: string;
    image: string[] | string;
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

interface StoreDetailsProps {
    category: string;
    searchQuery: string;
}

const siteLogos: { [key: string]: string } = {
    riyasewana: riyasewana,
    patpatlk:patpatLk,
    abans: abans,
    autolanka: autolanka,
    celltronic: celltronic,
    dialcom: dialcom,
    laptop: laptop,
    life_mobile: life_mobile,
    nanotek: nanotec,
    otc: otc,
    redtech: redtech,
    saleme: saleme,
    xmobile: xmobile,
};

const PAGE_SIZE = 3;

function StoreDetails({ category,searchQuery }: StoreDetailsProps) {
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
                } else if (category === 'mobilePhones') {
                    setProducts(data.mobile);
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

    useEffect(() => {
        if (expandedProductId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [expandedProductId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleMoreInfoClick = (productId: string) => {
        if (expandedProductId === productId) {
            setExpandedProductId(null);
            setCurrentPage(1); // Reset the page when closing the expanded view
        } else {
            setExpandedProductId(productId);
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const startPage = Math.max(1, currentPage - Math.floor(PAGE_SIZE / 2));
    const endPage = Math.min(totalPages, startPage + PAGE_SIZE - 1);

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const groupedProducts = expandedProductId || searchQuery
        ? filteredProducts.reduce((acc, product) => {
            if (!acc[product.site]) {
                acc[product.site] = [];
                    }
                    acc[product.site].push(product);
                    return acc;
                }, {} as { [key: string]: Product[] })
        : { 'all': products };
    return (
        <div className="container mx-auto px-4">
            <div className="relative">
                {expandedProductId && (
                    products
                        .filter(product => product._id === expandedProductId)
                        .map(product => (
                            <div
                                key={product._id}
                                className="absolute top-0 left-0 right-0 z-20 bg-white shadow-lg h-[60vh] w-[80vw] mx-auto rounded-lg p-4"
                                style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
                            >
                                <div className="slider-container" style={{ width: '25vw', height: '1vh' }}>
                                    {Array.isArray(product.image) && product.image.length > 1 ? (
                                        <Slider {...sliderSettings}>
                                            {product.image.map((img, index) => (
                                                <div key={index}>
                                                    <img
                                                        className="object-cover w-full h-[55vh]"
                                                        src={img}
                                                        alt={`Product ${product._id} - ${index}`}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <img
                                            className="object-cover w-full h-[55vh]"
                                            src={Array.isArray(product.image) ? product.image[0] : product.image}
                                            alt={`Product ${product._id}`}
                                        />
                                    )}
                                </div>
                                <div className="relative">
                                    <button
                                        className="absolute top-4 right-4 text-3xl text-black"
                                        onClick={() => handleMoreInfoClick(product._id)}
                                    >
                                        &times;
                                    </button>
                                    <div className="p-6 absolute right-20 top-0">
                                        <h2 className="text-xl font-semibold">{product.title}</h2>
                                        <p className="text-lg font-bold text-blue-400 ">Rs: {product.price}</p>
                                        <p className="text-sm text-gray-600 font-bold">From: {product.site}</p>
                                        <p className="0 w-[35vw]">{product.description}</p>
                                        <a href={product.url}>
                                            <Button
                                                className="mt-3 bg-blue-500 font-bold text-white hover:shadow-2xl rounded">
                                                View Product
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                )}

                <div className={`mt-8 ${expandedProductId ? 'pt-[70vh]' : ''}`}>
                    {Object.entries(groupedProducts).map(([site, siteProducts]) => (
                        <div key={site} className="mb-8">
                            {site !== 'all' && (
                                <div
                                    className="flex items-center justify-center mb-4 p-4 bg-gray-200 rounded-lg relative">
                                <div className="flex items-center justify-center">
                                        <img
                                            className="h-20 mx-4"
                                            src={siteLogos[site] || 'path/to/default/logo.png'}
                                            alt={site}
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {siteProducts.map(product => (
                                    <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                                        <div className="h-48 relative">
                                            {Array.isArray(product.image) && product.image.length > 1 ? (
                                                <Slider {...sliderSettings}>
                                                        {product.image.map((img, index) => (
                                                        <div key={index}>
                                                            <img
                                                                className="object-cover w-full h-48"
                                                                src={img}
                                                                alt={`Product ${product._id} - ${index}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            ) : (
                                                <img
                                                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                                                    alt={`Product ${product._id}`}
                                                />
                                            )}
                                            <img
                                                className="absolute top-1 right-1 w-20 h-20 p-2 bg-white rounded-full shadow-md"
                                                src={siteLogos[product.site] || 'path/to/default/logo.png'}
                                                alt={product.site}
                                            />
                                        </div>
                                        <div className="px-6 py-6">
                                            <div className="font-semibold text-lg mb-2">{product.title}</div>
                                            <p className="font-bold mb-2 text-blue-400">Rs: {product.price}</p>
                                            <div className="font-medium text-sm mb-8 text-gray-600">From: {product.site}</div>
                                            <button
                                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded"
                                                onClick={() => handleMoreInfoClick(product._id)}
                                            >
                                                More Information
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {!expandedProductId && (
                    <div className="flex justify-center mt-8 space-x-2">
                        <button
                            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                        >
                            First
                        </button>
                        <button
                            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                            <button
                                key={startPage + index}
                                className={`px-3 py-1 rounded ${currentPage === startPage + index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                                onClick={() => handlePageChange(startPage + index)}
                            >
                                {startPage + index}
                            </button>
                        ))}
                        <button
                            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                        <button
                            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            Last
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StoreDetails;
