/*
 *
 * IncomeContainer reducer
 *
 */

import produce from "immer";
import { createActions } from "reduxsauce";

export const initialState = {
  success: null,
  error: null,
};

export const {
  Types: incomeContainerTypes,
  Creators: incomeContainerCreators,
} = createActions({
  requestAddIncome: ["payload"],
});

/* eslint-disable default-case, no-param-reassign */
export const incomeContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case incomeContainerTypes.REQUEST_ADD_INCOME:
        draft.success = true;
        break;
    }
  });

export default incomeContainerReducer;
