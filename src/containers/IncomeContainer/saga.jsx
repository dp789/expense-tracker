/* eslint-disable react-refresh/only-export-components */
import { takeLatest, call, put } from "redux-saga/effects";
import { Alert } from "@mui/material";
import { incomeContainerTypes } from "./reducer";
import { homeContainerCreators } from "../HomeContainer/reducer";
import { editIncomeApi } from "../../services/coreApis";
import { translate } from "../../components/IntlGlobalProvider/index";

const { REQUEST_ADD_INCOME } = incomeContainerTypes;
const { successAddedIncome } = homeContainerCreators;

export function* requestAddIncome(action) {
  const { income } = action.payload;
  try {
    yield call(editIncomeApi, income);
    yield put(successAddedIncome(income));
  } catch (error) {
    return (
      <Alert variant="filled" severity="error">
        {translate("income_error")}
      </Alert>
    );
  }
}

export default function* IncomeContainerSaga() {
  yield takeLatest(REQUEST_ADD_INCOME, requestAddIncome);
}
