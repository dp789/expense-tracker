/*
 *
 * App reducer
 *
 */
import produce from "immer";
import { createActions } from "reduxsauce";

export const initialState = {
  currentRoute: [],
};

export const { Types: appTypes, Creators: appCreators } = createActions({
  setCurrentRoute: ["route"],
});

/* eslint-disable default-case, no-param-reassign */
export const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case appTypes.SET_CURRENT_ROUTE:
        draft.currentRoute.push(action.route);
        break;
    }
  });

export default appReducer;
