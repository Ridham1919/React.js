import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Main_banner from './Main_banner';
import First_title from './First_title';
import Category from './Category';


const Home = () => {
    return (
        <>
  
       <Header/>
  {/*-------------------------------------------------------- start main banner block   ----------------------------------------------*/}
      <Main_banner/>
  {/*-------------------------------------------------------- end main banner block   ----------------------------------------------*/}
       <First_title/>
  {/*-------------------------------------------------------- start category block  ------------------------------------------------*/}
         <div className="main-category">
            <div className="category-container">
                <div className="main-category-inner">
                    <div className="all-category-item">
                        <div className="category-item">
                           <Category/>
                        </div>
                    </div>
                </div>
             </div>
         </div>

       </>
    );
};

export default Home;