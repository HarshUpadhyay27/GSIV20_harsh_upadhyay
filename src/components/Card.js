import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`}>
        <div className="card-img">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt="..."
          />
        </div>
        <div className="card-text">
          <div>
            <h1>{item.title}</h1>
            <p>({item.vote_average}<i className="fas fa-star" style={{color:"orange"}} ></i>)</p>
          </div>
          <p>{item.overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
