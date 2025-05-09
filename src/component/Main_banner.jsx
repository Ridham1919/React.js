import React from "react";

const Main_banner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="main-banner-container">
          <div className="main-banner-inner">
            <div className="all-content">
              <div className="img">
                <img src="asets/main.jpg" alt />
              </div>
              <div className="img-content">
                <span>Take a perfume</span>
                <strong>get <span>25</span>% discount</strong>
                <p>perfume starting from $9.99</p>
                <a href="#">shop today</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_banner;