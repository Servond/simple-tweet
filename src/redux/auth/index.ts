import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    name: "",
    email: "",
  },
  login: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("login", "yes");
      const { id, name, email } = action.payload[0];
      state.user = {
        id,
        name,
        email,
      };
      state.login = true;
    },
    logoutSuccess: (state) => {
      state.login = false;
      state.user = {
        id: null,
        name: "",
        email: "",
      };
      localStorage.removeItem("login");
    },
    // belum terpakai
    keepLoginSuccess: (state) => {
      state.login = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, keepLoginSuccess } =
  authSlice.actions;

export default authSlice.reducer;
