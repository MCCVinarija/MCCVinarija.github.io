import React from "react";
import { Navigation } from "../components/navigation";
import {Shop} from "../components/shop";
import { Header2 } from "../components/header";


const Shops = () => {
    return ( 
        <div>
        <Navigation/>
        <Header2/>
        <Shop/>
       </div>
    );
  };
  
 export default Shops;