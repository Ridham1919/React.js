import React from 'react';
import ReactDOM from 'react-dom/client';
import Main_banner from './Main_banner';
import First_title from './First_title';
import Category from './Category';
import AD from './AD';
import Secondtitle from './Secondtitle';
import Collection from './Collection';
import Staticblock from './Staticblock';
import Staticbottom from './Staticbottom';
import Therdtitle from './Therdtitle';
import Newproduct from './Newproduct';
import Fourtitle from './Fourtitle';
import Brand from './Brand';

const Body = () => {

    return (
        <>
            {/*-------------------------------------------------------- start main banner block   ----------------------------------------------*/}
            <Main_banner />
            {/*-------------------------------------------------------- end main banner block   ----------------------------------------------*/}
            <First_title />
            {/*-------------------------------------------------------- start category block  ------------------------------------------------*/}
            <Category />
            {/*------------------------------------------------------- end category block  ----------------------------------------------*/}
            <AD/>
            <Secondtitle/> 
            <Collection/>
            <Staticblock/>
            <Staticbottom/>
            <Therdtitle/>
            <Newproduct/>
            <Fourtitle/>
            <Brand/>

        </>

    )
}
export default Body