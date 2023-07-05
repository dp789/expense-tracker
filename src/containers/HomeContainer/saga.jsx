/* eslint-disable react-refresh/only-export-components */
import { takeLatest, call, put } from "redux-saga/effects";
import { Alert } from "@mui/material";
import { homeContainerTypes, homeContainerCreators } from "./reducer";
import { addTransactionApi, getTransactionsApi } from "../../services/coreApis";
import { translate } from "../../components/IntlGlobalProvider";

const { REQUEST_ADD_EXPENSES, REQUEST_GET_TRANSACTIONS } = homeContainerTypes;
const { successAddedExpenses, successTransaction } = homeContainerCreators;

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

export default function* HomeContainerSaga() {
  yield takeLatest(REQUEST_ADD_EXPENSES, requestAddExpenses);
  yield takeLatest(REQUEST_GET_TRANSACTIONS, requestTransactions);
}
