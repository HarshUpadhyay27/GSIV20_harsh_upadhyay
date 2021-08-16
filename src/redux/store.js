import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { detailReducer, movieReducer } from "./reducer/movieReducer";

const middleware = [thunk];

const reducer = combineReducers({
  movieReducer: movieReducer,
  detailReducer: detailReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
