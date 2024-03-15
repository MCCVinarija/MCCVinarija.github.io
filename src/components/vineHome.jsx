import React from 'react';
import '../css/vineHome.css'
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const VineHome = (props) => {
  return (
    
    <div className='centar'> 
    <Carousel responsive={responsive} 
    infinite={true}
    >
  <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3" >
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                        <a href="#vines#caberne" className="page-scroll">
                            <img src="img\velika vina\cabernet.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Cabernet Franc-Cabernet Sauvignon</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo crveno vino, Kupaža dva vina sa izraženim voćnim stilom.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>

        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#coupage" className="page-scroll">
                        <img src="/img/velika vina/coupage.png" alt="Product" class="img-responsive" />
                    </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Coupage</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo crveno vino sa notama vanile, duvana, slatkog drveta i mineralnost.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>
        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#pinot" className="page-scroll">
                        <img src="/img/velika vina/pinot.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Pinot Noir</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo crveno vino sa notama crvenog voća, cimeta, peperminta i zelenog čaja.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>
        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#rizling" className="page-scroll">
                        <img src="/img/velika vina/rajski.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Rajnski Riesling</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo belo vino sa aromama na jabuku, breskvu, ružu, u pozadini note ljubičice.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>
        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#blanc" className="page-scroll">
                  
                        <img src="/img/velika vina/sauvignon.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Sauvignon Blanc</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo belo vino, sveže sa voćnim notama i laganom herbalnom završnicom na ukusu.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>

        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#rose" className="page-scroll">
                   
                        <img src="/img/velika vina/tajna.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Rose Tajna</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo roze vino, na ukusu lagana struktura sa dužom završnicom.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>

        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#traminac" className="page-scroll">
                   
                        <img src="/img/velika vina/traminac.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Traminac</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo belo vino sa izraženom aromom na tropsko voće (breskvu i na začine).</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>
       
        <div class="shell">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="wsk-cp-product">
                    <div class="wsk-cp-img">
                    <a href="#vines#merlot" className="page-scroll">
                    
                        <img src="/img/velika vina/merlot.png" alt="Product" class="img-responsive" />
                        </a>
                    </div>
                    <div class="wsk-cp-text">
                        <div class="category">
                        </div>
                        <div class="title-product">
                        <h3>Merlot Malbec</h3>
                        </div>
                        <div class="description-prod">
                        <p>Suvo crveno vino sa izraženim voćnim stilom, notama cvetnih i začinskih aroma. </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>           
            </div>
        </div>

        </Carousel>
    </div>
    
   );
}


export default VineHome;
