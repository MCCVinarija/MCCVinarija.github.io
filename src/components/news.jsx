import React from "react";
import { Link } from 'react-router-dom';
import "../css/news.css";

// Assuming your JSON data is in a file named data.json
import jsonData from "../data/dataNews.json";

export const News = (props) => {
  return (
    <body className="bodyNews">
      <ul className="cards">
        {jsonData.map((item, index) => (
          <li className="cards__item" key={index}>
            <div className="card">
              <div className="card__image-container">
                {/* Displaying only the first image */}
                {item.slike.length > 0 && (
                  <img
                    src={item.slike[0]}
                    className="card__img"
                    alt="Image 1"
                  />
                )}
              </div>
              <div className="card__content">
                <div className="card__title">{item.naziv}</div>
                <p className="card__text">{item.maliOpis}</p>
                <Link to={`/news/${item.id}`} className="btn btn--block card__btn">Procitaj vise</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </body>
  );
};

export default News;
