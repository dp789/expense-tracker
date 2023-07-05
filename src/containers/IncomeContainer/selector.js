import { createSelector } from "reselect";
import get from "lodash/get";
import { initialState } from "../HomeContainer/reducer";

export const homeContainerDomain = (state) =>
  state.expenseSummary || initialState;

export const selectExpenseSummary = () =>
  createSelector(homeContainerDomain, (substate) => get(substate, "summary"));
