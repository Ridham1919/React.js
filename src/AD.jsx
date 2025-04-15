import React from "react";
import ADiteam from "./ADiteam";

const AD = () => {
    return (
        <div className="main-ad">
            <div className="container">
                <div className="main-ad-inner">
                    <div className="item-one">
                       <ADiteam img="asets/category-3.jpg" num="30" off="% off" title="luxury with" name="perfume"/>
                    </div>
                    <div className="item-two">
                    <ADiteam img="asets/category-4.jpg" num="40" off="% off" title="Great Deals" name="Discount"/>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AD


