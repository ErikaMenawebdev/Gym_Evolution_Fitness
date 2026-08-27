import api from "./api";

const API = "/pagos";

export const obtenerPagos = async () => {
  const response = await api.get(API);
  return response.data.response;
};

export const guardarPago = async (pago) => {
  const response = await api.post(`${API}/guardar`, pago);
  return response.data;
};

export const actualizarPago = async (pago) => {
  const response = await api.put(`${API}/actualizar`, pago);
  return response.data;
};

export const eliminarPago = async (id) => {
  const response = await api.delete(`${API}/eliminar`, {
    data: { id }
  });

  return response.data;
};