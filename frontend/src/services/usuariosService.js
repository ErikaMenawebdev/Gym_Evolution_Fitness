import axios from "axios";

const API = "http://localhost:7000/usuarios";

export const loginUsuario = async (datos) => {

  const response = await axios.post(`${API}/login`, datos);

  return response.data;
};