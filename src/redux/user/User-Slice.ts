import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState = {
  user: null,
};

interface UserAction {
  type: string;
  payload?: User;
}

export const userSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
