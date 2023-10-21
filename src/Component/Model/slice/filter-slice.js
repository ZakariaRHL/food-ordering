import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _fetchCategories } from "../api/axios";

const name = "filter";

export const fetchCategories = createAsyncThunk(
  `${name}/fetchCategories`,
  async (_args, { getState, dispatch }) => {
    console.log("getState", getState());
    let response = await _fetchCategories("Italian");
    console.log("categories list 22: ", response);
    if (!response.error) {
      dispatch(setCategories(response.data));
    }
    return response.data;
  }
);

// actions
export const setCategories = createAction(`${name}/setCategories`);

const initialState = {
  categories: [],
};

const filterSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [setCategories]: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

// state selector
export const getCategories = (state) => state[name].categories;

export default filterSlice.reducer;
