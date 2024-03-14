import React from "react";
import { Link } from "react-router-dom";

export const NewsHome = (props) => {
  return (
    <div style={{marginBottom:70}}>
      <div class="row" >
        <div class="col-lg-4">
      
          <div class="p-5 mt-4">
          <Link to="/about#Vinarija" className="page-scroll">
            <h1
              class="display-4"
              style={{ fontWeight: 500, textAlign: "center" }}
            >
              Vinarija
            </h1>
            </Link>
            <p class="lead" style={{ fontSize: 18, textAlign: "justify",padding:30 }}>
              Naša vinarija je simbol posvećenosti kvalitetu i tradiciji. Ovdje
              se spoj tradicije i modernog pristupa stapa u nezaboravno iskustvo
              za sve ljubitelje dobrog vina. Dobrodošli u našu vinariju, gdje
              svaka čaša postaje priča, a svaki trenutak nezaboravan doživljaj.{" "}
            </p>
          </div>
          <Link to="/about#Vinarija" className="page-scroll">
          <img
            class="w-100 shadow"
            style={{ borderRadius: 10 }}
            src="img\Galerija\31.jpg"
          />
          </Link>
        </div>

        <div class="col-lg-4">
        <Link to="/about#Turizam" className="page-scroll">
          <img
            class="w-100 shadow"
            style={{ borderRadius: 10 }}
            src="img\Galerija\0.jpg"
          />
           </Link>
          <div class="p-5 mt-4">
          <Link to="/about#Turizam" className="page-scroll">
            <h1
              class="display-4"
              style={{ fontWeight: 500, textAlign: "center" }}
            >
              Degustacija i posete
           
            </h1>
            </Link>
            <p class="lead" style={{ fontSize: 18, textAlign: "justify",padding:30 }}>
              U srcu naše vinarije, svaka čaša vina nosi dah posvećenosti,
              ljubavi i predanosti prema vinogradima koje smo pažljivo uzgajali.
              Kroz svaki gutljaj, gosti otkrivaju ne samo vrhunski ukus vina,
              već i priču o našem posvećenom radu i strasti. Dobrodošli u naš
              kutak vinarske umetnosti, gde svaki trenutak postaje nezaboravno
              iskustvo puno uživanja i prijateljstva.
              Rezervisite degustacija organskog i biodinamičkog vina{" "}
            </p>
          </div>
        </div>
        <div class="col-lg-4  ">
          <div class="p-5 mt-4">
          <Link to="/about#Organski" className="page-scroll">
            <h1
              class="display-4"
              style={{ fontWeight: 500, textAlign: "center" }}
            >
              Organski i biodinamicki sertifikat
            </h1>
            </Link>
            <p class="lead" style={{ fontSize: 18, textAlign: "justify",padding:30 }}>
              U svetu organske proizvodnje vina, svaka loza postaje priča, svaki
              grozd nosi sa sobom notu brižne pažnje prema prirodi. U svakoj
              čaši se ocrtava harmonija između zemlje, sunca i veštine vinara,
              stvarajući čarobnu simfoniju ukusa koja oduševljava sva čula.{" "}
            </p>
          </div>
          <Link to="/about#Organski" className="page-scroll">
          <img
            class="w-100 shadow"
            style={{ borderRadius: 10, }}
            src="img\intro-bg1.jpg"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
