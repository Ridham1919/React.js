import React from "react";

const Shop = () => {

    return (
        <div className="container">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <a href="#">Home</a>
                <span>/</span>
                <a href="#">Shop</a>
            </div>
            {/* Main Layout */}
            <div className="main-content">
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Shop Categories */}
                    <div className="shop-box">
                        <div className="shop-title">SHOP</div>
                        <div className="category">
                            <a href="#">Fashion</a>
                            <span className="category-expand">+</span>
                        </div>
                        <div className="category">
                            <a href="#">Jewellery</a>
                            <span className="category-expand">+</span>
                        </div>
                        <div className="category">
                            <a href="#">Furniture</a>
                            <span className="category-expand">+</span>
                        </div>
                        <div className="category">
                            <a href="#">Autoparts</a>
                            <span className="category-expand">+</span>
                        </div>
                    </div>
                    {/* Filter Options */}
                    <div className="filter-box">
                        <div className="filter-title">FILTER BY</div>
                        <div className="filter-item">
                            <span>Brand</span>
                            <span className="chevron">›</span>
                        </div>
                        <div className="filter-item">
                            <span>Price</span>
                            <span className="chevron">›</span>
                        </div>
                    </div>
                    {/* Special Collection */}
                    <div className="special-collection">
                        <div className="special-collection-title">SPECIAL COLLECTION</div>
                        <div className="collection-underline" />
                        <img src="https://i.ibb.co/fXLWQZZ/perfume-collection.jpg" alt="Special Collection" className="collection-image" />
                    </div>
                </div>
                {/* Main Content Area */}
                <div className="content">
                    {/* Banner */}
                    <div className="banner">
                        <img src="https://i.ibb.co/3S6XXBM/perfume-banner.jpg" alt="Perfume Banner" className="banner-img" />
                    </div>
                    {/* Shop Heading */}
                    <h1 className="shop-heading">Shop</h1>
                    <p className="shop-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    {/* Products Header */}
                    <div className="products-header">
                        <div className="view-options">
                            <div className="view-btn">
                                <span className="view-icon">☰</span>
                            </div>
                            <div className="view-btn">
                                <span className="view-icon">▤</span>
                            </div>
                        </div>
                        <div className="product-count">There are 16 products.</div>
                        <div className="sort-options">
                            <span className="sort-label">Sort by:</span>
                            <select className="sort-select">
                                <option>Relevance</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Name: A to Z</option>
                            </select>
                        </div>
                    </div>
                    {/* Products Grid */}
                    
                    <div className="products-grid">
                        {/* Product 1 */}
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_1.jpg" alt="Perfume 1" className="product-image" />
                            <h3 className="product-title">Perspiciatis Unde</h3>
                        </div>
                        {/* Product 2 */}
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <img src="./asets/new_2.jpg" alt="Perfume 2" className="product-image" />
                            <h3 className="product-title">Omnis Isle</h3>
                        </div>
                        {/* Product 3 */}
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_3.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_2.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_1.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_3.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_2.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_1.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_3.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                        <div className="product-card">
                            <div className="new-badge">NEW</div>
                            <div className="sale-badge">ON SALE!</div>
                            <img src="./asets/new_3.jpg" alt="Perfume 3" className="product-image" />
                            <h3 className="product-title">Accusantium Dolore</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Shop