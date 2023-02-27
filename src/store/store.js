import create from "zustand";
import { persist, devtools, combine, redux } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

//get the user token from local storage
const Usertoken = localStorage.getItem("userToken");

const getLocalStorage = (key) => localStorage.getItem(key);
const setLocalStorage = (key, value) => localStorage.setItem(key, value);

export const useUserTokenStore = create((set) => ({
  Usertoken: getLocalStorage("userToken") || [],
  setUsertoken: (token) =>
    set((state) => {
      setLocalStorage("userToken", token);
      return { token };
    }),
}));

export const useStore = create((set) => ({
  toggleSelect: false,
  setToggleSelect: () =>
    set((state) => ({ toggleSelect: !state.toggleSelect })),
}));

// if (process.env.NODE_ENV === "development") {
//   mountStoreDevtool("usertoken", Usertoken);
// }
