import React from "react";

const Category = () => {
    return (
        <div className="main-category">
            <div className="category-container">
                <div className="main-category-inner">
                    <div className="all-category-item">
                        <div className="category-item">
                            <div className="category-item-inner">
                                <div className="img">
                                    <img src="./asets/category-1.jpg" alt />
                                </div>
                                <div className="text">
                                    <span>Electronics</span>
                                </div>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="category-item-inner">
                                <div className="img">
                                    <img src="./asets/category-1.jpg" alt />
                                </div>
                                <div className="text">
                                    <span>home</span>
                                </div>
                            </div>
                        </div>
                        <div className="category-item">
                            <div className="category-item-inner">
                                <div className="img">
                                    <img src="./asets/category-2.jpg" alt />
                                </div>
                                <div className="text">
                                    <span>shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

};

export default Category;