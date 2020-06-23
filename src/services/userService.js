import http from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = `${config.apiEndpoint}/user`;

const tokenKey = "token";

export function register(user) {
  return http.post(`${apiEndPoint}/register`, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

export async function login(email, password) {
  const { data: jwt } = await http.post(`${apiEndPoint}/login`, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
