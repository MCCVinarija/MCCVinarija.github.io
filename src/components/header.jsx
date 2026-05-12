import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export const Header = (props) => {
  return (
      <div>
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
};

export const Header2 = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};
  
  return (
      <div>
        <header id="header">
          <div className="intro2">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
};

export const Header3 = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};
  const bgImage = language === 'en' ? '/img/intro-bg3-eng.png' : '/img/intro-bg3.jpg';
  const intro3Style = {
    display: 'table',
    height: '100%',
    width: '100%',
    padding: '100px',
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#eee',
    backgroundSize: 'cover',
  };
  
  return (
      <div>
        <header id="header">
          <div style={intro3Style}>
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
};

export const Header4 = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};
  const bgImage = language === 'en' ? '/img/intro-bg4-eng.png' : '/img/intro-bg4.jpg';
  const intro4Style = {
    display: 'table',
    height: '100%',
    width: '100%',
    padding: '100px',
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#eee',
    backgroundSize: 'cover',
  };
  
  return (
      <div>
        <header id="header">
          <div style={intro4Style}>
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
};