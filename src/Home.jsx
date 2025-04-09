import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';

const Home = () => {
    return (
        <body>
  
       <Header/>
  {/*-------------------------------------------------------- start main banner block   ----------------------------------------------*/}
  <div className="main-banner">
    <div className="main-banner-container">
      <div className="main-banner-inner">
        <div className="all-content">
          <div className="img">
            <img src="./asets/main.jpg" alt />
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
  {/*-------------------------------------------------------- end main banner block   ----------------------------------------------*/}
  {/*-------------------------------------------------------- start category block  ------------------------------------------------*/}
  <div className="main-category">
    <div className="category-container">
      <div className="main-category-inner">
        <div className="title">
          <strong>shop by category</strong>
        </div>
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
  {/*----------------------------------------------------- end category block  --------------------------------------------------------*/}
  {/*------------------------------------------------------- start ad block --------------------------------------------------------*/}
  <div className="main-ad">
    <div className="container">
      <div className="main-ad-inner">
        <div className="item-one">
          <div className="item-one-inner">
            <div className="img">
              <img src="./asets/category-3.jpg" alt />
            </div>
            <div className="content">
              <strong> <span>30</span> % off</strong>
              <p>luxury with <br /> perfume </p>
              <a href="#">shop now</a>
            </div>
          </div>
        </div>
        <div className="item-two">
          <div className="item-one-inner">
            <div className="img">
              <img src="./asets/category-4.jpg" alt />
            </div>
            <div className="content">
              <strong> <span>40</span> % off</strong>
              <p>great deals &amp; <br /> discount </p>
              <a href="#">shop now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*---------------------------------------------------------- end ad block --------------------------------------------------------*/}
  {/*-------------------------------------------------------- start perfume collection block  --------------------------------------------------------*/}
  <div className="perfume-main">
    <div className="container">
      <div className="perfume-main-inner">
        <div className="perfume-collection-heading">
          <div className="perfume-collection-heading-inner">
            <p>Featured Collection</p>
          </div>
        </div>
        <div className="perfume-all-item-top">
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_1.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
                <div className="label2">on sale!</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_2.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_3.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
                <div className="label2">on sale!</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_4.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
              </div>
            </div>
          </div>
        </div>
        <div className="perfume-all-item-top">
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_1.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">Adipisci velit</a>
                <p>$289.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
                <div className="label2">on sale!</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_2.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">Numquam eius </a>
                <p>$279.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_3.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">Modi tempora</a>
                <p>$349.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/product_4.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">Dolore magnam</a>
                <p>$399.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
                <div className="label2">on sale!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------------------------------------- end perfume collection block  --------------------------------------------------------*/}
  {/*-------------------------------------------------------- start static block  --------------------------------------------------------*/}
  <div className="main-static-block">
    <div className="container">
      <div className="main-static-block-inner">
        <div className="all-banner-top">
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="./asets/1.jpg" alt />
              </div>
              <div className="content-img1">
                <strong>Popular perfume</strong>
                <p> Use the code <br /> "PERFUME04"</p>
                <a href="#">shop now</a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="./asets/2.jpg" alt />
              </div>
              <div className="content-img1">
                <strong> Women perfume</strong>
                <p>Discount perfume <br />Up to 80% off</p>
                <a href="#">shop now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-bottom">
          <div className="banner-bottom-inner">
            <div className="item-bottom">
              <div className="item-bottom-inner">
                <div className="img">
                  <img src="./asets/3.jpg" alt />
                </div>
                <div className="content-img2">
                  <p>Up to 75% off on fashion</p>
                  <strong>Looking fashion <span> Style in smell</span></strong>
                  <a href="#">shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------------------------------------- end static block  --------------------------------------------------------*/}
  {/*-------------------------------------------------------- start perfume collection block  --------------------------------------------------------*/}
  <div className="perfume-main">
    <div className="container">
      <div className="perfume-main-inner">
        <div className="perfume-collection-heading">
          <div className="perfume-collection-heading-inner">
            <p>New Products</p>
          </div>
        </div>
        <div className="perfume-all-item-top">
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/new_1.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
                <div className="label2">on sale!</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/new_2.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/new_1.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
                <div className="label2">on sale!</div>
              </div>
            </div>
          </div>
          <div className="perfume-item">
            <div className="perfume-item-inner">
              <div className="img">
                <img src="./asets/new_2.jpg" alt />
              </div>
              <div className="img-text">
                <a href="#">perspiciatis unde</a>
                <p>$99.00</p>
                <a id="img-btn" href="#">Add To Cart</a>
              </div>
              <div className="label">
                <div className="label1">new</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------------------------------------- end perfume collection block  --------------------------------------------------------*/}
  {/*-------------------------------------------------------- start brand block  --------------------------------------------------------*/}
  <div className="main-brand">
    <div className="container">
      <div className="main-brand-inner">
        <div className="title">
          <h4>Shop By Brand </h4>
        </div>
        <div className="all-brand">
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="assest/img/3.png" alt />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="assest/img/4.png" alt />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="assest/img/5.png" alt />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="assest/img/6.png" alt />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <div className="img">
                <img src="assest/img/7.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------------------------------------- end brand block  --------------------------------------------------------*/}
  {/*-------------------------------------------------------- start footer   --------------------------------------------------------*/}
  <div className="footer">
    <div className="footer-top-main">
      <div className="container">
        <div className="footer-top-main-inner">
          <div className="all-content">
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-img">
                  <img src="assest/img/online-support.png" alt />
                </div>
                <div className="service-text">
                  <strong>24/7 Online Support </strong>
                  <p>Trained staffs are ready to help 24/7</p>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-img">
                  <img src="assest/img/online-support.png" alt />
                </div>
                <div className="service-text">
                  <strong>Money Back Guarantee</strong>
                  <p>100% money back guarantee</p>
                </div>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-inner">
                <div className="service-img">
                  <img src="assest/img/online-support.png" alt />
                </div>
                <div className="service-text">
                  <strong>Free Shipping &amp; Return </strong>
                  <p>Free shipping on all orders over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-center">
      <div className="container">
        <div className="footer-center-inner">
          <div className="footer-center-item">
            <div className="footer-center-item-inner">
              <div className="footer-center-title">contact</div>
              <ul className="footer-content">
                <li>
                  <b>Address</b>
                  Etrend Perfume
                  95 Street, Arizona
                  85002
                  United States
                </li>
                <li>
                  <b>Mail us</b>
                  <a href="#">sales@domain.com</a>
                </li>
                <li>
                  <b> Phone</b>
                  <a href="#"> (123) 456 789</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-center-item">
            <div className="footer-center-item-inner">
              <div className="footer-center-title">Products</div>
              <ul className="footer-data">
                <li>
                  <a href="#">Delivery </a>
                </li>
                <li>
                  <a href="#">Legal Notice </a>
                </li>
                <li>
                  <a href="#">Terms and conditions of use </a>
                </li>
                <li>
                  <a href="#">Prices drop </a>
                </li>
                <li>
                  <a href="#">New products </a>
                </li>
                <li>
                  <a href="#">Best sales </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-center-item">
            <div className="footer-center-item-inner">
              <div className="footer-center-title">Our company</div>
              <ul className="footer-data">
                <li>
                  <a href="#">About us </a>
                </li>
                <li>
                  <a href="#"> Secure payment </a>
                </li>
                <li>
                  <a href="#">Contact us </a>
                </li>
                <li>
                  <a href="#">Sitemap </a>
                </li>
                <li>
                  <a href="#">Stores </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-center-item">
            <div className="footer-center-item-inner">
              <div className="footer-center-title">Subscribe</div>
              <ul className="footer-details">
                <li>
                  <p>
                    Enter your email &amp; hit send to subscribe &amp; get latest news &amp; updates
                  </p>
                </li>
                <li>
                  <input type="email" placeholder="enter your email address" />
                </li>
                <li>
                  <a href="#">send</a>
                </li>
                <li>
                  <p className="p">
                    You may unsubscribe at any moment. For that purpose, please find our contact
                    info in
                    the legal notice.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-end">
      <div className="container">
        <div className="footer-end-inner">
          <div className="footer-end-item-text">
            <div className="footer-end-item-text-inner">
              <a href="#">© 2025 - Ecommerce software by PrestaShop™ </a>
            </div>
          </div>
          <div className="footer-end-item-img">
            <div className="footer-end-item-img-inner">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-cc-visa" />
                  </a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-cc-paypal" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-cc-discover" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa-brands fa-cc-amex" /></a>
                </li>
                <li>
                  <a href="#"> <i className="fa-brands fa-cc-mastercard" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</body>

       
    );
};

export default Home;