import { createSelector } from "reselect";
import get from "lodash/get";
import { initialState } from "./reducer";

export const homeContainerDomain = (state) =>
  state.expenseSummary || initialState;

export const selectTransactionsList = () =>
  createSelector(homeContainerDomain, (substate) =>
    get(substate, "transactionList")
  );

export const selectIncome = () =>
  createSelector(homeContainerDomain, (substate) => get(substate, "expenses"));
