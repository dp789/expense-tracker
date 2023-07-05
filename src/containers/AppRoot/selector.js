import { createSelector } from "reselect";
import { initialState } from "./reducer";
import get from "lodash/get";

export const selectAppContainer = (state) => state.appContainer || initialState;

export const selectCurrentRoute = () =>
  createSelector(selectAppContainer, (substate) =>
    get(substate, "currentRoute")
  );
