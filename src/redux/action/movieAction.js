import axios from "axios";
import {
  FETCH_DATA_FAILD,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCESS,
  FETCH_DETAIL_FAILD,
  FETCH_DETAIL_REQUEST,
  FETCH_DETAIL_SUCESS,
} from "./actionType";

export const fecthData = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
    );
    dispatch({
      type: FETCH_DATA_SUCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILD,
      payload: error.response && error.response.data.message,
    });
  }
};

export const singalData = (movieId) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DETAIL_REQUEST,
    });
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8"
    );
    const res = data.results.find((x) => x.id === movieId);
    dispatch({
      type: FETCH_DETAIL_SUCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DETAIL_FAILD,
      payload: error.response && error.response.data.message,
    });
  }
};
