import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import "../css/news.css";
import { LanguageContext } from "../LanguageContext";

// Assuming your JSON data is in a file named data.json
import jsonData from "../data/dataNews.json";

export const News = (props) => {
  const { language = 'sr' } = useContext(LanguageContext) || {};
  const newsText = {
    sr: {
      readMore: 'Pročitaj više',
    },
    en: {
      readMore: 'Read more',
    },
  };
  const currentLanguage = newsText[language] ? language : 'sr';

  const getTranslatedField = (item, field) => item[`${field}_${currentLanguage}`] || item[field] || "";

  return (
    <div className="bodyNews">
      <ul className="cards">
        {jsonData.map((item, index) => (
          <li className="cards__item" key={item.id || index}>
            <div className="card">
              <div className="card__image-container">
                {/* Displaying only the first image */}
                {item.slike && item.slike.length > 0 && (
                  <img
                    src={item.slike[0]}
                    className="card__img"
                    alt={getTranslatedField(item, 'naziv')}
                  />
                )}
              </div>
              <div className="card__content">
                <div className="card__title">{getTranslatedField(item, 'naziv')}</div>
                <p className="card__text">{getTranslatedField(item, 'maliOpis')}</p>
                <Link to={`/news/${item.id}`} className="btn btn--block card__btn">{newsText[currentLanguage].readMore}</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
