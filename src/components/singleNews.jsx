import React from "react";
import jsonData from "../data/dataNews.json";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/singleNews.css";

const SingleNews = () => {
  const { id } = useParams();

  const newsItem = jsonData.find((item) => item.id === id);

  if (!newsItem) {
    return <div className="single-news-container">News not found!</div>;
  }

  // Collect all description fields
  const descriptions = [
    newsItem.opis1,
    newsItem.opis2,
    newsItem.opis3,
    newsItem.opis4,
    newsItem.opis5,
    newsItem.opis6,
    newsItem.opis7,
    newsItem.opis8,
    newsItem.opis9,
    newsItem.opis10,
    newsItem.opis11,
    newsItem.opis12,
    newsItem.opis13
  ].filter(Boolean);

  return (
    <div className="single-news-container">
      <Link to="/news" className="single-news-back-link">
        <FontAwesomeIcon icon={faChevronLeft} />
        Nazad na novosti
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
