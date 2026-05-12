import React, { useContext } from "react";
import jsonData from "../data/dataNews.json";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../LanguageContext";
import "../css/singleNews.css";

const SingleNews = () => {
  const { language = 'sr' } = useContext(LanguageContext) || {};
  const newsText = {
    sr: {
      back: 'Nazad na novosti',
      notFound: 'Vesti nisu pronađene!',
    },
    en: {
      back: 'Back to news',
      notFound: 'News not found!',
    },
  };
  const currentLanguage = language === 'en' ? 'en' : 'sr';
  const { id } = useParams();

  const getTranslatedField = (item, field) => item[`${field}_${currentLanguage}`] || item[field] || "";

  const newsItem = jsonData.find((item) => item.id === id);

  if (!newsItem) {
    return <div className="single-news-container">{newsText[currentLanguage].notFound}</div>;
  }

  // Collect all description fields
  const descriptions = [
    getTranslatedField(newsItem, 'opis1'),
    getTranslatedField(newsItem, 'opis2'),
    getTranslatedField(newsItem, 'opis3'),
    getTranslatedField(newsItem, 'opis4'),
    getTranslatedField(newsItem, 'opis5'),
    getTranslatedField(newsItem, 'opis6'),
    getTranslatedField(newsItem, 'opis7'),
    getTranslatedField(newsItem, 'opis8'),
    getTranslatedField(newsItem, 'opis9'),
    getTranslatedField(newsItem, 'opis10'),
    getTranslatedField(newsItem, 'opis11'),
    getTranslatedField(newsItem, 'opis12'),
    getTranslatedField(newsItem, 'opis13')
  ].filter(Boolean);

  return (
    <div className="single-news-container">
      <Link to="/news" className="single-news-back-link">
        <FontAwesomeIcon icon={faChevronLeft} />
        {newsText[language].back}
      </Link>

      <div className="single-news-header">
        <h1 className="single-news-title">{newsItem.naziv}</h1>
        <p className="single-news-date">{newsItem.datum4}</p>
      </div>

      <div className="single-news-content">
        {descriptions.map((description, index) => (
          <p key={index} className="single-news-text">
            {description}.
          </p>
        ))}

        {newsItem.slike && newsItem.slike.length > 0 && (
          <div className="single-news-gallery">
            {newsItem.slike.map((image, index) => (
              <div key={index} className="single-news-gallery-item">
                <img src={image} alt={`${newsItem.naziv} ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleNews;
