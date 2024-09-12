import { createSlice } from "@reduxjs/toolkit"

const HumanSlice = createSlice({
  name: 'human',
  initialState: {
    value: ["이승훈", "현지훈", "박준수"]
  },
  reducers: {
    addHuman: (state, action) => {
      state.value.push(action.payload)
    }
  }
});

export const { addHuman } = HumanSlice.actions;
export default HumanSlice;