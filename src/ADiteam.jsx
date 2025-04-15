import React from "react";

const ADiteam = (props) => {

    return (
        <div className="item-one-inner">
            <div className="img">
                <img src={props.img} alt />
            </div>
            <div className="content">
                <strong> <span>{props.num}</span>{props.off}</strong>
                <p>{props.title}<br /> {props.name} </p>
                <a href="#">shop now</a>
            </div>
        </div>

    )
}

export default ADiteam



