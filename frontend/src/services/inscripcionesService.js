import api from "./api";

const API = "/inscripcion";

// Obtener todas las inscripciones
export const obtenerInscripciones = async () => {
    const response = await api.get(API);

    return response.data.response;
};

// Guardar una inscripción
export const guardarInscripcion = async (inscripcion) => {
    const response = await api.post(`${API}/guardar`, inscripcion);

    return response.data;
};

// Actualizar una inscripción
export const actualizarInscripcion = async (inscripcion) => {
    const response = await api.put(`${API}/actualizar`, inscripcion);

    return response.data;
};

// Eliminar una inscripción
export const eliminarInscripcion = async (id) => {
    const response = await api.delete(`${API}/eliminar`, {
        data: { id },
    });

    return response.data;
};