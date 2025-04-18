import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-main">
    <div className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <div className="all-hearder-item">
            <div className="img">
              <img src="asets/logo.1.jpg" alt style={{width: 100, height: 'auto'}} />
            </div>
            <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>         
              <li>
              <Link to="/shop">Shop<i style={{color: '#333', marginTop: 12, marginLeft:5 }} className="fa-solid fa-angle-down fa-xs" /></Link>
                <ul className="mega-menu">
                  <li>
                    <h4>fashion</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">men</a>
                      </li>
                      <li>
                        <a href="#">woman</a>
                      </li>
                      <li>
                        <a href="#">kids</a>
                      </li>
                      <li>
                        <a href="#">accessorices</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>jawellery</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">ring</a>
                      </li>
                      <li>
                        <a href="#">bracelets</a>
                      </li>
                      <li>
                        <a href="#">necklaces</a>
                      </li>
                      <li>
                        <a href="#">wedding bands</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>farniture</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">living room</a>
                      </li>
                      <li>
                        <a href="#">kitchan</a>
                      </li>
                      <li>
                        <a href="#">office</a>
                      </li>
                      <li>
                        <a href="#">home decor</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>autoparts</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">enging parts</a>
                      </li>
                      <li>
                        <a href="#">exhaust parts</a>
                      </li>
                      <li>
                        <a href="#">brake parts</a>
                      </li>
                      <li>
                        <a href="#">body parts</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">electronics <i style={{color: '#333', marginTop: 12}} className="fa-solid fa-angle-down fa-xs" /></a>
                <ul className="mega-menu-two">
                  <li>
                    <h4>mobiles</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">apple</a>
                      </li>
                      <li>
                        <a href="#">blackbary</a>
                      </li>
                      <li>
                        <a href="#">oneplus</a>
                      </li>
                      <li>
                        <a href="#">sony</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>cameras</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">DSLR</a>
                      </li>
                      <li>
                        <a href="#">lences</a>
                      </li>
                      <li>
                        <a href="#">tripods</a>
                      </li>
                      <li>
                        <a href="#">batteries</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">sports &amp; books <i style={{color: '#333', marginTop: 12}} className="fa-solid fa-angle-down fa-xs" /></a>
                <ul className="mega-menu-two">
                  <li>
                    <h4>sports</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">vollyball</a>
                      </li>
                      <li>
                        <a href="#">football</a>
                      </li>
                      <li>
                        <a href="#">cricket</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>books</h4>
                    <ul className="mega-item">
                      <li>
                        <a href="#">literature</a>
                      </li>
                      <li>
                        <a href="#">philosophy</a>
                      </li>
                      <li>
                        <a href="#">acadamics</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">sale</a>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="icon">
              <div className="id">
                <i className="fa-solid fa-user" />
              </div>
              <div className="serch">
                <i className="fa-solid fa-magnifying-glass fa-xs" />
              </div>
              <div className="bag">
                <i className="fa-solid fa-bag-shopping" />
                <ul>
                  <li>
                    <p>There are no more items in your cart</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
       
    );
};

export default Header;