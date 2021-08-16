import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singalData } from "../redux/action/movieAction";
import Navbar2 from "./Navbar2";
import Rating from "./Rating";

const Details = ({ match }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const detailReducer = useSelector((state) => state.detailReducer);
  const { loading, movieDetail } = detailReducer;
  console.log(movieDetail);
  useEffect(() => {
    dispatch(singalData(parseInt(productId)));
  }, [productId, dispatch]);
  return (
    <>
      <Navbar2 />
      <main>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="details">
            <div className="img-details">
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  movieDetail && movieDetail.poster_path
                }`}
                alt="..."
              />
            </div>
            <div className="detail-card">
              <div className="title">
                <h1>{movieDetail && movieDetail.title}</h1>
                <p>
                  <Rating value={movieDetail && movieDetail.vote_average} />
                </p>
              </div>
              <p>{movieDetail && movieDetail.release_date}</p>
              <p>Description: {movieDetail && movieDetail.overview}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Details;
