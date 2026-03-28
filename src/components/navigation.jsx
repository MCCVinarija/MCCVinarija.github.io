import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
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
          <Link to="/" style={{ outline: 'none' }}>
            <img src="img/logo2.png" alt="Logo" style={{ height: '48px' }}></img>
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/vines">
                Vina
              </Link>
            </li>
            <li>
              <Link to="/about">
                O nama
              </Link>
            </li>
            <li>
              <Link to="/news">
                Novosti
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                Galerija
              </Link>
            </li>
            <li>
              <Link to="/shop">
                Shop
              </Link>
            </li>
           
            <li>
              <a href="/#contact" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 12px' }}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
