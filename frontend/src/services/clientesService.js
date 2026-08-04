import axios from "axios";

const API = "http://localhost:7000/cliente";

export const obtenerClientes = async () => {
  const response = await axios.get(API);
  return response.data.response;
};

export const obtenerCliente = async (cedula) => {
  const response = await axios.post(`${API}/show`, { cedula });
  return response.data.response;
};

export const guardarCliente = async (cliente) => {
  return await axios.post(`${API}/guardar`, cliente);
};

export const actualizarCliente = async (cliente) => {
  return await axios.put(`${API}/actualizar`, cliente);
};

export const eliminarCliente = async (cedula) => {
  return await axios.delete(`${API}/eliminar`, {
    data: { cedula },
  });
};