import api from "../lib/api";

export const signUpService = async (userData) => {
  try {
    const response = await api("/api/user/signup", "POST", userData);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const loginService = async (credentials) => {
  try {
    const response = await api("/api/user/login", "POST", credentials);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateUser = async (userUpdate) => {
    try {
         const token = localStorage.getItem("token");
        const response = await api("/api/user/update", "PUT", userUpdate, token);
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getPackages = async () => {
  try {
    const response = await api("/api/packages/all", "GET");
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createPackage = async (packageData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api("/api/packages/create", "POST", packageData, token);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updatePackage = async (id, packageData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api(`/api/packages/update/${id}`, "PUT", packageData, token);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deletePackage = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api(`/api/packages/delete/${id}`, "DELETE", null, token);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};