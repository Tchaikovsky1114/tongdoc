import { atom, selector } from "recoil";
import apis from "../api/api";

export const signupState = atom({
  key: "signupState",
  default: null,
});

export const signinState = atom({
  key: "signinState",
  default: {
    email: "",
    password: "",
  },
});

export const signinSelector = selector({
  key: "signinSelector",
  get: ({ get }) => {
    const user = get(signinState);
    const response = apis.Signin(user);
  },
});
