import React from "react";

const Collectioncategory = (props) => {

    return (
        <div className="perfume-item">
            <div className="perfume-item-inner">
                <div className="img">
                    <img src={props.img} alt="" />
                </div>
                <div className="img-text">
                    <a href="#">{props.link}</a>
                    <p>{props.price}</p>
                    <a id="img-btn" href="#">Add To Cart</a>
                </div>
                <div className="label">
                    <div className="label1">{props.new}</div>
                    <div className="label2">{props.sale}</div>
                </div>
            </div>
        </div>

    )
}

export default Collectioncategory