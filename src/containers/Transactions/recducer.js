/*
 *
 * Transactions reducer
 *
 */

import produce from "immer";
import { createActions } from "reduxsauce";

export const initialState = {
  success: null,
  error: null,
  summary: {
    income: 0,
    expenses: 0,
    categories: [],
  },
  transactionList: [],
};

export const { Types: TransactionsTypes, Creators: TransactionsCreators } =
  createActions({
    requestDeleteTransaction: ["payload"],
    requestAddExpenses: ["payload"],
    requestGetTransactions: ["data"],
    successAddedExpenses: ["expenses"],
    successTransaction: ["data"],
  });

export const transactionReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TransactionsTypes.REQUEST_DELETE_TRANSACTION:
        draft.success = true;
        break;
      case TransactionsTypes.REQUEST_ADD_EXPENSES:
        draft.success = true;
        break;

      case TransactionsTypes.SUCCESS_ADDED_EXPENSES:
        draft.summary.expenses = action.expenses;
        break;
      case TransactionsTypes.REQUEST_GET_TRANSACTIONS:
        draft.success = true;
        break;
      case TransactionsTypes.SUCCESS_TRANSACTION:
        draft.transactionList = action.data;
        break;
    }
  });

export default transactionReducer;
