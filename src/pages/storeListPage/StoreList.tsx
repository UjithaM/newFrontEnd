import StoreCard from "../../components/StoreCard.tsx";

function StoreList() {
    const sampleDataList = [
        {
            id: 1,
            title: "Life Mobile Lanka (Pvt) Ltd",
            imgUrl: "https://lifemobile.lk/wp-content/uploads/2019/05/lifemobile-home.jpg",
            description: "Sri Lanka's Premiere Online Electronic Store for Latest Options with Easy Payment Plans.",
            badges: [
                { text: "NEW", type: "badge-secondary" },
                { text: "Phones", type: "badge-primary badge-outline" },
                { text: "Laptops", type: "badge-secondary badge-outline" },
                { text: "Tablets", type: "badge-accent badge-outline" },
                { text: "Watches", type: "badge-outline" },
            ]
        },
        {
            id: 2,
            title: "Mass Phone Gallery",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYqhqaRjr0Twybm3S7VNJSJiYK1a4D6GQHQ&s",
            description: "Leading store for the latest tech gadgets and accessories.",
            badges: [
                { text: "SALE", type: "badge-danger" },
                { text: "Gadgets", type: "badge-primary badge-outline" },
                { text: "Accessories", type: "badge-secondary badge-outline" },
            ]
        },
        {
            id: 3,
            title: "Apple Mall",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGmcz6Dy9thjcP8bORyJzM42J7KSf-Yhc0Q&s",
            description: "Your one-stop shop for all the latest electronics and gadgets.",
            badges: [
                { text: "HOT", type: "badge-warning" },
                { text: "Electronics", type: "badge-primary badge-outline" },
                { text: "Wearables", type: "badge-secondary badge-outline" },
                { text: "Cameras", type: "badge-accent badge-outline" },
            ]
        },
        {
            id: 4,
            title: "Life Mobile Lanka (Pvt) Ltd",
            imgUrl: "https://lifemobile.lk/wp-content/uploads/2019/05/lifemobile-home.jpg",
            description: "Sri Lanka's Premiere Online Electronic Store for Latest Options with Easy Payment Plans.",
            badges: [
                { text: "NEW", type: "badge-secondary" },
                { text: "Phones", type: "badge-primary badge-outline" },
                { text: "Laptops", type: "badge-secondary badge-outline" },
                { text: "Tablets", type: "badge-accent badge-outline" },
                { text: "Watches", type: "badge-outline" },
            ]
        },
        {
            id: 5,
            title: "Mass Phone Gallery",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYqhqaRjr0Twybm3S7VNJSJiYK1a4D6GQHQ&s",
            description: "Leading store for the latest tech gadgets and accessories.",
            badges: [
                { text: "SALE", type: "badge-danger" },
                { text: "Gadgets", type: "badge-primary badge-outline" },
                { text: "Accessories", type: "badge-secondary badge-outline" },
            ]
        },
        {
            id: 6,
            title: "Apple Mall",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGmcz6Dy9thjcP8bORyJzM42J7KSf-Yhc0Q&s",
            description: "Your one-stop shop for all the latest electronics and gadgets.",
            badges: [
                { text: "HOT", type: "badge-warning" },
                { text: "Electronics", type: "badge-primary badge-outline" },
                { text: "Wearables", type: "badge-secondary badge-outline" },
                { text: "Cameras", type: "badge-accent badge-outline" },
            ]
        }
    ];

    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mt-16">Store List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {sampleDataList.map(item => (
                        <StoreCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default StoreList;
