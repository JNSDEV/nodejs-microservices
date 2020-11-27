import { createStore } from "redux";
import userReducer from "./UserReducer";

const store = createStore(
  userReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
