import React from "react";

const Serviceiteam = (props) => {

    return (

        <div className="service-item">
            <div className="service-item-inner">
                <div className="service-img">
                    <img src={props.img} alt />
                </div>
                <div className="service-text">
                    <strong>{props.strong} </strong>
                    <p>{props.p}</p>
                </div>
            </div>
        </div>

    )
}

export default Serviceiteam