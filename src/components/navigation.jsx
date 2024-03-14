import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
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
          <a className="page-scroll" href="/">
            <img src="img\logo2.png" alt="Logo"  style={{ width: '50%'}}></img>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/vines">
                Vina
              </a>
            </li>
            <li>
              <a href="/about" >
                O nama
              </a>
            </li>
            <li>
              <a href="/news">
                Novosti
              </a>
            </li>
            <li>
              <a href="/gallery">
                Galerija
              </a>
            </li>
            <li>
              <a href="/shop">
                Shop
              </a>
            </li>
           
            <li>
              <a href="/#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
