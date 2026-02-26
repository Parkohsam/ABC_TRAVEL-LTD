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
    const formData = new FormData();
    formData.append("name", packageData.name);
    formData.append("description", packageData.description);
    formData.append("price", packageData.price);
    formData.append("availability", packageData.availability);
    formData.append("season", packageData.season);
    if (packageData.image && typeof packageData.image !== "string") {
      formData.append("image", packageData.image);
    }

    const response = await fetch("http://localhost:2200/api/packages/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Something went wrong");
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updatePackage = async (id, packageData) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", packageData.name);
    formData.append("description", packageData.description);
    formData.append("price", packageData.price);
    formData.append("availability", packageData.availability);
    formData.append("season", packageData.season);
    if (packageData.image && typeof packageData.image !== "string") {
      formData.append("image", packageData.image);
    }

    const response = await fetch(`http://localhost:2200/api/packages/update/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Something went wrong");
    return data;
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

export const getUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await api("/api/user/all", "GET", null, token);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const createBooking = async (bookingData) => {
  try {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("phoneNumber", bookingData.phoneNumber);
    formData.append("passportNumber", bookingData.passportNumber);
    formData.append("nin", bookingData.nin);
    formData.append("passportPhoto", bookingData.passportPhoto);
    formData.append("packageId", bookingData.packageId);

    const response = await fetch("http://localhost:2200/api/bookings/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Something went wrong");
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

