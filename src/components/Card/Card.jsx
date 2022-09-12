import React from "react";
function Card() {

    return <div>
        <div className="card" style={{width: "5rem;"}}>
            <img src="https://via.placeholder.com/50/92c952" className="card-img-top" alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">See details</a>
                </div>
        </div>
    </div>
}

export default Card;