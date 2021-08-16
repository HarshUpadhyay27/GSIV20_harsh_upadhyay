import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthData } from "../redux/action/movieAction";
import Card from "./Card";
import Navbar from "./Navbar";

const Home = () => {
  let [data, setData] = useState();
  let [cloneData, setCloneData] = useState();
  let [search, setSearch] = useState("");
  let dispatch = useDispatch();
  let movieReducer = useSelector((state) => state.movieReducer);
  let { movie, loading } = movieReducer;
  useEffect(() => {
    dispatch(fecthData());
  }, [dispatch]);

  useEffect(() => {
    setData(movie);
    setCloneData(movie);
  }, [movie, data]);

  let searchandler = (searchInput) => {
    setSearch(searchInput);
  };

  useEffect(() => {
    setCloneData(
      search.trim()
        ? data.filter((val) =>
            val.original_title
              .toLowerCase()
              .includes(search.trim().toLowerCase())
          )
        : data
    );
  }, [search, data]);

  //infinite scrolling
  const [page, setPage] = useState(1);
  window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  });

  return (
    <>
      <Navbar searchandler={searchandler} />
      <main>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="home">
            {cloneData &&
              cloneData
                .slice(0, page * 10)
                .map((item) => <Card key={item.id} item={item} />)}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
