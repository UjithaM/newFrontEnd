
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';

function StoreDetails({ stores }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Best Samsung Galaxy S24 Ultra Prices</h2>
            {['Daraz', 'Ebay', 'Kapruka'].map((storeName, storeIndex) => (
                <div className="mb-8" key={storeIndex}>
                    <h3 className={`text-xl font-bold mb-4 ${storeName === 'Daraz' ? 'text-orange-400' : storeName === 'Ebay' ? 'text-blue-400' : 'text-green-400'}`}>{storeName}</h3>
                    <div className="space-y-4">
                        {stores.map((store, index) => (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 rounded-lg shadow ${store.recommended ? 'border-2 border-green-500' : 'border'}`}
                            >
                                <div className="flex items-start lg:items-center space-x-4 w-full lg:w-auto mb-4 lg:mb-0">
                                    <img src="https://antdisplay.com/pub/media/magefan_blog/sj05.jpg" alt={store.name} className="w-20 h-20 rounded-lg" />
                                    <div className="flex flex-col lg:flex-row justify-between w-full lg:w-auto">
                                        <div className="lg:mr-24">
                                            {store.recommended && <span className="text-green-500 font-bold">Recommend*</span>}
                                            <p className="text-xl font-bold">{store.price}</p>
                                        </div>
                                        <div className="lg:text-end lg:ml-28">
                                            <p className="text-gray-600">{`Samsung Galaxy S24 Ultra (${store.color})`}</p>
                                            <p className="text-red-500">{store.warranty} . Call {store.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="btn btn-neutral" style={{ backgroundColor: '#d9d9d9', color: 'black', border: 'none' }}>
                                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" style={{ color: 'black' }} /> Add to Cart
                                    </button>
                                    <button className="btn btn-secondary" style={{ backgroundColor: '#008000', border: 'none' }}>
                                        <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Buy Item
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StoreDetails;
