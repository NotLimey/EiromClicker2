import { createStore } from "redux";
import { ActionTypes } from "./actions";

export const cookieReducer = function (state = 0, action : ActionTypes) {
    switch (action.type) {
      case "INCREMENT_COOKIE":
        return state + 1;
      case "DECREMENT_COOKIE":
        return state - 1;
      default:
        return state;
    }
};

const store = createStore(cookieReducer);

export default store;