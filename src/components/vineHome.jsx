import React, { useContext } from 'react';
import '../css/vineHome.css'
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { LanguageContext } from '../LanguageContext';

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

export const VineHome = () => {
  const { language = 'sr' } = useContext(LanguageContext) || {};

  const vineText = {
    sr: {
      cabernet: 'Suvo crveno vino, kupaža dva vina sa izraženim voćnim stilom.',
      coupage: 'Suvo crveno vino sa notama vanile, duvana, slatkog drveta i mineralnosti.',
      pinot: 'Suvo crveno vino sa notama crvenog voća, cimeta, peperminta i zelenog čaja.',
      riesling: 'Suvo belo vino sa aromama jabuke, breskve, ruže i ljubičice u pozadini.',
      sauvignon: 'Suvo belo vino, sveže sa voćnim notama i laganom herbalnom završnicom.',
      rose: 'Suvo roze vino sa laganom strukturom i dugom završnicom.',
      traminac: 'Suvo belo vino sa izraženom aromom tropskog voća (breskve i začina).',
      malbec: 'Suvo crveno vino sa izraženim voćnim stilom i notama cvetnih i začinskih aroma.',
    },
    en: {
      cabernet: 'Dry red wine, a blend of two grapes with a pronounced fruity style.',
      coupage: 'Dry red wine with notes of vanilla, tobacco, sweet wood and minerality.',
      pinot: 'Dry red wine with notes of red fruit, cinnamon, peppermint and green tea.',
      riesling: 'Dry white wine with aromas of apple, peach, rose and violet in the background.',
      sauvignon: 'Dry white wine, fresh with fruity notes and a light herbal finish.',
      rose: 'Dry rosé wine with a light structure and long finish.',
      traminac: 'Dry white wine with pronounced aromas of tropical fruit (peach and spice).',
      malbec: 'Dry red wine with a pronounced fruity style and notes of floral and spicy aromas.',
    },
  };

  const vineTitles = {
    sr: {
      cabernet: 'Cabernet Franc-Cabernet Sauvignon',
      coupage: 'Coupage',
      pinot: 'Pinot Noir',
      riesling: 'Rajnski Riesling',
      sauvignon: 'Sauvignon Blanc',
      rose: 'Rose Tajna',
      traminac: 'Traminac',
      malbec: 'Merlot Malbec',
    },
    en: {
      cabernet: 'Cabernet Franc-Cabernet Sauvignon',
      coupage: 'Coupage',
      pinot: 'Pinot Noir',
      riesling: 'Riesling',
      sauvignon: 'Sauvignon Blanc',
      rose: 'Rose Tajna',
      traminac: 'Traminac',
      malbec: 'Merlot Malbec',
    },
  };

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
            <h3>{vineTitles[language].cabernet}</h3>
            <p>{vineText[language].cabernet}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#coupage" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/coupage.png" alt="Coupage" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].coupage}</h3>
            <p>{vineText[language].coupage}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#pinot" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/pinot.png" alt="Pinot Noir" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].pinot}</h3>
            <p>{vineText[language].pinot}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#rizling" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/rajski.png" alt="Rajnski Riesling" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].riesling}</h3>
            <p>{vineText[language].riesling}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#blanc" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/sauvignon.png" alt="Sauvignon Blanc" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].sauvignon}</h3>
            <p>{vineText[language].sauvignon}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#rose" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/tajna.png" alt="Rose Tajna" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].rose}</h3>
            <p>{vineText[language].rose}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#traminac" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/traminac.png" alt="Traminac" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].traminac}</h3>
            <p>{vineText[language].traminac}</p>
          </div>
        </div>
      </Link>

      <Link to="/vines#malbec" className="wine-card-link">
        <div className="wine-card">
          <div className="wine-card-image">
            <img src="/img/velika vina/merlot.png" alt="Merlot Malbec" />
          </div>
          <div className="wine-card-content">
            <h3>{vineTitles[language].malbec}</h3>
            <p>{vineText[language].malbec}</p>
          </div>
        </div>
      </Link>

        </Carousel>
    </div>
    
   );
}


export default VineHome;
