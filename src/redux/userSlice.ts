import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: string;
}

const initialState: UserState = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
