import React from "react";
import "../css/vineHome.css";
import "../css/shop.css";
import { Link } from "react-router-dom";

export const Shop = (props) => {
  const beogradWine = [
   // { name: "Enoteka Fino Vino", address: "Pop Lukina 6, Stari Grad", phone: "011/403-0962", info: "Rade dostavu!" },
    { name: "Ours Vinoteka & Rakija Shop", address: "Ilije Stojadinovića 63, Čukarica", phone: "062/244111", website: "https://ours.rs/" },
    { name: "Srpska Kuća Vina", address: "Antifašističke borbe 15, Novi Beograd", phone: "069/2137475", website: "www.enotria.rs" },
    { name: "Enoteka Premier", address: "Vojvođanska 63, lokal 13, Novi Beograd", phone: "+381 63 86 38 217", info: "Rade dostavu!", address2: "Bul. Zorana Đinđića 125đ" },
   // { name: "Vinoteka Ukusa", address: "Nikole Tesle 2, Zemun", phone: "+381 63 317 306", info: "Rade dostavu!" },
    { name: "Stara Kapetanija shop", address: "Kej Oslobođenja 8, Zemun", phone: "011/316-1965", info: "Rade dostavu!" },
    { name: "Vinoteka Vino I Vinogradarstvo - Vina Mosaica", address: "Zmaj od Noćaja 9, Dorćol", info: "Vino će biti isporučena u roku od 48h." },
   // { name: "Vinomond", address: "Lagumska 16, Zemun", phone: "011/277-3023", info: "Rade dostavu!" },
   // { name: "Drink Story - Vinoarija", address: "Jedaneste krajiške divizije 72, Rakovica", phone: "069/1991961" },
  ];

  const beogradRestaurants = [
    { name: "Madera", address: "Bul. Kralja Aleksandra 43, Tašmajdan" },
    { name: "Red Queen", address: "Beograd na vodi" },
    { name: "Buda Bar", address: "Beograd na vodi" },
   // { name: "Lavina", address: "Djordja Stanojevica 9v, Belvil" },
    { name: "Shangri La Sushi", address: "Galerija, Beograd na vodi" },
    { name: "Supreme Steak House", address: "Galerija, Beograd na vodi" },
   // { name: "Savanova", address: "Savsko šetalište bb, Beograd na vodi" },
    { name: "Vegangelov", address: "Gospodara Jovanova 42a" },
    { name: "Radost Fina Kuhinjica", address: "Pariska 3" },
    { name: "Stara Kapetanija", address: "Zemunski Kej 8, Zemun" },
    { name: "Zelen", address: "Hadzi Milentijeva 13" },
   // { name: "Bahus Inn", address: "Bul. Nikole Tesle bb, Zemun" },
   // { name: "Malo Korzo - Panonija", address: "Zrenjaninski put 158a, Borča" },
   // { name: "Trio Gastro Pub", address: "Ćirila i Metodija 23a, Stara Pazova" },
  ];

  const beogradHotels = [
    { name: "HILTON", address: "Kralja Milana 35" },
    { name: "CROWN PLAZA", address: "Vladimira Popovica 10" },
   // { name: "SQUARE NINE", address: "Studentski trg 9" },
   // { name: "SAINT TEN HOTEL", address: "Svetog Save 10" },
  ];

  const noviSadWine = [
   // { name: "UNIVEREXPORT - UNIVER ORGANA", address: "Nikole Pasiće 25", phone: "021/525-132" },
   { name: "VINA VOJVODINE", address: "Mite Ruzica 2",  },
   { name: "VINO I DELIKATESE", address: "Dunavska 4",  },
    { name: "UNIVEREXPORT - PROMENADA", address: "Bulevar oslobođenja 119, suteren", phone: "021/215-6371" },
   //{ name: "NANA - VINO, RAKIJA SHOP BAR", address: "Dunavska 17", phone: "069/2761425" },
   // { name: "KORPA DELI MARKET", address: "Veselina Maslašea 2", phone: "021/2102523 mob: 064/647-6370" },
    { name: "ZDRAVOLOGIJA", address: "Bul. Kralja Petra 7", phone: "021/6320504 mob: 064/643-4599" },
    { name: "KRIVINA", address: "Sremska 9", phone: "061/2323866" },
    { name: "TEPLICA - EKOLOŠKA PRODAVNICA", address: "Petra Drapsina 18, suteren", phone: "062/935-7911" },
    { name: "SLATINA", address: "Veselina Maslašea 32", phone: "063/724-2784" },
   // { name: "VINO I VANILI WINE SHOP BAR", address: "Žitni trg 20", phone: "065/543-2200" },
  ];

  const noviSadRestaurants = [
    { name: "POSH ORGANIC", address: "Svetozara Miletica 11" },
    { name: "PARK NOVI RESTORAN", address: "Rodoljuba Colakovica " },
    { name: "Tako je suđeno", address: "Ribnjak - Gornji Put 15" },
    { name: "Garden I", address: "Vase Stajića 27" },
    { name: "PIVNICA TATA BRADA", address: "Mite Ruzica 4" },
    { name: "TD ROCK CAFEE", address: "Zmaj Jovina, pasaz Lupusa" },
    { name: "I Beer Concept Bar", address: "Danila Kiša 12" },
    { name: "Caffe Sedmica i Picerija Sedmica", address: "Bul. Kralja Petra 7", phone: "064/1082585" },
    
   // { name: "BEERAJ", address: "Trg Republike 18/L5", phone: "063/761-5877" },
   // { name: "Udruženje Klub Ljubitelja Pasti", address: "Maksima Gorkog 17" },
  ];

  const vojvodina = [
    { name: "DVE KULE RESORT", address: "Bacinci" },
    { name: "KOTA 111 Country club&resort", address: "Potez Handor Silbas" },
    { name: "ETNO RESTORAN TRECA RAMPA", address: "Čurug" },
   // { name: "Premier Aqua Hotel", address: "Martina Klisaca 16, Vrdnik" },
    { name: "Etno kompleks Vrdnicka Kula", address: "Potez pod kulom bb, Vrdnik" },
    { name: "Hotel Fruske Terme", address: "Potez pod kulom bb, Vrdnik" },
    //{ name: "Hotel Elite Palic", address: "Park Heroja 15, Palic" },
    { name: "Salas Idila", address: "Obrovacki put, Backa Palanka" },
   // { name: "Stara Kuca", address: "Ive Lole Ribara 84, Backa Palanka" },
  ];

  return (
    <div id="shop" style={{ paddingTop: 150 }}>
      <div className="shop-container">
        <div className="section-title">
          <h2>Poručite online</h2>
        </div>

        <div className="shop-online-grid">
          <Link to="https://www.enotekapremier.rs/sr/catalogsearch/result/?q=mcc&cat=" target="_blank" rel="noopener noreferrer">
            <div className="wsk-cp-productShop">
              <div className="wsk-cp-img">
                <img src="img/shop/enotekaLogo.jpg" alt="Enoteka" className="img-responsive" />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product"><h3>Enoteka</h3></div>
                <div className="description-prodShop"><p>Vina će biti isporučena u roku od 48h.</p></div>
              </div>
            </div>
          </Link>

          <Link to="https://www.prodavnica.vino.rs/catalogsearch/result/?q=MCC" target="_blank" rel="noopener noreferrer">
            <div className="wsk-cp-productShop">
              <div className="wsk-cp-img">
                <img src="img/shop/vinoLogo.png" alt="Vino.rs" className="img-responsive" />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product"><h3>Vino.rs</h3></div>
                <div className="description-prodShop"><p>Vina će biti isporučena u roku od 48h.</p></div>
              </div>
            </div>
          </Link>

          <a href="https://mccvino.com/" target="_blank" rel="noopener noreferrer">
            <div className="wsk-cp-productShop">
              <div className="wsk-cp-img">
                <img src="img/logo.png" alt="MCC Vino" className="img-responsive" />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product"><h3>MCC Vino</h3></div>
                <div className="description-prodShop"><p>Poručivanje direktno sa našeg sajta.</p></div>
              </div>
            </div>
          </a>

          <Link to="https://vinoteka021.rs/?s=MCC&jet_ajax_search_settings=%7B%22results_order_by%22%3A%22relevance%22%2C%22results_order%22%3A%22asc%22%2C%22sentence%22%3A%22yes%22%2C%22search_in_taxonomy%22%3A%22yes%22%2C%22search_in_taxonomy_source%22%3A%5B%22product_cat%22%2C%22pa_proizvodac%22%2C%22pa_region-rejon-vinogorje%22%2C%22pa_sorta%22%2C%22pa_vrsta%22%5D%2C%22search_source%22%3A%22any%22%7D" target="_blank" rel="noopener noreferrer">
            <div className="wsk-cp-productShop">
              <div className="wsk-cp-img">
                <img src="img/shop/Vinarija021Logo.PNG" alt="Vinoteka 021" className="img-responsive" />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product"><h3>Vinoteka 021</h3></div>
                <div className="description-prodShop"><p>Vina će biti isporučena u roku od 48h.</p></div>
              </div>
            </div>
          </Link>

          <Link to="https://prirodnovino.rs/sr/mcc-merlot-malbec/proizvod/27" target="_blank" rel="noopener noreferrer">
            <div className="wsk-cp-productShop">
              <div className="wsk-cp-img">
                <img src="img/velika vina/merlot.png" alt="Prirodno vino" className="img-responsive" />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product"><h3>Prirodno vino</h3></div>
                <div className="description-prodShop"><p>McC Merlot Malbec - Vino će biti isporučeno u roku od 48h.</p></div>
              </div>
            </div>
          </Link>
        </div>

        <div className="section-title">
          <h2>Prodajna mesta</h2>
        </div>

        <div className="shop-locations-wrapper">
          <div className="shop-location-section">
            <h2>Beograd</h2>
            <h3 className="subcategory-title">Vinoteke</h3>
            {beogradWine.map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
                {location.address2 && <p>{location.address2}</p>}
                {location.phone && <p>Tel: {location.phone}</p>}
                {location.website && <p>{location.website}</p>}
                {location.info && <p>{location.info}</p>}
              </div>
            ))}
            <h3 className="subcategory-title">Restorani</h3>
            {beogradRestaurants.map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
                {location.phone && <p>Tel: {location.phone}</p>}
              </div>
            ))}
            <h3 className="subcategory-title">Hoteli</h3>
            {beogradHotels.map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
              </div>
            ))}
          </div>

          <div className="shop-location-section">
            <h2>Novi Sad</h2>
            <h3 className="subcategory-title">Vinoteke</h3>
            {noviSadWine.map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
                {location.phone && <p>Tel: {location.phone}</p>}
              </div>
            ))}
            <h3 className="subcategory-title">Restorani</h3>
            {noviSadRestaurants.map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
                {location.phone && <p>Tel: {location.phone}</p>}
              </div>
            ))}
            <h2>Vojvodina</h2>
            {vojvodina.map((location, index) => (
              <div key={index} className="location-card">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
                {location.phone && <p>Tel: {location.phone}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
             