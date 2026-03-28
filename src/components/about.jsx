import React from "react";
import "../css/about.css";

export const AboutCmp = (props) => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* O nama */}
          <div className="about-card" id="Vinarija">
            <img
              className="about-card-image"
              src="img/Galerija/a"
              alt="O nama"
            />
            <div className="about-card-content">
              <h2 className="about-card-title">O nama</h2>
              <p className="about-card-text">
                McC McCulloch Vina su inovativni spoj partnerstva izmedju dvoje
                supružnika, engleza Don McCulloch-a i Seke Nikolić, srpskog
                porekla. Don, svojim francuskim i škotskim nasledjem i svojim
                širokim znanjem stečenim radom sa uzgajivačima vina širom sveta,
                osmislio je ovu jedinstvenu proizvodnju vina.
              </p>
            </div>
          </div>

          {/* O vinariji */}
          <div className="about-card" id="Organski">
            <video
              className="about-card-video"
              controls
            >
              <source src="img/Galerija/Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="about-card-content">
              <h2 className="about-card-title">O vinariji</h2>
              <p className="about-card-text">
                Vinarija McC ima površinu 221,17m2 . Godišnje proizvede prosečno
                15.000 boca. Crvena vina se čuvaju 12 meseci u srpskom hrastovom
                buretu a u bocama leže još minimum 10 meseci. Bela vina takođe
                leže minimum 10 meseci u bocama pre puštanja na tržište.
                2020.godine izgradili smo I skladište uz vinariju u kojem čuvamo
                zalihe vina.
              </p>
            </div>
          </div>

          {/* O kompaniji */}
          <div className="about-card" id="Turizam">
            <img
              className="about-card-image"
              src="img/Galerija/31.jpg"
              alt="O kompaniji"
            />
            <div className="about-card-content">
              <h2 className="about-card-title">O kompaniji</h2>
              <p className="about-card-text">
                McC McCulloch Vina su inovativni spoj partnerstva izmedju dvoje
                supružnika, engleza Don McCulloch-a i Seke Nikolić, srpskog
                porekla. Don, svojim francuskim i škotskim nasledjem i svojim
                širokim znanjem stečenim radom sa uzgajivačima vina širom sveta,
                osmislio je ovu jedinstvenu proizvodnju vina.
              </p>
            </div>
          </div>

          {/* Organski i biodinamički */}
          <div className="about-card">
            <img
              className="about-card-image"
              src="img/Galerija/organic.jpg"
              alt="Organski i biodinamički"
            />
            <div className="about-card-content">
              <h2 className="about-card-title">Organski i biodinamički</h2>
              <p className="about-card-text">
                Od 2011.godine koristimo organski i biodinamički pristup
                tretiranja zemljišta i vinograda, ali tek nakon izgrađene
                vinarije podneli smo zahtev i dobili ORGANSKI I BIODINAMICKI
                SERTIFIKAT REPUBLIKE SRBIJE za organsku proizvodnju i
                preradu,kao i za izvoz, u novembru 2020.godine od strane
                akreditovanog sertifikacionog tela "EKOCERT BALKAN"doo iz
                Zemuna,ovlašćenog od strane Ministarstva poljoprivrede,šumarstva
                i vodoprivrede.
              </p>
            </div>
          </div>

          {/* Degustacija i posete */}
          <div className="about-card" id="Posete">
            <img
              className="about-card-image"
              src="img/Galerija/46.jpg"
              alt="Degustacija i posete"
            />
            <div className="about-card-content">
              <h2 className="about-card-title">Degustacija i posete</h2>
              <p className="about-card-text">
                Posetite našu vinariju sa grupom od dve do 10 osoba i otkrijte
                čaroliju vina. Vaša poseta počinje u našim vinogradima, gde ćete
                saznati više o sortama koje uzgajamo i načinu na koji negujemo
                naše vinograde. Nakon toga, čeka vas ukusna meza koja će
                upotpuniti vaše vinsko iskustvo dok uživate u prelepom pogledu
                na vinograde i Frušku Goru koja se uzdiže u daljini.
                Naši stručnjaci će vas provesti kroz svako vino, objasniti
                njegove karakteristike i pomoći vam da pronađete svoje favorite.
                Degustacija traje maksimalno 2 sata. Da bismo osigurali vaše
                neometano uživanje, molimo vas da posetu najavite dan ranije, a
                za vikend posete preporučujemo da to učinite dva dana unapred.
                Za vise informacija i rezervaciju pozovite nas na telefon:
                +381 63 653 202 ili na <a href="https://liderlimo.rs/usluge/vinski-turizam/">linku</a>
              </p>
            </div>
          </div>

          {/* Prva berba */}
          <div className="about-card">
            <img
              className="about-card-image"
              src="img/Galerija/Berba1.jpg"
              alt="Prva berba"
            />
            <div className="about-card-content">
              <h2 className="about-card-title">Prva berba</h2>
              <p className="about-card-text">
                Naš prvi proizvod "KUPAŽA 2011" Napravljeno mešanjem dvostrukog
                zajedničkog vrenja sorti Merlot i Malbec, kao i sorti Cabernet
                Franc i Cabernet Sauvignon. Odežalo 12 meseci u barik buradima
                od srpskog hrasta i potom flaširano da odstoji još 14 meseci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCmp;