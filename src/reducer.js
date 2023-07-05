/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";
import languageProviderReducer from "./containers/LanguageProvider/reducer";
import homeContainerReducer from "./containers/HomeContainer/reducer";

export default function createRootReducer(injectedReducer = {}) {
  const rootReducer = combineReducers({
    ...injectedReducer,
    language: languageProviderReducer,
    expenseSummary: homeContainerReducer,
  });
  const applicationReducer = (state, action) => {
    return rootReducer(state, action);
  };

  return applicationReducer;
}
