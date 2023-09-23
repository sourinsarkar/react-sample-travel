function Locations(props) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={"https://source.unsplash.com/1600x1000/?" + props.image} className="card-img" alt="" />
                <div className={props.rating > 4.5 ? "top" : "d-none"}>Top Rated</div>
            </div>
            <div className="place-card-content">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Locations;