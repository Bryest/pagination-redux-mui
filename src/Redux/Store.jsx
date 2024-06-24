import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CompanyReducer } from "./Reducer";

import logger from "redux-logger";

const rootReducer = combineReducers({ company: CompanyReducer });
const compstore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default compstore;
