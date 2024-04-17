import React, { useEffect } from "react";

export const AboutCmp = (props) => {
  useEffect(() => {
    // Scroll to the specified anchor when the page mounts
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div id="about">
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <img
              class="w-100 shadow"
              style={{ borderRadius: 10 }}
              src="img\Galerija\a"
            />
          </div>
          <div class="col-lg-6">
            <div class="p-5 mt-4">
              <h1 class="display-4" id="Vinarija" style={{ fontWeight: 500 }}>
                O nama
              </h1>
              <p class="lead" style={{ fontSize: 20, textAlign: "justify" }}>
                McC McCulloch Vina su inovativni spoj partnerstva izmedju dvoje
                supružnika, engleza Don McCulloch-a i Seke Nikolić, srpskog
                porekla. Don, svojim francuskim i škotskim nasledjem i svojim
                širokim znanjem stečenim radom sa uzgajivačima vina širom sveta,
                osmislio je ovu jedinstvenu proizvodnju vina.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div
              class="p-5 mt-4"
              style={{ textAlign: "right", marginRight: 40 }}
            >
              <h1 class="display-4">O vinariji</h1>
              <p class="lead" style={{ fontSize: 20, textAlign: "justify" }}>
                Vinarija McC ima površinu 221,17m2 . Godišnje proizvede prosečno
                15.000 boca. Crvena vina se čuvaju 12 meseci u srpskom hrastovom
                buretu a u bocama leže još minimum 10 meseci. Bela vina takođe
                leže minimum 10 meseci u bocama pre puštanja na tržište.
                2020.godine izgradili smo I skladište uz vinariju u kojem čuvamo
                zalihe vina.{" "}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <video
              className="w-100 shadow"
              style={{ width: "100%", borderRadius: 10 }}
              controls
            >
              <source src="img\Galerija\Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <img
              class="w-100 shadow"
              style={{ borderRadius: 10 }}
              src="img\Galerija\31.jpg"
            />
          </div>
          <div class="col-lg-6">
            <div class="p-5 mt-4">
              <h1 class="display-4" id="Organski">
                O kompaniji
              </h1>
              <p class="lead" style={{ fontSize: 20, textAlign: "justify" }}>
                McC McCulloch Vina su inovativni spoj partnerstva izmedju dvoje
                supružnika, engleza Don McCulloch-a i Seke Nikolić, srpskog
                porekla. Don, svojim francuskim i škotskim nasledjem i svojim
                širokim znanjem stečenim radom sa uzgajivačima vina širom sveta,
                osmislio je ovu jedinstvenu proizvodnju vina.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div
              class="p-5 mt-4"
              style={{ textAlign: "right", marginRight: 40 }}
            >
              <h1 class="display-4" id="Turizam">
                Organski i biodinamički
              </h1>
              <p class="lead" style={{ fontSize: 20, textAlign: "justify" }}>
                Od 2011.godine koristimo organski i biodinamički pristup
                tretiranja zemljišta i vinograda, ali tek nakon izgrađene
                vinarije podneli smo zahtev i dobili ORGANSKI I BIODINAMICKI
                SERTIFIKAT REPUBLIKE SRBIJE za organsku proizvodnju i
                preradu,kao i za izvoz, u novembru 2020.godine od strane
                akreditovanog sertifikacionog tela "EKOCERT BALKAN"doo iz
                Zemuna,ovlašćenog od strane Ministarstva poljoprivrede,šumarstva
                i vodoprivrede.{" "}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              class="w-100 shadow"
              style={{ borderRadius: 10 }}
              src="img\Galerija\organic.jpg"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <img
              class="w-100 shadow"
              style={{ borderRadius: 10 }}
              src="img\Galerija\46.jpg"
            />
          </div>
          <div class="col-lg-6">
            <div class="p-5 mt-4">
              <h1 class="display-4">Degustacija i posete</h1>
              <p class="lead" style={{ fontSize: 20, textAlign: "justify" }}>
                Posetite našu vinariju sa grupom od dve do 10 osoba i otkrijte
                čaroliju vina.<br/>Vaša poseta počinje u našim vinogradima, gde ćete
                saznati više o sortama koje uzgajamo i načinu na koji negujemo
                naše vinograde. <br/>Nakon toga, čeka vas ukusna meza koja će
                upotpuniti vaše vinsko iskustvo dok uživate u prelepom pogledu
                na vinograde i Frušku Goru koja se uzdiže u daljini.
                Naši stručnjaci će vas provesti kroz svako vino, objasniti
                njegove karakteristike i pomoći vam da pronađete svoje favorite.<br/>
                Degustacija traje maksimalno 2 sata.<br/>
                Da bismo osigurali vaše
                neometano uživanje, molimo vas da posetu najavite dan ranije, a
                za vikend posete preporučujemo da to učinite dva dana unapred.<br/>
                Za vise informacija i rezervaciju pozovite nas na telefon:<br/> +381 63 653 202  ili na 
                <a href="https://liderlimo.rs/usluge/vinski-turizam/">linku</a>
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div
              class="p-5 mt-4"
              style={{ textAlign: "right", marginRight: 40 }}
            >
              <h1 class="display-4">Prva berba</h1>
              <p class="lead" style={{ fontSize: 20, textAlign: "justify" }}>
                Naš prvi proizvod “KUPAŽA 2011” Napravljeno mešanjem dvostrukog
                zajedničkog vrenja sorti Merlot i Malbec, kao i sorti Cabernet
                Franc i Cabernet Sauvignon. Odležalo 12 meseci u barik buradima
                od srpskog hrasta i potom flaširano da odstoji još 14 meseci.{" "}
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              class="w-100 shadow"
              style={{ borderRadius: 10, aspectRatio:"3:2"}}
              src="img\Galerija\Berba1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
