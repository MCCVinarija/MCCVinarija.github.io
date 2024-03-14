import React, { useEffect } from "react";
import "../css/vine.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const handleDownload = (pdfPath) => {
  // Triggering download
  window.open(pdfPath, "_blank");
};

export const Vine = (props) => {
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
    <div className="bodyVines">
      <div style={{ marginTop: 100 }}>
        <div class="card" id="coupage">
          <div class="photo">
            <img src="..//img/vina/COUPAGE.png" alt="COUPAGE" />
          </div>
          <div class="description">
            <h2>Kupaža/Coupage</h2>
            <h4>Merlot, Malbec, Cabernet Franc, Cabernet Sauvignon</h4>
            <p>
              Pravilnim izborom udela svake sorte u kupaži, ovo vino odlikuje
              punoća voćnih aroma sa udelom začina i cveća. Procesom odležavanja
              u vinu su se razvile note vanile, duvana, slatkog drveta i
              mineralnost.Uz vino od hrane lepo se slažu jela sa roštilja
              ,biftek, ćuretina, odresci, lazanje, razna variva
            </p>

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/coupage.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle}/> Više o vinu
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> Poruči
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="traminac">
          <div class="photoRight">
            <img src="/img/vina/TRAMINAC.png" alt="TRAMINAC" />
          </div>
          <div class="descriptionRight">
            <h2>Traminac</h2>
            <h4>Traminac</h4>
            <p class="pRight">
              Belo vino sortnog karaktera, izbalansirano, sa slabo izraženim
              kiselinama,žuto zelene boje.Izražene arome tropskog voća,breskve i
              začina. Uz vino od hrane lepo se slaže: dagnje, jegulje,
              pica,omlet, pohovana ćuretina, meki sirevi izraženije
              arome,(egzotična kuhinja)
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/traminac.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
              Više o vinu <FontAwesomeIcon icon={faWineBottle} />
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                Poruči <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="rizling">
          <div class="photo">
            <img src="/img/vina/RAJNSKI RIZLING.png" alt="RIZLING" />
          </div>
          <div class="description">
            <h2>Rajnski Riesling</h2>
            <h4>Rajnski Riesling</h4>
            <p>
              Vino je izraženo sortnog karaktera, zeleno-žute boje, sa aromama
              jabuke, breskve, ruže i u pozadini ljubičice. Balansirano na ukusu
              sa svežim, izraženim kiselinama, sa petrolejskim aromama. Uz ovo
              vino od hrane lepo se slaže: šunka, kavijar, pašteta od tunjevine,
              dimnjeni losos, pijani šaran,smuđ u pavlaci, piletina na žaru, sve
              vrste pečenja,polutvrdi sirevi
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/rajnski.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} /> Više o vinu
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> Poruči
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="malbec">
          <div class="photoRight">
            <img src="/img/vina/MERLOT-MALBEC.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>Merlot/Malbec</h2>
            <h4>Merlot i Malbec</h4>
            <p class="pRight">
              Kupaža dve sorte grožđa sa dominantnim uticajem Merloa. Udeo
              Merloa 70%, Malbeka 30%. Izraženi voćni stil sa notama cvetnih i
              začinskih aroma. Procesom odležavanja u vinu su se razvile i arome
              slatkog drveta i vanile. Odležava 12 meseci u hrastovom buretu i
              još minimum 10 meseci u boci. Uz vino od hrane lepo se slažu
              goveđa salata, pohovana paprika, kolenica sa renom ,jela sa
              roštilja, biftek, polutvrdi sirevi, lazanja
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/Merlot.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                Više o vinu <FontAwesomeIcon icon={faWineBottle} />
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                Poruči <FontAwesomeIcon icon={faShoppingBasket} />
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
            <h2>Kaberne Frans-Kaberne Sovinjon</h2>
            <h4>Cabernet Franc- Cabernet Sauvignon</h4>
            <p>
              Kupaža dve sorte grožđa sa dominantijim uticajem Kaberne Sovinjona
              oko 60% uz 40% Kaberne Frana. Odležava 12 meseci u hrastovom
              buretu i minimum 10 meseci u boci. Kupaža dva vina sa izraženim
              voćnim stilom (crno bobičasto voće) sa notama cveća i paprike.
              Procesom odležavanja u vinu su se razvile note vanile ,duvana i
              slatkog drveta.Uz vino se od hrane lepo slažu jela sa roštilja,
              biftek, svinjski kare, ćuretina na podvarku, jela ispod sača
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/Cabernet.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} /> Više o vinu
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> Poruči
              </h4>
            </Link>
          </div>
        </div>

        <div class="card" id="blanc">
          <div class="photoRight">
            <img src="/img/vina/SAUVIGNON BLANC.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>Sovinjon Blank</h2>
            <h4>Sauvignon Blanc</h4>
            <p class="pRight">
              Vino zeleno-žute boje, voćnog karaktera na mirisu, strukturalno
              puno i sveže sa voćnim notama i laganom herbalnom završnicom na
              ukusu. Uz ovo vino od hrane lepo se slaže: jela i salate na bazi
              belog mesa i bele ribe
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/sauvignon.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                Više o vinu
                <FontAwesomeIcon icon={faWineBottle} />
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                Poruči  <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>
        <div class="card" id="pinot">
          <div class="photo">
            <img src="/img/vina/PINOT NOAR.png" alt="RIZLING" />
          </div>
          <div class="description">
            <h2>Pinot Noir</h2>
            <h4> Pinot Noir</h4>
            <p>
              Vino izraženih sortnih karakteristika, izbalansirano, voćno sa
              notama crvenog voća koje prate arome: cimeta, peperminta i zelenog
              čaja. Procesom odležavanja razvile su se i note mineralnosti kao i
              vanile i slatkog drveta. Odležava 12 meseci u hrastovom buretu i
              još minimum 10 meseci u boci. Uz ovo vino lepo se slažu jela kao
              što su: losos (na žaru) i druge ribe, biftek, piletina(pogotovo
              kuvana u crvenom vinu), pržena i dinstana jagnjetina, sva jela u
              kojima pečurke karakterišu glavni element ukusa, fazan,
              patka,...Najbolje su jednostavne i bogate namirnice. sirevi
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/pino.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                <FontAwesomeIcon icon={faWineBottle} /> Više o vinu
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                <FontAwesomeIcon icon={faShoppingBasket} /> Poruči
              </h4>
            </Link>
          </div>
        </div>
        <div class="card" id="rose">
          <div class="photoRight">
            <img src="/img/vina/ROSE TAJNA.png" alt="MALBEC" />
          </div>
          <div class="descriptionRight">
            <h2>Roze Tajna</h2>
            <h4>Cabernet Sauvignon </h4>
            <p class="pRight">
              Sveže, lagano vino balasniranog tela. Na mirisu cvetne
              note, crveno voće, sa primesama začinsko herbalnih nota. Na ukusu
              lagana struktura sa dužom završnicom. Uz vino se slaže lakša
              hrana: mladi sirevi, paste, pice,salate
            </p>
            <br />

            <a
              href="#"
              onClick={() => handleDownload("../pdfs/rose.pdf")}
            >
              <h4 style={{ marginBottom: 10, fontStyle: "regular" }}>
                {" "}
                Više o vinu <FontAwesomeIcon
                  icon={faWineBottle}
                />{" "}
              </h4>
            </a>

            <Link to={"/shop"}>
              <h4>
                {" "}
                Poruči <FontAwesomeIcon icon={faShoppingBasket} />
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vine;
