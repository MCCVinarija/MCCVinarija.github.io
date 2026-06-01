import React, { useEffect, useContext } from "react";
import "../css/vine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

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

  const wineText = { sr: { coupageTitle: 'Kupaža', coupageSubtitle: 'Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon', coupageDesc: 'Pažljivo kreirana kupaža četiri sorte grožđa, bogata voćnim aromama sa sofisticiranim notama začina i cveća. Dugim odležavanjem od minimum 2 godine razvile su se elegantne note vanile, duvana, slatkog drveta i mineralnosti.', sekaTitle: 'Bela Fantazija Seka', sekaSubtitle: 'Rajnski Rizling, Sauvignon Blanc, Traminac', sekaDesc: 'Elegantna kupaža tri sorte grožđa u kojoj dominiraju Rajnski rizling (70%), Sauvignon blanc (20%) i Traminac (10%). Na mirisu dominiraju cvetne arome praćene notama suvog voća, dok je ukus pun, harmoničan i dugotrajan.', traminacTitle: 'Traminac', traminacSubtitle: 'Traminac', traminacDesc: 'Belo vino izraženog sortnog karaktera, skladno izbalansirano sa blagim kiselinama i žuto-zelenom bojom. Dominiraju arome tropskog voća, breskve i začina.', rieslingTitle: 'Rajnski Rizling', rieslingSubtitle: 'Rajnski Rizling', rieslingDesc: 'Vino izraženog sortnog karaktera, zeleno-žute boje, sa aromama jabuke, breskve i ruže, uz diskretne note ljubičice. Na ukusu je sveže i balansirano, sa izraženim kiselinama i prepoznatljivim petrolejskim notama.', malbecTitle: 'Merlot / Malbec', malbecSubtitle: 'Merlot / Malbec', malbecDesc: 'Kupaža dve sorte grožđa sa dominantnim uticajem Merlota (70%) i Malbeca (30%). Vino izraženog voćnog karaktera sa notama cveća i začina. Odležavanjem su razvijene elegantne arome vanile i slatkog drveta. Odležava minimum 2 godine u hrastovim buradima i dodatno u boci.', cabernetTitle: 'Cabernet Franc / Cabernet Sauvignon', cabernetSubtitle: 'Cabernet Franc / Cabernet Sauvignon', cabernetDesc: 'Kupaža Cabernet Sauvignona (60%) i Cabernet Franca (40%), bogatog voćnog karaktera sa notama crnog bobičastog voća, cveća i paprike. Dugim odležavanjem razvijaju se složene note vanile, duvana i slatkog drveta. Odležava minimum 2 godine u hrastovim buradima i dodatno u boci.', blancTitle: 'Sauvignon Blanc', blancSubtitle: 'Sauvignon Blanc', blancDesc: 'Vino zeleno-žute boje, izraženog voćnog karaktera na mirisu. Na ukusu je puno, sveže i elegantno, sa voćnim notama i blagom herbalnom završnicom.', pinotTitle: 'Pinot Noir', pinotSubtitle: 'Pinot Noir', pinotDesc: 'Vino izraženog sortnog karaktera, elegantno i izbalansirano, sa aromama crvenog voća, cimeta, peperminta i zelenog čaja. Odležavanjem razvija dodatne note mineralnosti, vanile i slatkog drveta. Odležava minimum 2 godine u hrastovim buradima i dodatno u boci.', roseTitle: 'Roze Tajna', roseSubtitle: 'Cabernet Sauvignon', roseDesc: 'Sveže i lagano vino balansiranog tela. Na mirisu dominiraju cvetne note i crveno voće, uz diskretne herbalno-začinske tonove. Na ukusu je elegantno, osvežavajuće i sa dugom završnicom.', moreText: 'Više o vinu', orderText: 'Poruči', }, en: { coupageTitle: 'Coupage', coupageSubtitle: 'Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon', coupageDesc: 'A carefully crafted blend of four grape varieties, rich in fruit aromas with refined spicy and floral notes. Extended aging for a minimum of 2 years reveals elegant layers of vanilla, tobacco, sweet oak, and minerality.', sekaTitle: 'White Fantasy Seka', sekaSubtitle: 'Rhine Riesling, Sauvignon Blanc, Traminer', sekaDesc: 'An elegant blend dominated by Rhine Riesling (70%), Sauvignon Blanc (20%), and Traminer (10%). Floral aromas intertwine with delicate notes of dried fruit, while the palate is full, harmonious, and long-lasting.', traminacTitle: 'Traminer', traminacSubtitle: 'Traminer', traminacDesc: 'A varietal white wine with balanced structure, gentle acidity, and a yellow-green hue. Pronounced aromas of tropical fruit, peach, and delicate spices define its character.', rieslingTitle: 'Rhine Riesling', rieslingSubtitle: 'Rhine Riesling', rieslingDesc: 'A wine with pronounced varietal character and a green-yellow color, revealing aromas of apple, peach, and rose with subtle hints of violet. Fresh and balanced on the palate, with vibrant acidity and distinctive petrol notes.', malbecTitle: 'Merlot / Malbec', malbecSubtitle: 'Merlot / Malbec', malbecDesc: 'A blend dominated by Merlot (70%) with Malbec (30%), offering expressive fruit character complemented by floral and spicy notes. Aging develops elegant hints of vanilla and sweet oak. Aged for a minimum of 2 years in oak barrels and further refined in bottle.', cabernetTitle: 'Cabernet Franc / Cabernet Sauvignon', cabernetSubtitle: 'Cabernet Franc / Cabernet Sauvignon', cabernetDesc: 'A blend of Cabernet Sauvignon (60%) and Cabernet Franc (40%), rich in black berry fruit aromas with notes of flowers and pepper. Extended aging develops complex layers of vanilla, tobacco, and sweet oak. Aged for a minimum of 2 years in oak barrels and further matured in bottle.', blancTitle: 'Sauvignon Blanc', blancSubtitle: 'Sauvignon Blanc', blancDesc: 'A green-yellow wine with expressive fruit aromas. Fresh, elegant, and full on the palate, featuring fruity notes and a subtle herbal finish.', pinotTitle: 'Pinot Noir', pinotSubtitle: 'Pinot Noir', pinotDesc: 'A wine of pronounced varietal character, elegant and balanced, with aromas of red fruit, cinnamon, peppermint, and green tea. Aging reveals additional layers of minerality, vanilla, and sweet oak. Aged for a minimum of 2 years in oak barrels and further refined in bottle.', roseTitle: 'Rosé Tajna', roseSubtitle: 'Cabernet Sauvignon', roseDesc: 'A fresh and light wine with balanced body. Floral aromas and red fruit notes are complemented by delicate herbal and spicy tones. Elegant, refreshing, and persistent on the palate.', moreText: 'More About the Wine', orderText: 'Order', }, };

  return (
    <div className="bodyVines">
      <div style={{ marginTop: 100 }}>
        <div class="card" id="coupage">
          <div class="photo">
            <img src="img/vina/COUPAGE.png" alt="COUPAGE" />
          </div>
          <div class="description">
            <h2>{wineText[language].coupageTitle}</h2>
            <h4>{wineText[language].coupageSubtitle}</h4>
            <p>{wineText[language].coupageDesc}</p>

            <a
              href="/pdfs/coupage.pdf"
              target="_blank"
              rel="noopener noreferrer"
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

        <div class="card" id="traminac">
          <div class="photoRight">
            <img src="img/vina/TRAMINAC.png" alt="TRAMINAC" />
          </div>

          <div class="descriptionRight">
            <h2>{wineText[language].traminacTitle}</h2>
            <h4>{wineText[language].traminacSubtitle}</h4>
            <p class="pRight">
              {wineText[language].traminacDesc}
            </p>
            <br />

            <a
              href="/pdfs/traminac.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
            <img src="img/vina/RAJNSKI RIZLING.png" alt="RIZLING" />
          </div>
          <div class="description">
            <h2>{wineText[language].rieslingTitle}</h2>
            <h4>{wineText[language].rieslingSubtitle}</h4>
            <p>{wineText[language].rieslingDesc}</p>
            <br />

            <a
              href="/pdfs/rajnski.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
            <img src="img/vina/MERLOT-MALBEC.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].malbecTitle}</h2>
            <h4>{wineText[language].malbecSubtitle}</h4>
            <p class="pRight">
              {wineText[language].malbecDesc}
            </p>
            <br />

            <a
              href="/pdfs/Merlot.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
              src="img/vina/CABERNET FTANC-CABERNET SAUVIGNON.png"
              alt="RIZLING"
            />
          </div>
          <div class="description">
            <h2>{wineText[language].cabernetTitle}</h2>
            <h4>{wineText[language].cabernetSubtitle}</h4>
            <p>{wineText[language].cabernetDesc}</p>
            <br />

            <a
              href="/pdfs/Cabernet.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
            <img src="img/vina/SAUVIGNON BLANC.png" alt="SAUVIGNON BLANC" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].blancTitle}</h2>
            <h4>{wineText[language].blancSubtitle}</h4>
            <p class="pRight">
              {wineText[language].blancDesc}
            </p>
            <br />

            <a
              href="/pdfs/sauvignon.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
        <div class="card" id="rose">
          <div class="photo">
            <img src="img/vina/ROSE TAJNA.png" alt="ROSE TAJNA" />
          </div>
          <div class="description">
            <h2>{wineText[language].roseTitle}</h2>
            <h4>{wineText[language].roseSubtitle}</h4>
            <p>
              {wineText[language].roseDesc}
            </p>
            <br />

            <a
              href="/pdfs/rose.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
        <div class="card" id="pinot">
          <div class="photo">
            <img src="img/vina/PINOT NOAR.png" alt="PINOT NOIR" />
          </div>
          <div class="description">
            <h2>{wineText[language].pinotTitle}</h2>
            <h4>{wineText[language].pinotSubtitle}</h4>
            <p>
              {wineText[language].pinotDesc}
            </p>
            <br />

            <a
              href="/pdfs/Pino.pdf"
              target="_blank"
              rel="noopener noreferrer"
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

        <div class="card" id="seka">
          <div class="photoRight">
            <img src="img/vina/SEKA.png" alt="SEKA" />
          </div>
          <div class="descriptionRight">
            <h2>{wineText[language].sekaTitle}</h2>
            <h4>{wineText[language].sekaSubtitle}</h4>
            <p class="pRight">
              {wineText[language].sekaDesc}
            </p>
            <br />

            <a
              href="/pdfs/seka.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
