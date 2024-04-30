import React from "react";
import "../css/vineHome.css";
import { Link } from "react-router-dom";

export const Shop = (props) => {
  return (
    <div id="shop" className="text-center" style={{ paddingTop: 150 }}>
      <div className="container">
        <div className="section-title">
          <h2>PORUČITE ONLINE</h2>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-2" style={{ marginLeft: 50 }}>
              <Link to="https://www.enotekapremier.rs/sr/catalogsearch/result/?q=mcc&cat=">
                <div class="wsk-cp-productShop">
                  <div class="wsk-cp-img">
                    <img
                      src="img\shop\enotekaLogo.jpg"
                      alt="Product"
                      class="img-responsive"
                    />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category"></div>
                    <div class="title-product">
                      <h3>Enoteka</h3>
                    </div>
                    <div class="description-prod">
                      <p>Vina će biti isporučena u roku od 48h.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-2" style={{ marginLeft: 22 }}>
              <Link to="https://www.prodavnica.vino.rs/catalogsearch/result/?q=MCC">
                <div class="wsk-cp-productShop">
                  <div class="wsk-cp-img">
                    <img
                      src="img\shop\vinoLogo.png"
                      alt="Product"
                      class="img-responsive"
                    />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category"></div>
                    <div class="title-product">
                      <h3>Vino.rs</h3>
                    </div>
                    <div class="description-prod">
                      <p>Vina će biti isporučena u roku od 48h.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-2" style={{ marginLeft: 22 }}>
              <Link to="https://ours.rs/search.php?search=mcc">
                <div class="wsk-cp-productShop">
                  <div class="wsk-cp-img">
                    <img
                      src="img\shop\ourslogo.png"
                      alt="Product"
                      class="img-responsive"
                    />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category"></div>
                    <div class="title-product">
                      <h3>OURS</h3>
                    </div>
                    <div class="description-prod">
                      <p>Vina će biti isporučena u roku od 48h.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-2" style={{ marginLeft: 22 }}>
              <Link to="https://vinoteka021.rs/?s=MCC&jet_ajax_search_settings=%7B%22results_order_by%22%3A%22relevance%22%2C%22results_order%22%3A%22asc%22%2C%22sentence%22%3A%22yes%22%2C%22search_in_taxonomy%22%3A%22yes%22%2C%22search_in_taxonomy_source%22%3A%5B%22product_cat%22%2C%22pa_proizvodac%22%2C%22pa_region-rejon-vinogorje%22%2C%22pa_sorta%22%2C%22pa_vrsta%22%5D%2C%22search_source%22%3A%22any%22%7D">
                <div class="wsk-cp-productShop">
                  <div class="wsk-cp-img">
                    <img
                      src="img\shop\Vinarija021Logo.PNG"
                      alt="Product"
                      class="img-responsive"
                    />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category"></div>
                    <div class="title-product">
                      <h3>Vinoteka 021</h3>
                    </div>
                    <div class="description-prod">
                      <p>Vina će biti isporučena u roku od 48h.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-md-2" style={{ marginLeft: 22}}>
              <Link to="https://prirodnovino.rs/sr/mcc-merlot-malbec/proizvod/27">
                <div class="wsk-cp-productShop">
                  <div class="wsk-cp-img">
                    <img
                      src="img\velika vina\merlot.png"
                      alt="Product"
                      class="img-responsive"
                    />
                  </div>
                  <div class="wsk-cp-text">
                    <div class="category"></div>
                    <div class="title-product">
                      <h3>Prirodno vino</h3>
                    </div>
                    <div class="description-prod">
                      <p>
                        McC Merlot Malbec
                        <br />
                        Vino će biti isporučena u roku od 48h.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="section-title" style={{ marginTop: 50 }}>
          <h2>Prodajna mesta</h2>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6" style={{ marginLeft: 50, textAlign: "left" }}>
              <h2>Beograd</h2>

              <div class="title-product">
                <h3>Enoteka Fino Vino</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Pop Lukina 6, Stari Grad Tel: 011/ 403-0962
                  <br />
                  Rade dostavu!
                </p>
              </div>

              <div class="title-product">
                <h3>Ours Vinoteka & Rakija Shop</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Ilije Stojadinovića 63, Čukarica, Tel: 062/244111
                  <br />
                  https://ours.rs/
                </p>
              </div>

              <div class="title-product">
                <h3>Srpska Kuća Vina</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Antifašističke borbe 15, Novi Beograd, Tel: 069 2137475
                  <br />
                  www.enotria.rs
                </p>
              </div>

              <div class="title-product">
                <h3>“Enoteka Premier”</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Vojvođanska 63, lokal 13, Novi Beograd
                  <br />
                  Bul.Zorana Đinđića 125đ, Tel: +381 63 86 38 217
                  <br />
                  Rade dostavu!
                </p>
              </div>

              <div class="title-product">
                <h3>Vinoteka Ukusa</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Nikole Tesle 2, Zemun, Tel: +381 63 317 306
                  <br />
                  Rade dostavu!
                </p>
              </div>

              <div class="title-product">
                <h3>Stara Kapetanija shop</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Kej Oslobođenja 8, Zemun Tel: 011/ 316-1965
                  <br />
                  Rade dostavu!
                </p>
              </div>

              <div class="title-product">
                <h3>“Vinoteka Vino I Vinogradarstvo”-Vina Mosaica</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Zmaj od Noćaja 9, Dorćol
                  <br />
                  Vino će biti isporučena u roku od 48h.
                </p>
              </div>
              <div class="title-product">
                <h3>Vinomond</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Lagumska 16, Zemun, Tel: 011/277-3023
                  <br />
                  Rade dostavu!
                </p>
              </div>

              <div class="title-product">
                <h3>Drink Story-Vinoarija</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Jedaneste krajiške divizije 72, Rakovica, Tel: 069/1991961
                  <br />
                </p>
              </div>

              <h2 style={{ marginTop: 30 }}>Restorani</h2>

              <div class="title-product">
                <h3>Madera</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Bul.Kralja Aleksandra 43, Tašmajdan
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Red Queen</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Beograd na vodi
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Buda Bar</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Beograd na vodi
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Lavina</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Djordja Stanojevica 9v, Belvil
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Shangri La Sushi</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Galerija, Beograd na vodi
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Supreme Steak House</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Galerija, Beograd na vodi
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Savanova</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Savsko šetalište bb, Beograd na vodi
                  <br />
                </p>
              </div>
              <div class="title-product">
                <h3>Vegangelov</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Gospodara Jovanova 42a,
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Radost Fina Kuhinjica</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Pariska 3
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Stara Kapetanija</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Zemunski Kej 8, Zemun
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Bahus Inn</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Bul. Nikole Tesle bb, Zemun
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Malo Korzo-Panonija</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Zrenjaninski put 158a, Borča
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Trio Gastro Pub</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Ćirila i Metodija 23a,Stara Pazova
                  <br />
                </p>
              </div>
            </div>

            <div class="col-md-5" style={{ marginRight:10, textAlign: "right"}}>

              <h2>NOVi SAD</h2>

              <div class="title-product">
                <h3>UNIVEREXPORT-UNIVER ORGANA</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Nikole Pasica 25 <br></br> Tel: 021/525-132
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>UNIVEREXPORT-PROMENADA</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Bulevar oslobodjenja 119, suteren <br></br> Tel: 021/215-6371
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>TEPLICA-EKOLOSKA PRODAVNICA</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Petra Drapsina 18, suteren <br></br> Tel: 062/935/7911
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>NANA WINE&BRENDY SHOP</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Dunavska, 17-pasaz 
                  
                </p>
              </div>

              <h2 style={{ marginTop: 30 }}>Restorani</h2>


              <div class="title-product">
                <h3>PIVNICA TATA BRADA</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Mite Ruzica, 4
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>CAFFE KNJIZARA NUBLU</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Zarka Zrenjanina, 12
                  <br />
                </p>
              </div>


              <div class="title-product">
                <h3>Caffe 7</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Bul.Kralja Petra I, 7
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Picerija Sedmica</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Preko puta
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Korpa</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Veselina Masleše 2
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Tako je suđeno</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Ribnjak-Gornji Put 15
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Garden I</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Vase Stajića 27
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>I Beer Concept Bar</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Danila Kiša 12
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Restoran I Hotel "Veliki</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Nikole Pašića 24
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Beeraj</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Trg Republike 18/L5
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Udruženje Klub Ljubitelja Pasti</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Maksima Gorkog 17
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>Karlo</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Petrovaradinska Tvrđava (Pored Hotela Leopold)
                  <br />
                </p>
              </div>
              <h2 style={{ marginTop: 30 }}>Hoteli u Beogradu</h2>


              <div class="title-product">
                <h3>HILTON</h3>
              </div>
              <div class="description-prodShop">
              <p>
                  Kralja Milana, 35
                  <br />
                </p>
              </div>


              <div class="title-product">
                <h3>SQUARE NINE</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Studentski trg, 9
                  <br />
                </p>
              </div>

              <div class="title-product">
                <h3>SAINT TEN HOTEL</h3>
              </div>
              <div class="description-prodShop">
                <p>
                  Svetog Save, 10
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
