import axios from "axios";

const API = "http://localhost:7000/pagos";

export const obtenerPagos = async () => {
  const response = await axios.get(API);
  return response.data.response;
};

export const guardarPago = async (pago) => {
  const response = await axios.post(`${API}/guardar`, pago);
  return response.data;
};

export const actualizarPago = async (pago) => {
  const response = await axios.put(`${API}/actualizar`, pago);
  return response.data;
};

export const eliminarPago = async (id) => {
  const response = await axios.delete(`${API}/eliminar`, {
    data: { id }
  });

  return response.data;
};