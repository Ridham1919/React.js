import React from "react";
import Categoryiteam from "./Categoryiteam";

const Category = () => {
    return (
        <div className="main-category">
            <div className="category-container">
                <div className="main-category-inner">
                    <div className="all-category-item">
                        <Categoryiteam name="Electronics" img="asets/category-1.jpg" />
                        <Categoryiteam name="Home" img="asets/category-1.jpg" />
                        <Categoryiteam name="Shop" img="asets/category-2.jpg" />
                       
                    </div>
                </div>
            </div>
        </div>



    );

};

export default Category;