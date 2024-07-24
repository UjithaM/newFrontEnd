
const products = Array.from({ length: 32 }, (_, i) => ({
    id: i,
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
    description: `This is the description for product ${i + 1}. It provides an overview of the product's key features and benefits.`,
}));

function StoreDetails() {
    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={product.image} alt={`Product ${product.id + 1}`} />
                    <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">
                            {product.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreDetails;
