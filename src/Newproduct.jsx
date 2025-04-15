import React from "react";
import Newproductiteam from "./Newproductiteam";

const Newproduct = () => {

    return (
        <div className="perfume-main">
            <div className="container">
                <div className="perfume-main-inner">
                    <div className="perfume-all-item-top">
                        <Newproductiteam img="asets/new_1.jpg" link="perspiciatis unde" new="NEW" sale="ON SALE!!!"/>
                        <Newproductiteam img="asets/new_2.jpg" link="perspiciatis unde" new="NEW" sale="ON SALE!!!"/>
                        <Newproductiteam img="asets/new_1.jpg" link="perspiciatis unde" new="NEW" sale="ON SALE!!!"/>
                        <Newproductiteam img="asets/new_2.jpg" link="perspiciatis unde" new="NEW" sale="ON SALE!!!"/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Newproduct