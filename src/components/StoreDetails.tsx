const products = Array.from({ length: 32 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
    description: `This is the description for product ${i + 1}. It provides an overview of the product's key features and benefits.`,
    name: `Product ${i + 1}`,
    price: 100 + i * 10,
    site: `Site ${i + 1}`,
}));

function StoreDetails() {
    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <div key={product.id} className="relative max-w-sm rounded overflow-hidden shadow-lg group">
                    <img className="w-full h-[70%] opacity-100" src={product.image} alt={`Product ${product.id}`} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.name}</div>
                        <p className="text-gray-700 text-base">Rs : {product.price}</p>
                        <div className="font-bold text-xl mb-2">From - {product.site}</div>
                    </div>
                    <div
                        className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4 opacity-5 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-gray-700 text-base text-center">
                            {product.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreDetails;
