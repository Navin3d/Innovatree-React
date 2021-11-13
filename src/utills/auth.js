import cookie from "js-cookie";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { setUser, logout } from "../redux/actions/UserAction";

export let isLoggedIn = () => cookie.get("Authorization") ? true : false;

export const handleLogin = async ({ authorization, role, userid }) => {
  await cookie.set("Authorization", authorization);
  await cookie.set("UserId", userid);
  await cookie.set("Role", role);
};

export const handleLogout = () => {
  console.log("Function Called");
  cookie.set("Authorization", null);
  cookie.set("UserId", null);
  cookie.set("Role", null);
};
