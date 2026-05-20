import React, { useContext, useState, useRef } from "react";
import "../css/about.css";
import { LanguageContext } from "../LanguageContext";

export const AboutCmp = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};
  const [expanded, setExpanded] = useState({});
  const toggle = (id) => setExpanded((s) => ({ ...s, [id]: !s[id] }));
  const readMoreLabel = language === 'sr' ? 'Prikaži više' : 'Read more';
  const readLessLabel = language === 'sr' ? 'Prikaži manje' : 'Read less';
  const [highlighted, setHighlighted] = useState(null);

  const collapsibleCards = new Set(['Vinarija', 'Organski', 'organic']);
  const shouldShowReadMore = (id) => collapsibleCards.has(id);
  const getTextClass = (id) =>
    `about-card-text ${shouldShowReadMore(id) ? (expanded[id] ? 'expanded' : 'collapsed') : 'expanded'}`;
  const hoverTimeouts = useRef({});

  const handleEnter = (id) => {
    // cancel pending clear
    if (hoverTimeouts.current[id]) {
      clearTimeout(hoverTimeouts.current[id]);
      hoverTimeouts.current[id] = null;
    }
    setHighlighted(id);
  };

  const handleLeave = (id) => {
    // small delay so quick moves between children don't flicker
    hoverTimeouts.current[id] = setTimeout(() => {
      if (highlighted === id) setHighlighted(null);
      hoverTimeouts.current[id] = null;
    }, 180);
  };

  const aboutText = {
    sr: {
      aboutTitle: 'O nama',
      aboutText: `Uzgajanje vinove loze u oblasti Fruške gore u Srbiji beleži se još u 296. godine pre nove ere, dok je
moderno vinogradarstvo u taj kraj doneo rimski imperator Probus. Ovaj vinograd predstavlja projekat
oživljavanja bogatstva regiona, kao i priliku da se isprobaju proizvodi njegovih plodova.
Biodinimački pristup proizvodnji vina omogućava holističku i metodologiju Starog sveta koje nalažu
da se radi u skladu sa prirodom, a ne protiv nje. Za pospešivanje ukusa, kvaliteta i posebnosti vina,
ne koriste se nikakva veštačka djubriva ili hemikalije, ni na t!lu ni na voću.
McC McCulloch Vina su inovativni spoj partnerstva izmedju dvoje supružnika, Engleza Don
McCulloch-a i! Seke Nikolić, srpskog porekla. Don, svojim francuskim i škotskim nasledjem i svojim
širokim znanjem, stečenim radom sa uzgajivačima vina širom sveta, osmislio je ovu niskotiražnu
proizvodnju vina.`,
      wineryTitle: 'O vinariji',
      wineryText: `McC Vinarija je izgrađena 2017.godine u Erdeviku, na Fruškoj Gori i proizvodi organska
i biodinamička vina. Prilikom tretiranja zemlje ne koristimo nikakve hemikalije, pesticide,
hebricide, veštačka đubriva i druge modifikovane organizme koji trajno mogu uništiti
prirodni ekosistem.

Posedujemo 3ha zemlje, naše sorte su: -crvene: Merlo, Malbek, Kaberne Fran,
Kaberne Sovinjon i Pino Noar, bele: Traminac, Rajnski Rizling I Sovinjon Blan.
Vlasnik vinarije je Don McCulloch , Škot koji je zajedno sa suprugom Sekom Nikolić
2008. godine kupio vinograd u Erdeviku, 2011.godine proizvedena je prva berba koja
već osvaja bronzu na Decanteru. Zajedno su počeli da šire svest i znanje o drugačijem i
kvalitetnijem pristupu uzgoja grožđa.
Locirani smo na obroncima Fruške Gore ,na vinskom putu, tj ruti Ilok-Erdevik, koji
značajno doprinosi razvoju vinskog turizma na Fruškoj Gori, na području gde je rimski
car Probus još 296.godine p.n.e. doneo moderno vinogradarstvo u ovaj kraj.
Vinarija McC ima površinu 221,17m2 . Godišnje proizvede prosečno 15.000 boca.
Crvena vina se čuvaju minimum 18 meseci u srpskom hrastovom buretu a u bocama
leže još minimum 10 meseci.
Sama izgradnje naše vinarije predstavlja izuzetno lep turistički objekat gde turisti i
posetioci mogu da uživaju u pogledu, ukusima najkvalitetnijih vina i gde mogu da nauče
mnogo o našoj bogatoj istoriji. Sastoji se od proizvodnog pogona, barik sale gde
posetioci mogu da degustiraju vina, sale na gornjem spratu gde prijatelji i posetioci
mogu da uzivaju uz vino i najbolje meze prelepog Srema uz prijatan ambijent.

Od 2011.godine koristimo organski i biodinamički pristup tretiranja zemljišta i vinograda,
ali tek nakon izgrađene vinarije podneli smo zahtev i dobili ORGANSKI SERTIFIKAT
REPUBLIKE SRBIJE za organsku proizvodnju i preradu,kao i za izvoz, u novembru
2020.godine od strane akreditovanog sertifikacionog tela "EKOCERT BALKAN"doo iz
Zemuna,ovlašćenog od strane Ministarstva poljoprivrede,šumarstva i vodoprivrede.
2023/2024 dobijamo sertifikat za biodinamičku preradu vina za berbu 2022. od strane
kompanije "Demeter" -Biodynamic Federation Demeter International.

Sve sorte su odnegovane uz pomoć biodinamičkog pristupa proizvodnji vina i
tradicionalnih poljoprivrednih metoda. Bez upotrebe veštačkih djubriva ili hemikalija,
dobija se ukus, kvalitet i individualnost uz minimalnu intervenciju u vinariji.`,
      companyTitle: 'O kompaniji',
      companyText:
        'McC McCulloch Vina su inovativni spoj partnerstva između dvoje supružnika, Engleza Don McCulloch-a i Seke Nikolić, srpskog porekla. Don, svojim francuskim i škotskim nasleđem i svojim širokim znanjem stečenim radom sa uzgajivačima vina širom sveta, osmislio je ovu jedinstvenu proizvodnju vina.',
      organicTitle: 'Organski i biodinamički pristup',
      organicText:
        'Od 2011. godine koristimo organski i biodinamički pristup tretiranju zemljišta i vinograda, ali tek nakon izgrađene vinarije podneli smo zahtev i dobili ORGANSKI I BIODINAMIČKI SERTIFIKAT REPUBLIKE SRBIJE za organsku proizvodnju i preradu, kao i za izvoz, u novembru 2020. godine od strane akreditovanog sertifikacionog tela "EKOCERT BALKAN" d.o.o. iz Zemuna, ovlašćenog od strane Ministarstva poljoprivrede, šumarstva i vodoprivrede. Od 2022. godine dobijamo prvi biodinamički sertifikat od strane Biodynamic Federation - Demeter International. Sertifikacija je rađena po organskim regulativama R. Srbije i EU. Organsko vinogradarstvo i vinarstvo bazirano je na organskim principima gajenja grožđa i proizvodnje vina, ali pre svega predstavlja stanje svesti da je suština povratak prirodi i zemlji i ideja prirodnog gajenja grožđa i proizvodnje vina. To podrazumeva odsustvo bilo kakvih pesticida, herbicida, veštačkih đubriva i drugih mikroorganizama koji mogu trajno da unište prirodni ekosistem. Dodavanjem energije i poštovanjem zemlje, naše grožđe je pažljivo odnegovano, uz primenu modernih metoda u proizvodnji vina. Hranimo zemlju radije nego biljku i na taj način gradimo imunitet vinove loze. Na nasem vinogradu sprovedena su sva nacela bidinamike, ukljucujuci djubrenje iz kravljih rogova. Smatramo da je ono sto objedinjuje sve bidinamicke vinare holisticki pristup vinogradu kao slozenom organizmu koji ce biti zdrav samo ako je u potpunom skladu sa prirodom.',
      organicDownloadText: 'Preuzmi sertifikate:',
      tastingTitle: 'Degustacija i posete',
      tastingText:
        'Posetite našu vinariju sa grupom od dve do 10 osoba i otkrijte čaroliju vina. Vaša poseta počinje u našim vinogradima, gde ćete saznati više o sortama koje uzgajamo i načinu na koji negujemo naše vinograde. Nakon toga, čeka vas ukusna meza koja će upotpuniti vaše vinsko iskustvo dok uživate u prelepom pogledu na vinograde i Frušku Goru koja se uzdiže u daljini. Naši stručnjaci će vas provesti kroz svako vino, objasniti njegove karakteristike i pomoći vam da pronađete svoje favorite. Degustacija traje maksimalno 2 sata. Da bismo osigurali vaše neometano uživanje, molimo vas da posetu najavite dan ranije, a za vikend posete preporučujemo da to učinite dva dana unapred. Za više informacija i rezervaciju pozovite nas na telefon: +381 63 653 202 ili posetite ',
      tastingLink: 'ovaj link',
      harvestTitle: 'Prva berba',
      harvestText:
        'Naš prvi proizvod "KUPAŽA 2011" napravljen mešanjem dvostrukog zajedničkog vrenja sorti Merlot i Malbec, kao i sorti Cabernet Franc i Cabernet Sauvignon. Odležao 12 meseci u barik buradima od srpskog hrasta i potom flaširan da odstoji još 14 meseci. Vino je osvojilo bronzu na Decanteru 2014. godine u Londonu.',
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
      organicDownloadText: 'Download certificates:',
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
          <div
            className={`about-card ${highlighted === 'Vinarija' ? 'highlight' : ''}`}
            id="Vinarija"
            onMouseEnter={() => handleEnter('Vinarija')}
            onMouseLeave={() => handleLeave('Vinarija')}
          >
            <img
              className="about-card-image"
              src="img/Vesti/Seka1.jpg"
              alt={aboutText[language].aboutTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].aboutTitle}</h2>
              <p className={getTextClass('Vinarija')}>
                {aboutText[language].aboutText}
              </p>
              {shouldShowReadMore('Vinarija') && (
                <button className="read-more-inline" onClick={() => toggle('Vinarija')}>
                  {expanded['Vinarija'] ? readLessLabel : readMoreLabel}
                </button>
              )}
            </div>
          </div>

          {/* O vinariji */}
          <div
            className={`about-card ${highlighted === 'Organski' ? 'highlight' : ''}`}
            id="Organski"
            onMouseEnter={() => handleEnter('Organski')}
            onMouseLeave={() => handleLeave('Organski')}
          >
            <video
              className="about-card-video"
              controls
            >
              <source src="img/Galerija/Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].wineryTitle}</h2>
              <p className={getTextClass('Organski')}>
                {aboutText[language].wineryText}
              </p>
              {shouldShowReadMore('Organski') && (
                <button className="read-more-inline" onClick={() => toggle('Organski')}>
                  {expanded['Organski'] ? readLessLabel : readMoreLabel}
                </button>
              )}
            </div>
          </div>

          {/* O kompaniji */}
          <div
            className={`about-card ${highlighted === 'Turizam' ? 'highlight' : ''}`}
            id="Turizam"
            onMouseEnter={() => handleEnter('Turizam')}
            onMouseLeave={() => handleLeave('Turizam')}
          >
            <img
              className="about-card-image"
              src="img/Galerija/31.jpg"
              alt={aboutText[language].companyTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].companyTitle}</h2>
              <p className={getTextClass('Turizam')}>
                {aboutText[language].companyText}
              </p>
            </div>
          </div>

          {/* Organski i biodinamički */}
          <div
            className={`about-card ${highlighted === 'organic' ? 'highlight' : ''}`}
            id="organic"
            onMouseEnter={() => handleEnter('organic')}
            onMouseLeave={() => handleLeave('organic')}
          >
            <img
              className="about-card-image"
              src="img/Galerija/organic.jpg"
              alt={aboutText[language].organicTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].organicTitle}</h2>
              <p className={getTextClass('organic')}>
                {aboutText[language].organicText}
              </p>
              {shouldShowReadMore('organic') && (
                <>
                  {expanded['organic'] && (
                    <div className="about-card-certificates">
                      <img
                        className="about-card-certificates-image"
                        src="/img/sertifikati.png"
                        alt="Sertifikati"
                      />
                      <p className="about-card-downloads">
                        {aboutText[language].organicDownloadText}{' '}
                        <a href="/pdfs/sertifikat 2025 rs.pdf" download>
                          RS
                        </a>,{' '}
                        <a href="/pdfs/sertifikat 2025 eu.pdf" download>
                          EU
                        </a>,{' '}
                        <a href="/pdfs/Demeter certificate_MCC McCulloch Wines d.o.o._20251118_EN-GB.pdf" download>
                          Demeter
                        </a>
                      </p>
                    </div>
                  )}
                  <button className="read-more-inline" onClick={() => toggle('organic')}>
                    {expanded['organic'] ? readLessLabel : readMoreLabel}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Degustacija i posete */}
          <div
            className={`about-card ${highlighted === 'Posete' ? 'highlight' : ''}`}
            id="Posete"
            onMouseEnter={() => handleEnter('Posete')}
            onMouseLeave={() => handleLeave('Posete')}
          >
            <img
              className="about-card-image"
              src="img/Galerija/46.jpg"
              alt={aboutText[language].tastingTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].tastingTitle}</h2>
              <p className={getTextClass('Posete')}>
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
            className={`about-card ${highlighted === 'harvest' ? 'highlight' : ''}`}
            id="harvest"
            onMouseEnter={() => handleEnter('harvest')}
            onMouseLeave={() => handleLeave('harvest')}
          >
            <img
              className="about-card-image"
              src="img/Galerija/Berba1.jpg"
              alt={aboutText[language].harvestTitle}
            />
            <div className="about-card-content">
              <h2 className="about-card-title">{aboutText[language].harvestTitle}</h2>
              <p className={getTextClass('harvest')}>
                {aboutText[language].harvestText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCmp;