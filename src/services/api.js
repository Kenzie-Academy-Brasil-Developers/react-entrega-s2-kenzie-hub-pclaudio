import axios from "axios";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
    }`,
  },
});

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  responseType: "json",
});

const genericPost = (url, data) => {
  const headers = getHeaders();

  return api
    .post(url, data, headers)
    .then((response) => response)
    .catch((error) => error.response.data);
};

export const createUser = (user) => {
  return genericPost("/users", user);
};

export const login = (credentials) => {
  return genericPost("/sessions", credentials);
};

export const addTech = (tech) => {
  return genericPost("/users/techs", tech);
};

export const getUserTechs = async (userId) => {
  const response = await api.get(`/users/${userId}`);

  return response.data.techs;
};

export const deleteTech = (techId) => {
  const headers = getHeaders();

  return api.delete(`users/techs/${techId}`, headers);
};

export const updateTech = (techId, data) => {
  const headers = getHeaders();

  return api.put(`users/techs/${techId}`, data, headers);
};
