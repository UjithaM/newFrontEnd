
function StoreCard({ item }) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure>
                <img src={item.imgUrl} alt={item.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.title}
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                    {item.badges.map((badge, index) => (
                        <div key={index} className={`badge ${badge.type}`}>
                            {badge.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StoreCard;
