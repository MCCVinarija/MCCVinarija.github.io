import React, { useContext } from "react";
import "../css/about.css";
import { LanguageContext } from "../LanguageContext";

export const AboutCmp = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};

  const aboutText = {
    sr: {
      aboutTitle: 'O nama',
      aboutText:
        'McC McCulloch Vina su inovativni spoj partnerstva između dvoje supružnika, Engleza Don McCulloch-a i Seke Nikolić, srpskog porekla. Don, svojim francuskim i škotskim nasleđem i svojim širokim znanjem stečenim radom sa uzgajivačima vina širom sveta, osmislio je ovu jedinstvenu proizvodnju vina.',
      wineryTitle: 'O vinariji',
      wineryText:
        'Vinarija McC ima površinu 221,17 m². Godišnje proizvede prosečno 15.000 boca. Crvena vina se čuvaju 12 meseci u srpskom hrastovom buretu, a u bocama leže još minimum 10 meseci. Bela vina takođe leže minimum 10 meseci u bocama pre puštanja na tržište. 2020. godine izgradili smo i skladište uz vinariju u kojem čuvamo zalihe vina.',
      companyTitle: 'O kompaniji',
      companyText:
        'McC McCulloch Vina su inovativni spoj partnerstva između dvoje supružnika, Engleza Don McCulloch-a i Seke Nikolić, srpskog porekla. Don, svojim francuskim i škotskim nasleđem i svojim širokim znanjem stečenim radom sa uzgajivačima vina širom sveta, osmislio je ovu jedinstvenu proizvodnju vina.',
      organicTitle: 'Organski i biodinamički',
      organicText:
        'Od 2011. godine koristimo organski i biodinamički pristup tretiranja zemljišta i vinograda, ali tek nakon izgrađene vinarije podneli smo zahtev i dobili ORGANSKI I BIODINAMIČKI SERTIFIKAT REPUBLIKE SRBIJE za organsku proizvodnju i preradu, kao i za izvoz, u novembru 2020. godine od strane akreditovanog sertifikacionog tela "EKOCERT BALKAN" d.o.o. iz Zemuna, ovlašćenog od strane Ministarstva poljoprivrede, šumarstva i vodoprivrede.',
      tastingTitle: 'Degustacija i posete',
      tastingText:
        'Posetite našu vinariju sa grupom od dve do 10 osoba i otkrijte čaroliju vina. Vaša poseta počinje u našim vinogradima, gde ćete saznati više o sortama koje uzgajamo i načinu na koji negujemo naše vinograde. Nakon toga, čeka vas ukusna meza koja će upotpuniti vaše vinsko iskustvo dok uživate u prelepom pogledu na vinograde i Frušku Goru koja se uzdiže u daljini. Naši stručnjaci će vas provesti kroz svako vino, objasniti njegove karakteristike i pomoći vam da pronađete svoje favorite. Degustacija traje maksimalno 2 sata. Da bismo osigurali vaše neometano uživanje, molimo vas da posetu najavite dan ranije, a za vikend posete preporučujemo da to učinite dva dana unapred. Za više informacija i rezervaciju pozovite nas na telefon: +381 63 653 202 ili na ',
      tastingLink: 'linku',
      harvestTitle: 'Prva berba',
      harvestText:
        'Naš prvi proizvod "KUPAŽA 2011" napravljen mešanjem dvostrukog zajedničkog vrenja sorti Merlot i Malbec, kao i sorti Cabernet Franc i Cabernet Sauvignon. Odležao 12 meseci u barik buradima od srpskog hrasta i potom flaširan da odstoji još 14 meseci.',
      linkText: 'linku',
    },
    en: {
      aboutTitle: 'About us',
      aboutText:
        'McC McCulloch Wines are an innovative partnership between Englishman Don McCulloch and Serbian-born Seka Nikolic. Don used his French and Scottish heritage and his broad experience working with winegrowers around the world to create this unique wine production.',
      wineryTitle: 'About the winery',
      wineryText:
        'The McC winery covers 221.17 m². It produces an average of 15,000 bottles per year. Red wines are aged 12 months in Serbian oak barrels and then rest for at least 10 more months in bottle. White wines also rest for at least 10 months in bottle before release. In 2020 we built a storage facility next to the winery where we keep our wine reserves.',
      companyTitle: 'About the company',
      companyText:
        'McC McCulloch Wines are an innovative partnership between Englishman Don McCulloch and Serbian-born Seka Nikolic. Don used his French and Scottish heritage and his broad experience working with winegrowers around the world to create this unique wine production.',
      organicTitle: 'Organic and biodynamic',
      organicText:
        'Since 2011 we have used an organic and biodynamic approach to treating the soil and vineyards, but only after the winery was built did we apply for and receive the ORGANIC AND BIODYNAMIC CERTIFICATE OF THE REPUBLIC OF SERBIA for organic production and processing, as well as for export, in November 2020 from the accredited certification body "EKOCERT BALKAN" d.o.o. from Zemun, authorized by the Ministry of Agriculture, Forestry and Water Management.',
      tastingTitle: 'Tasting and visits',
      tastingText:
        'Visit our winery with a group of two to ten people and discover the magic of wine. Your visit begins in our vineyards, where you will learn more about the varieties we grow and how we care for our vineyards. After that, a delicious platter awaits to complete your wine experience while you enjoy the beautiful view of the vineyards and Fruška Gora in the distance. Our experts will guide you through each wine, explain its characteristics, and help you find your favorites. The tasting lasts a maximum of two hours. To ensure your uninterrupted enjoyment, please let us know one day in advance, and for weekend visits we recommend booking two days ahead. For more information and reservations call us at +381 63 653 202 or visit ',
      tastingLink: 'this link',
      harvestTitle: 'First harvest',
      harvestText:
        'Our first product "KUPAŽA 2011" was created by blending a double co-fermentation of Merlot and Malbec, as well as Cabernet Franc and Cabernet Sauvignon. It aged 12 months in Serbian oak barrels and then was bottled to rest for another 14 months.',
      linkText: 'this link',
    },
  };

  return (
    <div id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* O nama */}
          <div className="about-card" id="Vinarija">
            <img
              className="about-card-image"
              src="img/Galerija/a"
              alt={aboutText[language].aboutTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].aboutTitle}</h2>
              <p className="about-card-text">{aboutText[language].aboutText}</p>
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
              <h2 className="about-card-title">{aboutText[language].wineryTitle}</h2>
              <p className="about-card-text">{aboutText[language].wineryText}</p>
            </div>
          </div>

          {/* O kompaniji */}
          <div className="about-card" id="Turizam">
            <img
              className="about-card-image"
              src="img/Galerija/31.jpg"
              alt={aboutText[language].companyTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].companyTitle}</h2>
              <p className="about-card-text">{aboutText[language].companyText}</p>
            </div>
          </div>

          {/* Organski i biodinamički */}
          <div className="about-card">
            <img
              className="about-card-image"
              src="img/Galerija/organic.jpg"
              alt={aboutText[language].organicTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].organicTitle}</h2>
              <p className="about-card-text">{aboutText[language].organicText}</p>
            </div>
          </div>

          {/* Degustacija i posete */}
          <div className="about-card" id="Posete">
            <img
              className="about-card-image"
              src="img/Galerija/46.jpg"
              alt={aboutText[language].tastingTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].tastingTitle}</h2>
              <p className="about-card-text">
                {aboutText[language].tastingText}
                <a href="https://liderlimo.rs/usluge/vinski-turizam/">{aboutText[language].tastingLink}</a>.
              </p>
            </div>
          </div>

          {/* Prva berba */}
          <div className="about-card">
            <img
              className="about-card-image"
              src="img/Galerija/Berba1.jpg"
              alt={aboutText[language].harvestTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].harvestTitle}</h2>
              <p className="about-card-text">{aboutText[language].harvestText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCmp;