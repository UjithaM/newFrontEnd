import React, { useState } from 'react';
import StoreDetails from "../../components/StoreDetails.tsx";
import Footer from "../../components/footer/footer.tsx";
import Nav from "../../components/nav/Nav.tsx";
import { useParams } from "react-router-dom";

function ItemSearch() {
    const { category } = useParams();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <Nav />
            <main className="container mx-auto px-4 py-20">
                {/* Search Bar */}
                <div className="px-4">
                    <label className="input input-bordered flex items-center gap-2 w-50 border-gray-400">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <StoreDetails category={category || ''} searchQuery={searchQuery} />
            </main>
            <Footer />
        </>
    );
}

export default ItemSearch;