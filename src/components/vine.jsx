import React, { useEffect, useContext } from "react";
import "../css/vine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const handleDownload = (pdfPath) => {
  // Triggering download
  window.open(pdfPath, "_blank");
};

export const Vine = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};

  useEffect(() => {
    // Scroll to the specified anchor when the page mounts
    if (window.location.hash) {
      const hashParts = window.location.hash.split('#'); // Split the hash by '#'
      const targetID = hashParts[hashParts.length - 1]; // Get the last part, which should be the desired ID
      const targetElement = document.getElementById(targetID); // Find the element by its ID
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
      }
    }
    
  }, []);

  const wineText = {
    sr: {
      coupageTitle: 'Kupaža/Coupage',
      coupageSubtitle: 'Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon',
      coupageDesc:
        'Pravilnim izborom udela svake sorte u kupaži, ovo vino odlikuje punoću voćnih aroma sa udelom začina i cveća. Procesom odležavanja u vinu su se razvile note vanile, duvana, slatkog drveta i mineralnosti. Uz vino od hrane lepo se slažu jela sa roštilja, biftek, ćuretina, odresci, lazanja, razna variva.',
      traminacTitle: 'Traminac',
      traminacSubtitle: 'Traminac',
      traminacDesc:
        'Belo vino sortnog karaktera, izbalansirano, sa slabo izraženim kiselinama, žuto-zelene boje. Izražene arome tropskog voća, breskve i začina. Uz vino od hrane lepo se slaže: dagnje, jegulje, pica, omlet, pohovana ćuretina, meki sirevi izraženije arome (egzotična kuhinja).',
      rieslingTitle: 'Rajnski Riesling',
      rieslingSubtitle: 'Rajnski Riesling',
      rieslingDesc:
        'Vino je izraženo sortnog karaktera, zeleno-žute boje, sa aromama jabuke, breskve, ruže i u pozadini ljubičice. Balansirano na ukusu sa svežim, izraženim kiselinama, sa petrolejskim aromama. Uz ovo vino od hrane lepo se slaže: šunka, kavijar, pašteta od tunjevine, dimljeni losos, pijani šaran, smuđ u pavlaci, piletina na žaru, sve vrste pečenja, polutvrdi sirevi.',
      malbecTitle: 'Merlot/Malbec',
      malbecSubtitle: 'Merlot i Malbec',
      malbecDesc:
        'Kupaža dve sorte grožđa sa dominantnim uticajem Merloa. Udeo Merloa 70%, Malbeka 30%. Izraženi voćni stil sa notama cvetnih i začinskih aroma. Procesom odležavanja u vinu su se razvile i arome slatkog drveta i vanile. Odležava 12 meseci u hrastovom buretu i još minimum 10 meseci u boci. Uz vino od hrane lepo se slažu goveđa salata, pohovana paprika, kolenica sa renom, jela sa roštilja, biftek, polutvrdi sirevi, lazanja.',
      cabernetTitle: 'Kaberne Frans-Kaberne Sovinjon',
      cabernetSubtitle: 'Cabernet Franc- Cabernet Sauvignon',
      cabernetDesc:
        'Kupaža dve sorte grožđa sa dominantnijim uticajem Kaberne Sovinjona oko 60% uz 40% Kaberne Frana. Odležava 12 meseci u hrastovom buretu i minimum 10 meseci u boci. Kupaža dva vina sa izraženim voćnim stilom (crno bobičasto voće) sa notama cveća i paprike. Procesom odležavanja u vinu su se razvile note vanile, duvana i slatkog drveta. Uz vino se od hrane lepo slažu jela sa roštilja, biftek, svinjski kare, ćuretina na podvarku, jela ispod sača.',
      blancTitle: 'Sovinjon Blank',
      blancSubtitle: 'Sauvignon Blanc',
      blancDesc:
        'Vino zeleno-žute boje, voćnog karaktera na mirisu, strukturalno puno i sveže sa voćnim notama i laganom herbalnom završnicom na ukusu. Uz ovo vino od hrane lepo se slaže: jela i salate na bazi belog mesa i bele ribe.',
      pinotTitle: 'Pinot Noir',
      pinotSubtitle: 'Pinot Noir',
      pinotDesc:
        'Vino izraženih sortnih karakteristika, izbalansirano, voćno sa notama crvenog voća koje prate arome: cimeta, peperminta i zelenog čaja. Procesom odležavanja razvile su se i note mineralnosti kao i vanile i slatkog drveta. Odležava 12 meseci u hrastovom buretu i još minimum 10 meseci u boci. Uz ovo vino lepo se slažu jela kao što su: losos (na žaru) i druge ribe, biftek, piletina (pogotovo kuvana u crvenom vinu), pržena i dinstana jagnjetina, sva jela u kojima pečurke karakterišu glavni element ukusa, fazan, patka... Najbolje su jednostavne i bogate namirnice, sirevi.',
      roseTitle: 'Roze Tajna',
      roseSubtitle: 'Cabernet Sauvignon',
      roseDesc:
        'Sveže, lagano vino balansiranog tela. Na mirisu cvetne note, crveno voće, sa primesama začinsko-herbalnih nota. Na ukusu lagana struktura sa dužom završnicom. Uz vino se slaže lakša hrana: mladi sirevi, paste, pice, salate.',
      moreText: 'Više o vinu',
      orderText: 'Poruči',
    },
    en: {
      coupageTitle: 'Coupage',
      coupageSubtitle: 'Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon',
      coupageDesc:
        'With a careful balance of each variety in the blend, this wine offers rich fruit aromas with spicy and floral notes. Aging has developed vanilla, tobacco, sweet wood, and mineral tones. It pairs well with grilled dishes, steak, turkey, steaks, lasagna, and hearty stews.',
      traminacTitle: 'Traminac',
      traminacSubtitle: 'Traminac',
      traminacDesc:
        'A varietal white wine, balanced with mildly expressed acidity and yellow-green color. Pronounced aromas of tropical fruit, peach and spice. Pairs well with mussels, eel, pizza, omelet, breaded turkey, and soft cheeses with stronger flavor (exotic cuisine).',
      rieslingTitle: 'Riesling',
      rieslingSubtitle: 'Riesling',
      rieslingDesc:
        'A pronounced varietal wine, yellow-green in color, with aromas of apple, peach, rose and violet in the background. Balanced on the palate with fresh, pronounced acidity and petrol notes. It pairs well with ham, caviar, tuna pâté, smoked salmon, stuffed carp, pike-perch in cream, grilled chicken, all kinds of roasts, and semi-hard cheeses.',
      malbecTitle: 'Merlot/Malbec',
      malbecSubtitle: 'Merlot and Malbec',
      malbecDesc:
        'A blend of two grape varieties with Merlot dominant at 70% and Malbec at 30%. Pronounced fruity style with floral and spicy notes. Aging brings sweet wood and vanilla aromas. Aged 12 months in oak barrels and at least 10 months in bottle. Pairs well with beef salad, breaded peppers, pork knuckle with green pepper sauce, barbecue dishes, steak, semi-hard cheeses, and lasagna.',
      cabernetTitle: 'Cabernet Franc-Cabernet Sauvignon',
      cabernetSubtitle: 'Cabernet Franc and Cabernet Sauvignon',
      cabernetDesc:
        'A blend dominated by Cabernet Sauvignon at about 60% with 40% Cabernet Franc. Aged 12 months in oak barrels and at least 10 months in bottle. The blend has a pronounced fruity style with black berry fruit, floral and pepper notes. Aging also develops vanilla, tobacco and sweet wood. It pairs well with grilled dishes, steak, pork loin, turkey stew, and dishes cooked under a lid.',
      blancTitle: 'Sauvignon Blanc',
      blancSubtitle: 'Sauvignon Blanc',
      blancDesc:
        'Yellow-green wine with a fruity aroma on the nose, structurally full and fresh with fruity notes and a light herbal finish on the palate. It pairs well with dishes and salads based on white meat and white fish.',
      pinotTitle: 'Pinot Noir',
      pinotSubtitle: 'Pinot Noir',
      pinotDesc:
        'A wine with pronounced varietal character, balanced and fruity with notes of red fruit accompanied by cinnamon, peppermint, and green tea. Aging also develops mineral notes and hints of vanilla and sweet wood. Aged 12 months in oak barrels and at least 10 months in bottle. It pairs well with grilled salmon and other fish, steak, chicken (especially cooked in red wine), roasted and stewed lamb, dishes featuring mushrooms, pheasant, duck, and rich simple foods and cheeses.',
      roseTitle: 'Rosé Tajna',
      roseSubtitle: 'Cabernet Sauvignon',
      roseDesc:
        'A fresh, light wine with balanced body. On the nose it has floral notes and red fruit with hints of herbal spice. On the palate it is light with a longer finish. It pairs nicely with lighter food such as young cheeses, pasta, pizza and salads.',
      moreText: 'More about the wine',
      orderText: 'Order',
    },
  };

  return (
    <div className="bodyVines">
      <div style={{ marginTop: 100 }}>
        <div class="card" id="coupage">
          <div class="photo">
            <img src="..//img/vina/COUPAGE.png" alt="COUPAGE" />
          </div>
          <div class="description">
            <h2>{wineText[language].coupageTitle}</h2>
            <h4>{wineText[language].coupageSubtitle}</h4>
            <p>{wineText[language].coupageDesc}</p>

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/coupage.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle}/> {wineText[language].moreText}
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> {wineText[language].orderText}
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="traminac">
          <div class="photoRight">
            <img src="/img/vina/TRAMINAC.png" alt="TRAMINAC" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].traminacTitle}</h2>
            <h4>{wineText[language].traminacSubtitle}</h4>
            <p class="pRight">
              {wineText[language].traminacDesc}
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/traminac.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
              {wineText[language].moreText} <FontAwesomeIcon icon={faWineBottle} />
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {wineText[language].orderText} <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="rizling">
          <div class="photo">
            <img src="/img/vina/RAJNSKI RIZLING.png" alt="RIZLING" />
          </div>
          <div class="description">
            <h2>{wineText[language].rieslingTitle}</h2>
            <h4>{wineText[language].rieslingSubtitle}</h4>
            <p>{wineText[language].rieslingDesc}</p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/rajnski.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} /> {wineText[language].moreText}
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> {wineText[language].orderText}
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="malbec">
          <div class="photoRight">
            <img src="/img/vina/MERLOT-MALBEC.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].malbecTitle}</h2>
            <h4>{wineText[language].malbecSubtitle}</h4>
            <p class="pRight">
              {wineText[language].malbecDesc}
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/Merlot.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                {wineText[language].moreText} <FontAwesomeIcon icon={faWineBottle} />
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                {wineText[language].orderText} <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="caberne">
          <div class="photo">
            <img
              src="/img/vina/CABERNET FTANC-CABERNET SAUVIGNON.png"
              alt="RIZLING"
            />
          </div>
          <div class="description">
            <h2>{wineText[language].cabernetTitle}</h2>
            <h4>{wineText[language].cabernetSubtitle}</h4>
            <p>{wineText[language].cabernetDesc}</p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/Cabernet.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} /> {wineText[language].moreText}
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> {wineText[language].orderText}
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="blanc">
          <div class="photoRight">
            <img src="/img/vina/SAUVIGNON BLANC.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].blancTitle}</h2>
            <h4>{wineText[language].blancSubtitle}</h4>
            <p class="pRight">
              {wineText[language].blancDesc}
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/sauvignon.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                {wineText[language].moreText}
                <FontAwesomeIcon icon={faWineBottle} />
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                {wineText[language].orderText}  <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>
        <div class="card" id="pinot">
          <div class="photo">
            <img src="/img/vina/PINOT NOAR.png" alt="RIZLING" />
          </div>
          <div class="description">
            <h2>{wineText[language].pinotTitle}</h2>
            <h4>{wineText[language].pinotSubtitle}</h4>
            <p>
              {wineText[language].pinotDesc}
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/pino.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} /> {wineText[language].moreText}
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> {wineText[language].orderText}
              </h4>
            </Link>
          </div>
        </div>
        <div class="card" id="rose">
          <div class="photoRight">
            <img src="/img/vina/ROSE TAJNA.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].roseTitle}</h2>
            <h4>{wineText[language].roseSubtitle}</h4>
            <p class="pRight">
              {wineText[language].roseDesc}
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/rose.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                {wineText[language].moreText} <FontAwesomeIcon
                  icon={faWineBottle}
                />{" "}
              </h4>
            </a>

            <Link to="/shop">
              <h4>
                {" "}
                {wineText[language].orderText} <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vine;
