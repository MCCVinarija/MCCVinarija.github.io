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
    
    <div className='vine-home-carousel'> 
    <Carousel responsive={responsive} 
    infinite={true}
    autoPlay={false}
    autoPlaySpeed={5000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
      <Link to="/vines#caberne" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="img/velika vina/cabernet.png" alt="Cabernet Franc-Cabernet Sauvignon" />
          </div>
          <div className="wine-card-content">
            <h3>Cabernet Franc-Cabernet Sauvignon</h3>
            <p>Suvo crveno vino, kupaža dva vina sa izraženim voćnim stilom.</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#coupage" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/coupage.png" alt="Coupage" />
          </div>
          <div className="wine-card-content">
            <h3>Coupage</h3>
            <p>Suvo crveno vino sa notama vanile, duvana, slatkog drveta i mineralnosti.</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#pinot" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/pinot.png" alt="Pinot Noir" />
          </div>
          <div className="wine-card-content">
            <h3>Pinot Noir</h3>
            <p>Suvo crveno vino sa notama crvenog voća, cimeta, peperminta i zelenog čaja.</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#rizling" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/rajski.png" alt="Rajnski Riesling" />
          </div>
          <div className="wine-card-content">
            <h3>Rajnski Riesling</h3>
            <p>Suvo belo vino sa aromama jabuke, breskve, ruže i ljubičice u pozadini.</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#blanc" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/sauvignon.png" alt="Sauvignon Blanc" />
          </div>
          <div className="wine-card-content">
            <h3>Sauvignon Blanc</h3>
            <p>Suvo belo vino, sveže sa voćnim notama i laganom herbalnom završnicom.</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#rose" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/tajna.png" alt="Rose Tajna" />
          </div>
          <div className="wine-card-content">
            <h3>Rose Tajna</h3>
            <p>Suvo roze vino sa laganom strukturom i dugom završnicom.</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#traminac" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/traminac.png" alt="Traminac" />
          </div>
          <div className="wine-card-content">
            <h3>Traminac</h3>
            <p>Suvo belo vino sa izraženom aromom tropskog voća (breskve i začina).</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#malbec" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/merlot.png" alt="Merlot Malbec" />
          </div>
          <div className="wine-card-content">
            <h3>Merlot Malbec</h3>
            <p>Suvo crveno vino sa izraženim voćnim stilom i notama cvetnih i začinskih aroma.</p>
          </div>
        </div>
      </Link>

        </Carousel>
    </div>
    
   );
}


export default VineHome;
