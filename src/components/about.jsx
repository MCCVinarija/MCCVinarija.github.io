import React, { useContext, useState, useRef } from "react";
import "../css/about.css";
import { LanguageContext } from "../LanguageContext";

export const AboutCmp = (props) => {
  const { language = "sr" } = useContext(LanguageContext) || {};
  const [expanded, setExpanded] = useState({});
  const toggle = (id) => setExpanded((s) => ({ ...s, [id]: !s[id] }));
  const readMoreLabel = language === "sr" ? "Prikaži više" : "Read more";
  const readLessLabel = language === "sr" ? "Prikaži manje" : "Read less";
  const [highlighted, setHighlighted] = useState(null);

  const collapsibleCards = new Set(["Vinarija", "Organski", "organic"]);
  const shouldShowReadMore = (id) => collapsibleCards.has(id);
  const getTextClass = (id) =>
    `about-card-text ${shouldShowReadMore(id) ? (expanded[id] ? "expanded" : "collapsed") : "expanded"}`;
  const hoverTimeouts = useRef({});

  const handleEnter = (id) => {
    if (hoverTimeouts.current[id]) {
      clearTimeout(hoverTimeouts.current[id]);
      hoverTimeouts.current[id] = null;
    }
    setHighlighted(id);
  };

  const handleLeave = (id) => {
    hoverTimeouts.current[id] = setTimeout(() => {
      if (highlighted === id) setHighlighted(null);
      hoverTimeouts.current[id] = null;
    }, 180);
  };

  
const aboutText = {
  sr: {
    aboutTitle: "O nama",
    aboutText: `Vinogradarstvo na području Fruške gore datira još iz 296. godine, kada je rimski car Probus doneo prve zasade vinove loze u ovaj kraj. Inspirisana bogatom tradicijom regiona, vinarija McC nastala je sa željom da oživi autentičan karakter Fruške gore kroz vina koja odražavaju njeno podneblje, istoriju i prirodu.

Naša filozofija zasniva se na organskom i biodinamičkom pristupu proizvodnji vina, uz poštovanje prirodnih ciklusa i tradicionalnih metoda Starog sveta. U vinogradu ne koristimo pesticide, herbicide, veštačka đubriva niti druge hemijske tretmane, već negujemo zemlju kako bi vinova loza prirodno razvila svoj puni potencijal.

McC vina predstavljaju spoj znanja, tradicije i međunarodnog iskustva supružnika Dona McCullocha i Seke Nikolić. Donovo francusko i škotsko nasleđe, zajedno sa dugogodišnjim iskustvom stečenim radom sa vinarima širom sveta, utkano je u svaku bocu naših vina.`,

    wineryTitle: "O vinariji",
    wineryText: `Vinarija McC izgrađena je 2017. godine u Erdeviku, na obroncima Fruške gore, i posvećena je proizvodnji organskih i biodinamičkih vina. Naša filozofija zasniva se na minimalnoj intervenciji i potpunom poštovanju prirodnog ekosistema.

Obrađujemo tri hektara vinograda na kojima uzgajamo crvene sorte Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon i Pinot Noir, kao i bele sorte Traminac, Rajnski Rizling i Sauvignon Blanc.

Vinograd su 2008. godine kupili Don McCulloch i njegova supruga Seka Nikolić, a prva berba proizvedena je 2011. godine. Već sa prvim vinima osvojena je bronzana medalja na prestižnom Decanter World Wine Awards takmičenju u Londonu.

Vinarija se nalazi na vinskoj ruti Ilok–Erdevik, u srcu Fruške gore, regiona poznatog po dugoj vinskoj tradiciji i razvoju vinskog turizma. Godišnje proizvodimo približno 15.000 boca vina.

Crvena vina odležavaju minimum dve godine u buradima od srpskog hrasta, a zatim dodatno sazrevaju u boci kako bi razvila punu kompleksnost i eleganciju.

Pored proizvodnog dela, vinarija poseduje barik salu za degustacije i prostor namenjen uživanju u vinima i tradicionalnim sremskim specijalitetima, uz pogled na vinograde i pejzaže Fruške gore.`,

    companyTitle: "O kompaniji",
    companyText:
      "McC vina predstavljaju jedinstveno partnerstvo Dona McCullocha i Seke Nikolić. Spojem međunarodnog iskustva, tradicionalnog znanja i ljubavi prema vinu nastala je mala, autentična proizvodnja fokusirana na vina izraženog karaktera i porekla.",

    organicTitle: "Organski i biodinamički pristup",
    organicText:
      "Od 2011. godine primenjujemo organski i biodinamički pristup u vinogradu i proizvodnji vina. Naša filozofija zasniva se na očuvanju prirodnog balansa zemljišta i vinove loze, bez upotrebe pesticida, herbicida, veštačkih đubriva i drugih hemijskih sredstava koja mogu narušiti ekosistem.\n\nNakon izgradnje vinarije, 2020. godine dobili smo zvanični organski sertifikat Republike Srbije za organsku proizvodnju, preradu i izvoz, izdat od strane akreditovanog sertifikacionog tela „Ekocert Balkan“. Za berbu 2022. godine dobili smo i biodinamički sertifikat organizacije Demeter International.\n\nNaši vinogradi neguju se u skladu sa biodinamičkim principima koji podrazumevaju holistički pristup vinogradu kao živom organizmu. Fokusirani smo na zdravlje zemljišta, prirodnu otpornost vinove loze i minimalnu intervenciju u podrumu, kako bi svako vino autentično izrazilo terroir Fruške gore.",

    organicDownloadText: "Preuzmi sertifikate:",

    tastingTitle: "Degustacije i posete",
    tastingText:
      "Posetite našu vinariju i doživite autentično vinsko iskustvo u srcu Fruške gore. Degustacije su organizovane za grupe od dve do deset osoba i započinju obilaskom vinograda, gde ćete saznati više o sortama grožđa i biodinamičkom pristupu koji primenjujemo.\n\nNakon obilaska sledi degustacija vina uz pažljivo odabranu sremsku mezu i pogled na vinograde i prirodu Fruške gore. Tokom degustacije upoznaćete karakter svakog vina i priču koja stoji iza svake berbe.\n\nDegustacije traju do dva sata. Molimo vas da posetu najavite najmanje jedan dan unapred, dok za vikend preporučujemo rezervaciju dva dana ranije.\n\nZa više informacija i rezervacije pozovite nas na +381 63 653 202 ili posetite ",

    tastingLink: "ovaj link",

    harvestTitle: "Prva berba",
    harvestText:
      "Naše prvo vino, „Kupaža 2011“, nastalo je zajedničkom fermentacijom sorti Merlot i Malbec, kao i Cabernet Franc i Cabernet Sauvignon. Vino je odležavalo 12 meseci u buradima od srpskog hrasta, a potom dodatno sazrevalo u boci još 14 meseci. Već sa prvom berbom osvojena je bronzana medalja na Decanter World Wine Awards 2014. godine u Londonu.",

    linkText: "ovom linku",
  },

  en: {
    aboutTitle: "About Us",
    aboutText: `Viticulture on the slopes of Fruška Gora dates back to 296 AD, when the Roman emperor Probus introduced the first vineyards to the region. Inspired by the rich heritage of Fruška Gora, McC Winery was created with the vision of reviving the authentic character of the region through wines that reflect its land, history, and nature.

Our philosophy is rooted in organic and biodynamic winemaking, guided by natural cycles and traditional Old World methods. We do not use pesticides, herbicides, artificial fertilizers, or chemical treatments in our vineyards, allowing the vines to develop naturally and express their full character.

McC wines are the result of the partnership between Don McCulloch and Seka Nikolić. Don’s French and Scottish heritage, combined with decades of experience working alongside winemakers around the world, is reflected in every bottle we produce.`,

    wineryTitle: "About the Winery",
    wineryText: `McC Winery was established in 2017 in Erdevik, on the slopes of Fruška Gora, with a dedication to producing organic and biodynamic wines. Our philosophy is based on minimal intervention and deep respect for the natural ecosystem.

We cultivate three hectares of vineyards planted with red varieties including Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon, and Pinot Noir, alongside white varieties such as Traminer, Rhine Riesling, and Sauvignon Blanc.

The vineyard was purchased in 2008 by Don McCulloch and his wife Seka Nikolić, while the first harvest was produced in 2011. That very first vintage earned a bronze medal at the prestigious Decanter World Wine Awards in London.

Located along the Ilok–Erdevik wine route in the heart of Fruška Gora, the winery contributes to the region’s growing wine tourism and long-standing wine tradition. Today, we produce approximately 15,000 bottles annually.

Our red wines are aged for a minimum of two years in Serbian oak barrels before additional bottle aging, allowing them to develop complexity, elegance, and depth.

Alongside the production area, the winery features a barrique tasting room and a welcoming space where guests can enjoy wine and traditional Srem delicacies overlooking the vineyards and the landscapes of Fruška Gora.`,

    companyTitle: "About the Company",
    companyText:
      "McC Wines represents a unique partnership between Don McCulloch and Seka Nikolić. By combining international experience, traditional knowledge, and a shared passion for wine, they created a small-scale winery dedicated to expressive, terroir-driven wines.",

    organicTitle: "Organic & Biodynamic Approach",
    organicText:
      "Since 2011, we have embraced an organic and biodynamic approach in both vineyard management and winemaking. Our philosophy is centered on preserving the natural balance of the soil and vines without the use of pesticides, herbicides, artificial fertilizers, or chemical treatments that could harm the ecosystem.\n\nFollowing the completion of the winery, we received the official Organic Certificate of the Republic of Serbia in 2020 for organic production, processing, and export, issued by the accredited certification body “Ekocert Balkan.” For the 2022 harvest, we also received biodynamic certification from Demeter International.\n\nOur vineyards are cultivated according to biodynamic principles, treating the vineyard as a living organism. By focusing on soil vitality, natural vine resistance, and minimal intervention in the cellar, we aim to produce wines that authentically express the terroir of Fruška Gora.",

    organicDownloadText: "Download certificates:",

    tastingTitle: "Tastings & Visits",
    tastingText:
      "Visit our winery and experience authentic wine culture in the heart of Fruška Gora. Tastings are organized for groups of two to ten guests and begin with a guided walk through the vineyards, where you will learn more about our grape varieties and biodynamic philosophy.\n\nThe experience continues with a curated tasting accompanied by traditional Srem delicacies, all enjoyed with panoramic views of the vineyards and Fruška Gora. During the tasting, you will discover the character of each wine and the story behind every vintage.\n\nTastings last up to two hours. We kindly ask you to reserve your visit at least one day in advance, while weekend visits should preferably be booked two days ahead.\n\nFor reservations and additional information, please call +381 63 653 202 or visit ",

    tastingLink: "this link",

    harvestTitle: "First Harvest",
    harvestText:
      "Our first wine, “Coupage 2011,” was created through the co-fermentation of Merlot and Malbec together with Cabernet Franc and Cabernet Sauvignon. The wine was aged for 12 months in Serbian oak barrels and then further matured in bottle for an additional 14 months. This very first vintage earned a bronze medal at the Decanter World Wine Awards in London in 2014.",

    linkText: "this link",
  },
};

  return (
    <div id="about">
      <div className="about-container">
        <div className="about-grid">
          {/* O nama */}
          <div
            className={`about-card ${highlighted === "Vinarija" ? "highlight" : ""}`}
            id="Vinarija"
            onMouseEnter={() => handleEnter("Vinarija")}
            onMouseLeave={() => handleLeave("Vinarija")}
          >
            <img
              className="about-card-image"
              src="img/Vesti/Seka1.jpg"
              alt={aboutText[language].aboutTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].aboutTitle}</h2>
              <p className={getTextClass("Vinarija")}>{aboutText[language].aboutText}</p>
              {shouldShowReadMore("Vinarija") && (
                <button className="read-more-inline" onClick={() => toggle("Vinarija")}>
                  {expanded["Vinarija"] ? readLessLabel : readMoreLabel}
                </button>
              )}
            </div>
          </div>

          {/* O vinariji */}
          <div
            className={`about-card ${highlighted === "Organski" ? "highlight" : ""}`}
            id="Organski"
            onMouseEnter={() => handleEnter("Organski")}
            onMouseLeave={() => handleLeave("Organski")}
          >
            <video className="about-card-video" controls>
              <source src="img/Galerija/Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].wineryTitle}</h2>
              <p className={getTextClass("Organski")}>{aboutText[language].wineryText}</p>
              {shouldShowReadMore("Organski") && (
                <button className="read-more-inline" onClick={() => toggle("Organski")}>
                  {expanded["Organski"] ? readLessLabel : readMoreLabel}
                </button>
              )}
            </div>
          </div>

          {/* O kompaniji */}
          <div
            className={`about-card ${highlighted === "Turizam" ? "highlight" : ""}`}
            id="Turizam"
            onMouseEnter={() => handleEnter("Turizam")}
            onMouseLeave={() => handleLeave("Turizam")}
          >
            <img className="about-card-image" src="img/Galerija/31.jpg" alt={aboutText[language].companyTitle} />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].companyTitle}</h2>
              <p className={getTextClass("Turizam")}>{aboutText[language].companyText}</p>
            </div>
          </div>

          {/* Organski i biodinamički */}
          <div
            className={`about-card ${highlighted === "organic" ? "highlight" : ""}`}
            id="organic"
            onMouseEnter={() => handleEnter("organic")}
            onMouseLeave={() => handleLeave("organic")}
          >
            <img className="about-card-image" src="img/Galerija/organic.jpg" alt={aboutText[language].organicTitle} />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].organicTitle}</h2>
              <p className={getTextClass("organic")}>{aboutText[language].organicText}</p>
              {shouldShowReadMore("organic") && (
                <>
                  {expanded["organic"] && (
                    <div className="about-card-certificates">
                      <img className="about-card-certificates-image" src="/img/sertifikati.png" alt="Sertifikati" />
                      <p className="about-card-downloads">
                        {aboutText[language].organicDownloadText}{" "}
                        <a href="/pdfs/sertifikat 2025 rs.pdf" download>
                          RS
                        </a>
                        ,{" "}
                        <a href="/pdfs/sertifikat 2025 eu.pdf" download>
                          EU
                        </a>
                        ,{" "}
                        <a href="/pdfs/Demeter certificate_MCC McCulloch Wines d.o.o._20251118_EN-GB.pdf" download>
                          Demeter
                        </a>
                      </p>
                    </div>
                  )}
                  <button className="read-more-inline" onClick={() => toggle("organic")}>
                    {expanded["organic"] ? readLessLabel : readMoreLabel}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Degustacija i posete */}
          <div
            className={`about-card ${highlighted === "Posete" ? "highlight" : ""}`}
            id="Posete"
            onMouseEnter={() => handleEnter("Posete")}
            onMouseLeave={() => handleLeave("Posete")}
          >
            <img className="about-card-image" src="img/Galerija/46.jpg" alt={aboutText[language].tastingTitle} />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].tastingTitle}</h2>
              <p className={getTextClass("Posete")}>
                {aboutText[language].tastingText}
                <a href="https://liderlimo.rs/usluge/vinski-turizam/" target="_blank" rel="noopener noreferrer">
                  {aboutText[language].tastingLink}
                </a>
                .
              </p>
            </div>
          </div>

          {/* Prva berba */}
          <div
            className={`about-card ${highlighted === "harvest" ? "highlight" : ""}`}
            id="harvest"
            onMouseEnter={() => handleEnter("harvest")}
            onMouseLeave={() => handleLeave("harvest")}
          >
            <img className="about-card-image" src="img/Galerija/Berba1.jpg" alt={aboutText[language].harvestTitle} />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].harvestTitle}</h2>
              <p className={getTextClass("harvest")}>{aboutText[language].harvestText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCmp;
