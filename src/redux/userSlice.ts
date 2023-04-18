import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../actions/cookieUtils";

export interface UserState {
  user: string;
}

const initialState: UserState = {
  user: getCookie("user") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
      setCookie("user", action.payload, 30);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
