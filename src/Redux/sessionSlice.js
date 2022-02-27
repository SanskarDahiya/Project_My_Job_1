import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
};

export const sessionReducer = createSlice({
  name: "sessionReducer",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setLoading } = sessionReducer.actions;

export default sessionReducer.reducer;
