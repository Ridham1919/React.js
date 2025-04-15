import React from "react";
import Collectioncategory from "./Collectioncategory";

const Collection = () => {

    return (
        <div className="perfume-main">
            <div className="container">
                <div className="perfume-main-inner">
                    <div className="perfume-all-item-top">
                        <Collectioncategory img="asets/product_3.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                        <Collectioncategory img="asets/product_1.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                        <Collectioncategory img="asets/product_4.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                        <Collectioncategory img="asets/product_2.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                    </div>
                    <div className="perfume-all-item-top">
                        <Collectioncategory img="asets/product_1.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                        <Collectioncategory img="asets/product_2.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                        <Collectioncategory img="asets/product_3.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                        <Collectioncategory img="asets/product_4.jpg" link="perspiciatis unde" price="$99.25" new="New" sale="ON SALE!!!"/>
                    </div>
                </div>
            </div>
        </div>
        

    )

}
export default Collection