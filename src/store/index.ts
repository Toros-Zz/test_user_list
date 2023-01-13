import { createStore, AnyAction } from "redux";

// Action types
const SET_LIST_DATA = "SET_LIST_DATA";

// Action creators
export const setListData = (payload: Person[]) => ({
  type: SET_LIST_DATA,
  payload,
});

// Selectors
export const getListData = (state: RootState) => state.listData;

// Initial state
export type RootState = {
  listData: Person[] | null;
};

const initialState: RootState = {
  listData: null,
};

// rootReducer
const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_LIST_DATA:
      return { ...state, listData: action.payload };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
