import { rootReducer } from "./Root-reducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
  //middleware: [logger],
}); //,applyMiddleware(logger));
