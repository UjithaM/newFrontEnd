

function ItemDetails() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3 flex justify-center items-center">
                    <img
                        src="https://idealz.lk/wp-content/uploads/2024/02/S24-Ultra-Yellow.jpg"
                        alt="Samsung Galaxy S24 Ultra"
                        className="w-48 h-auto rounded-lg"
                    />
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <h2 className="text-2xl font-bold">Samsung galaxy s24 ultra</h2>
                        <p className="text-gray-600 mt-2">Price Range</p>
                        <p className="text-xl text-red-500">300 000 LKR - 500 000 LKR</p>
                        <p className="text-green-500 mt-2">Best Price: 300 000 LKR</p>
                        <p className="text-blue-500">[ Store Name ]</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                            See Specifications
                        </button>
                    </div>
                </div>
                <div className="md:w-1/3 md:ml-6 mt-6 md:mt-0">
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold mb-2">Related Items</h3>
                        <ul className="pl-4">
                            <li><a href="#" className="text-blue-500">Samsung galaxy s24</a></li>
                            <li><a href="#" className="text-blue-500">Samsung galaxy s23</a></li>
                            <li><a href="#" className="text-blue-500">Samsung galaxy s23 ultra</a></li>
                            <li><a href="#" className="text-blue-500">Samsung galaxy s22</a></li>
                            <li><a href="#" className="text-blue-500">Samsung galaxy s22 ultra</a></li>
                            <li><a href="#" className="text-blue-500">Samsung galaxy s21</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;
