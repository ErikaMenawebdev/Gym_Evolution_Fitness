import api from "./api";

const API = "/cliente";

export const obtenerClientes = async () => {
  const response = await api.get(API);
  return response.data.response;
};

export const obtenerCliente = async (cedula) => {
  const response = await api.post(`${API}/show`, { cedula });
  return response.data.response;
};

export const guardarCliente = async (cliente) => {
  return await api.post(`${API}/guardar`, cliente);
};

export const actualizarCliente = async (cliente) => {
  return await api.put(`${API}/actualizar`, cliente);
};

export const eliminarCliente = async (cedula) => {
  return await api.delete(`${API}/eliminar`, {
    data: { cedula },
  });
};