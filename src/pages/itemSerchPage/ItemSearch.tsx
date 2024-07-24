import ItemDetails from "../../components/ItemDetails.tsx";
import StoreDetails from "../../components/StoreDetails.tsx";
import Nav from "../../components/nav/Nav.tsx";

function ItemSearch() {

    const stores = [
        {
            name: 'Store Name 01',
            price: '300 000 LKR',
            color: 'Blue',
            recommended: true,
            warranty: '1 Year Company Warranty',
            phone: '071 025 4444',
            image: 'https://via.placeholder.com/100',
        },
        {
            name: 'Store Name 02',
            price: '320 000 LKR',
            color: 'Black',
            recommended: false,
            warranty: '1 Year Company Warranty',
            phone: '071 025 4444',
            image: 'https://via.placeholder.com/100',
        },
        {
            name: 'Store Name 03',
            price: '450 000 LKR',
            color: 'Black',
            recommended: false,
            warranty: '1 Year Company Warranty',
            phone: '071 025 4444',
            image: 'https://via.placeholder.com/100',
        },
        {
            name: 'Store Name 04',
            price: '500 000 LKR',
            color: 'Blue',
            recommended: false,
            warranty: '1 Year Company Warranty',
            phone: '071 025 4444',
            image: 'https://via.placeholder.com/100',
        },
    ];

    return (
        <>
            <Nav/>
            <main className="container mx-auto px-4 py-20">
                {/* Search Bar */}
                <div className="my-6">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                {/* Item Details */}
                <ItemDetails />
                {/* Store Details */}
                <StoreDetails stores={stores} />
            </main>
        </>
    );
}

export default ItemSearch;
