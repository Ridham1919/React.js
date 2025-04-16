import React from "react";

const Categoryiteam = (props) => {
    return (
        <>
                        <div className="category-item">
                            <div className="category-item-inner">
                                <div className="img">
                                    <img src={props.img} alt="" />
                                </div>
                                <div className="text">
                                    <span>{props.name}</span>
                                </div>
                            </div>
                        </div>
        </>
        
    )

};

export default Categoryiteam;