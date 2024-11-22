import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  space: 8, 
};

const occuSlice = createSlice({
  name: "occupy",
  initialState,
  reducers: {
    spaceFill: (state) => {
      if (state.space > 0) {
        state.space -= 1;
        console.log("Filling space. New available:", state.space);
      }
    },
    spaceEmpty: (state) => {
      if (state.space < 8) {
        state.space += 1;
        console.log("Emptying space. New available:", state.space);
      }
    },
  },
});

export const { spaceEmpty, spaceFill } = occuSlice.actions;
export default occuSlice.reducer;
