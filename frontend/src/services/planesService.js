import api from "./api";

const API = "/planes";

export const obtenerPlanes = async () => {
  const response = await api.get(API);
  return response.data.response;
};

export const obtenerPlan = async (id) => {
  const response = await api.post(`${API}/show`, { id });
  return response.data.response;
};

export const guardarPlan = async (plan) => {
  return await api.post(`${API}/guardar`, plan);
};

export const actualizarPlan = async (plan) => {
  return await api.put(`${API}/actualizar`, plan);
};

export const eliminarPlan = async (id) => {
  return await api.delete(`${API}/eliminar`, {
    data: { id },
  });
};