import {
  FETCH_DATA_FAILD,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCESS,
  FETCH_DETAIL_FAILD,
  FETCH_DETAIL_REQUEST,
  FETCH_DETAIL_SUCESS,
} from "../action/actionType";

export const movieReducer = (state = { movie: [] }, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        loading: true,
      };
    case FETCH_DATA_SUCESS:
      return {
        loading: false,
        movie: action.payload,
      };
    case FETCH_DATA_FAILD:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const detailReducer = (state = { movieDetail: [] }, action) => {
  switch (action.type) {
    case FETCH_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case FETCH_DETAIL_SUCESS:
      return {
        loading: false,
        movieDetail: action.payload,
      };
    case FETCH_DETAIL_FAILD:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
