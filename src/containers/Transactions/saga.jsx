/* eslint-disable react-refresh/only-export-components */
import { takeLatest, call, put } from "redux-saga/effects";
import { Alert } from "@mui/material";
import { TransactionsTypes, TransactionsCreators } from "./recducer";
import {
  deleteTransactionApi,
  addTransactionApi,
  getTransactionsApi,
} from "../../services/coreApis";
import { translate } from "../../components/IntlGlobalProvider";

const {
  REQUEST_DELETE_TRANSACTION,
  REQUEST_ADD_EXPENSES,
  REQUEST_GET_TRANSACTIONS,
} = TransactionsTypes;
const { successAddedExpenses, successTransaction } = TransactionsCreators;

function* requestDeleteTransaction(action) {
  const { id } = action.payload;
  try {
    yield call(deleteTransactionApi, id);
  } catch (error) {
    return (
      <Alert variant="filled" severity="error">
        {translate("income_error")}
      </Alert>
    );
  }
}

export function* requestAddExpenses(action) {
  try {
    yield call(addTransactionApi, action.payload);
    yield put(successAddedExpenses(action.payload.amount));
  } catch (error) {
    return (
      <Alert variant="filled" severity="error">
        {translate("expenses_error")}
      </Alert>
    );
  }
}
export function* requestTransactions() {
  try {
    const result = yield call(getTransactionsApi);
    yield put(successTransaction(result?.transactions));
  } catch (error) {
    return (
      <Alert variant="filled" severity="error">
        {translate("expenses_error")}
      </Alert>
    );
  }
}
export default function* transactionSaga() {
  yield takeLatest(REQUEST_DELETE_TRANSACTION, requestDeleteTransaction);
  yield takeLatest(REQUEST_ADD_EXPENSES, requestAddExpenses);
  yield takeLatest(REQUEST_GET_TRANSACTIONS, requestTransactions);
}
