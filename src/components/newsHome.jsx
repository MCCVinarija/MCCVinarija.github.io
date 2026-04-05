import React from "react";
import { Link } from "react-router-dom";
import "../css/newsHome.css";

export const NewsHome = (props) => {
  return (
    <div className="news-home-container">
      <div className="news-grid">
        <Link to="/about#Vinarija" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="news-card">
            <div className="news-card-content">
              <h2 className="news-card-title">Vinarija</h2>
              <p className="news-card-text">
                Naša vinarija je simbol posvećenosti kvalitetu i tradiciji. Ovde
                se spajaju tradicija i moderan pristup u nezaboravno iskustvo
                za sve ljubitelje dobrog vina. Dobrodošli u našu vinariju, gde
                svaka čaša postaje priča, a svaki trenutak nezaboravan doživljaj.
              </p>
            </div>
            <img
              className="news-card-image"
              src="img/Galerija/31.jpg"
              alt="Vinarija"
            />
          </div>
        </Link>

        <Link to="/about#Posete" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="news-card">
            <img
              className="news-card-image"
              src="img/Galerija/0.jpg"
              alt="Degustacija i posete"
            />
            <div className="news-card-content">
              <h2 className="news-card-title">Degustacija i posete</h2>
              <p className="news-card-text">
                U srcu naše vinarije, svaka čaša vina nosi dah posvećenosti,
                ljubavi i predanosti prema vinogradima koje smo pažljivo uzgajali.
                Kroz svaki gutljaj, gosti otkrivaju ne samo vrhunski ukus vina,
                već i priču o našem posvećenom radu i strasti. Dobrodošli u naš
                kutak vinarske umetnosti, gde svaki trenutak postaje nezaboravno
                iskustvo puno uživanja i prijateljstva.
                Rezervišite degustaciju organskog i biodinamičkog vina sa prevozom luksuznim vozilom na <a href="https://liderlimo.rs/usluge/vinski-turizam/">linku</a>
              </p>
            </div>
          </div>
        </Link>

        <Link to="/about#Organski" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="news-card">
            <div className="news-card-content">
              <h2 className="news-card-title">Organski i biodinamicki sertifikat</h2>
              <p className="news-card-text">
                U svetu organske proizvodnje vina, svaka loza postaje priča, svaki
                grozd nosi sa sobom notu brižne pažnje prema prirodi. U svakoj
                čaši se ocrtava harmonija između zemlje, sunca i veštine vinara,
                stvarajući čarobnu simfoniju ukusa koja oduševljava sva čula.
              </p>
            </div>
            <img
              className="news-card-image"
              src="img/intro-bg1.jpg"
              alt="Organski i biodinamicki sertifikat"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsHome;
