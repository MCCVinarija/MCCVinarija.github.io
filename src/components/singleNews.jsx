import React from "react";
import jsonData from "../data/dataNews.json";
import { Link, useParams } from "react-router-dom"; // Import useParams
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const SingleNews = () => {
  const { id } = useParams(); // Using useParams to access URL parameters

  // Find the news item with the matching id
  const newsItem = jsonData.find((item) => item.id === id);

  // Check if newsItem exists and render its details
  if (!newsItem) {
    return <div>News not found!</div>;
  }

  return (
    
    <div style={{marginTop:100}}>
      <div class="container my-5">
        <div class="row">
        <Link to={'/news'}> <FontAwesomeIcon icon={faChevronLeft}/>Nazad na novosti</Link>
          <h1
            class="display-4"
            style={{ textAlign: "center", fontWeight: 500, borderBottom: 2 }}
          >
            {newsItem.naziv}
          </h1>
          <h4 style={{ textAlign: "right" }}>{newsItem.datum4}</h4>
          <p class="lead" style={{ fontSize: 22 }}>
            {newsItem.opis1}.{" "}
          </p>
          {newsItem.opis2 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis2}.{" "}
            </p>
          )}
          {newsItem.opis3 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis3}.{" "}
            </p>
          )}
          {newsItem.opis4 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis4}.{" "}
            </p>
          )}
          {newsItem.opis5 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis5}.{" "}
            </p>
          )}
          {newsItem.opis6 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis6}.{" "}
            </p>
          )}
          {newsItem.opis7 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis7}.{" "}
            </p>
          )}
          {newsItem.opis8 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis8}.{" "}
            </p>
          )}
          {newsItem.opis9 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis9}.{" "}
            </p>
          )}
          {newsItem.opis10 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis10}.{" "}
            </p>
          )}
          {newsItem.opis11 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis11}.{" "}
            </p>
          )}
          {newsItem.opis12 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis12}.{" "}
            </p>
          )}
          {newsItem.opis13 && ( // Condition to check if opis2 exists
            <p class="lead" style={{ fontSize: 22 }}>
              {newsItem.opis13}.{" "}
            </p>
          )}
          
        </div>

        
          {newsItem.slike && newsItem.slike.length > 0 && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div class='row'>  
              {newsItem.slike.map((image, index) => (        
                     
                <img
                  key={index}
                  class="w-100 shadow"
                  style={{ borderRadius: 10 }}
                  src={image}
                  alt={`Image ${index + 1}`}
                />

              ))}
              </div>
            </div>
          )}
       

      </div>
    </div>
  );
};

export default SingleNews;
