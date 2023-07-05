/*
 *
 * HomeContainer reducer
 *
 */

import produce from "immer";
import { createActions } from "reduxsauce";

export const initialState = {
  summary: {
    income: 0,
    expenses: 0,
    categories: [],
  },
  expenses: 0,
  transactionList: [],
  data: null,
  error: null,
};

export const { Types: homeContainerTypes, Creators: homeContainerCreators } =
  createActions({
    requestAddExpenses: ["payload"],
    requestGetTransactions: ["data"],
    successAddedIncome: ["income"],
    successAddedExpenses: ["expenses"],
    successTransaction: ["data"],
    successGetExpenses: ["data"],
  });

/* eslint-disable default-case, no-param-reassign */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case homeContainerTypes.REQUEST_ADD_EXPENSES:
        draft.success = true;
        break;
      case homeContainerTypes.SUCCESS_ADDED_INCOME:
        draft.summary.income = action.income;
        break;
      case homeContainerTypes.SUCCESS_ADDED_EXPENSES:
        draft.summary.expenses = action.expenses;
        break;
      case homeContainerTypes.REQUEST_GET_TRANSACTIONS:
        draft.success = true;
        break;
      case homeContainerTypes.SUCCESS_GET_EXPENSES:
        draft.expenses = action.data;
        break;
      case homeContainerTypes.SUCCESS_TRANSACTION:
        draft.transactionList = action.data;
        break;
    }
  });

export default homeContainerReducer;
