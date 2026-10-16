import api from "../../config/api";

export const login = async (data) => {
  return await api.post("/auth/login", data);
};

export const signUp = async (data) => {
  return await api.post("/auth/signup", data);
};

export const verifyMe = async () => {
  return await api.get("/auth/verify-me",{
    withCredentials:true
  });
};

export const logout = async () => {
  return await api.post("/auth/logout");
};