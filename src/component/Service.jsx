import React from "react";
import Serviceiteam from "./Serviceiteam";
const Service = () => {

    return (

        <div className="footer">
            <div className="footer-top-main">
                <div className="container">
                    <div className="footer-top-main-inner">
                        <div className="all-content">
                           <Serviceiteam img="asets/online-support.png" strong="24/7 Online Support" p="Trained staffs are ready to help 24/7"/>
                           <Serviceiteam img="asets/online-support.png" strong="Money Back Guarantee" p="100% money back guarantee"/>
                           <Serviceiteam img="asets/online-support.png" strong="Free Shipping & Return" p="Free shipping on all orders over $100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service