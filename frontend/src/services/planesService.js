import axios from "axios";

const API = "http://localhost:7000/planes";

export const obtenerPlanes = async () => {
  const response = await axios.get(API);
  return response.data.response;
};

export const obtenerPlan = async (id) => {
  const response = await axios.post(`${API}/show`, { id });
  return response.data.response;
};

export const guardarPlan = async (plan) => {
  return await axios.post(`${API}/guardar`, plan);
};

export const actualizarPlan = async (plan) => {
  return await axios.put(`${API}/actualizar`, plan);
};

export const eliminarPlan = async (id) => {
  return await axios.delete(`${API}/eliminar`, {
    data: { id },
  });
};