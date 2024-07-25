import { useState, useEffect } from 'react';

interface Product {
    _id: string;
    title: string;
    image: string;
    description: string;
    price: string;
    site: string;
}

interface StoreDetailsProps {
    category: string;
}

const PAGE_SIZE = 3;

function StoreDetails({ category }: StoreDetailsProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchProducts = async (page: number, category: string) => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://offdealz.lk/api/?page=${page}`, {
                    headers: {
                        'X-API-KEY': import.meta.env.VITE_API_KEY,
                    },
                });
                const data = await response.json();
                if (category === 'laptops') {
                    setProducts(data.laptops);
                }else if (category === 'phones') {
                    setProducts(data.phones);
                }else if (category === 'bikes') {
                    setProducts(data.bike);
                }else if (category === 'cars') {
                    setProducts(data.car);
                }else if (category === 'microphones') {
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
        console.log(`More info clicked for product ${productId}`);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const startPage = Math.max(1, currentPage - Math.floor(PAGE_SIZE / 2));
    const endPage = Math.min(totalPages, startPage + PAGE_SIZE - 1);

    return (
        <div className="container mx-auto px-4">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product._id} className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105" onClick={() =>handleMoreInfoClick(product._id)}>
                        <div className="h-64 overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                                src={product.image[0]}
                                alt={`Product ${product._id}`}
                            />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-semibold text-lg mb-2">{product.title}</div>
                            <p className="text-gray-800 text-sm mb-2">Rs: {product.price}</p>
                            <div className="font-medium text-sm mb-4 text-gray-600">From: {product.site}</div>
                            <button
                                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-indigo-600 transition-colors duration-300 w-full z-10 relative"
                                onClick={() => handleMoreInfoClick(product._id)}
                            >
                                More Information
                            </button>
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center p-4"
                        >
                            <p className="text-white text-center text-xs md:text-sm">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
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
