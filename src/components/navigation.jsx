import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

export const Navigation = () => {
  const { language = "sr", toggleLanguage = () => {} } = useContext(LanguageContext) || {};
  const currentLanguage = language || "sr";
  const buttonLabel = currentLanguage === "sr" ? "ENG" : "SRB";

  const navText = {
    sr: {
      vines: "Vina",
      about: "O nama",
      news: "Novosti",
      gallery: "Galerija",
      shop: "Shop",
      contact: "Kontakt",
    },
    en: {
      vines: "Wines",
      about: "About",
      news: "News",
      gallery: "Gallery",
      shop: "Shop",
      contact: "Contact",
    },
  };

  const ukFlag = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12">
       <rect width="18" height="12" fill="#012169"/>
       <path d="M0 0L18 12M18 0L0 12" stroke="#fff" stroke-width="2"/>
       <path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" stroke-width="1"/>
       <path d="M9 0L9 12M0 6L18 6" stroke="#fff" stroke-width="3"/>
       <path d="M9 0L9 12M0 6L18 6" stroke="#C8102E" stroke-width="1.5"/>
     </svg>`
  )}`;

  const rsFlag = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12">
       <rect width="18" height="4" fill="#FF0000"/>
       <rect y="4" width="18" height="4" fill="#0C4076"/>
       <rect y="8" width="18" height="4" fill="#FFFFFF"/>
       <circle cx="4.5" cy="6" r="1.5" fill="#C8102E" opacity="0.45" />
     </svg>`
  )}`;

  const buttonFlagIcon = language === "sr" ? ukFlag : rsFlag;

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    padding: '15px 12px',
    outline: 'none',
    userSelect: 'none',
    cursor: 'pointer',
  };

  return (
    <nav 
      id="menu" 
      className="navbar navbar-default navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link
            to="/"
            style={{ outline: 'none', userSelect: 'none' }}
            onFocus={(event) => event.target.blur()}
            onMouseDown={(event) => event.preventDefault()}
          >
            <img src="img/logo2.png" alt="Logo" style={{ height: '48px' }} />
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/vines" style={navLinkStyle} onMouseDown={(event) => event.preventDefault()}>
                {navText[currentLanguage].vines}
              </Link>
            </li>
            <li>
              <Link to="/about" style={navLinkStyle} onMouseDown={(event) => event.preventDefault()}>
                {navText[currentLanguage].about}
              </Link>
            </li>
            <li>
              <Link to="/news" style={navLinkStyle} onMouseDown={(event) => event.preventDefault()}>
                {navText[currentLanguage].news}
              </Link>
            </li>
            <li>
              <Link to="/gallery" style={navLinkStyle} onMouseDown={(event) => event.preventDefault()}>
                {navText[currentLanguage].gallery}
              </Link>
            </li>
            <li>
              <Link to="/shop" style={navLinkStyle} onMouseDown={(event) => event.preventDefault()}>
                {navText[currentLanguage].shop}
              </Link>
            </li>
            <li>
              <a href="/#contact" style={navLinkStyle} onMouseDown={(event) => event.preventDefault()}>
                {navText[currentLanguage].contact}
              </a>
            </li>
            <li>
              <a
                href="#"
                role="button"
                onClick={(event) => {
                  event.preventDefault();
                  toggleLanguage();
                }}
                onMouseDown={(event) => event.preventDefault()}
                style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 12px', cursor: 'pointer', userSelect: 'none', outline: 'none' }}
              >
                <img
                  src={buttonFlagIcon}
                  alt={language === "sr" ? "English flag" : "Serbian flag"}
                  style={{ width: '18px', height: '12px', verticalAlign: 'middle', marginRight: '6px' }}
                />
                {buttonLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
