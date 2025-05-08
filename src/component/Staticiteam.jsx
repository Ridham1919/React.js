import React from "react";

const Staticiteam = (props) => {

    return (
        
        <div className="item">
            <div className="item-inner">
                <div className="img">
                    <img src={props.img} alt />
                </div>
                <div className="content-img1">
                    <strong>{props.title}</strong>
                    <p> {props.line} <br />{props.line2}</p>
                    <a href="#">shop now</a>
                </div>
            </div>
        </div>
    )
}

export default Staticiteam
