const API_URL = "http://localhost:7000/inscripcion";

// Obtener todas las inscripciones
export const obtenerInscripciones = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();

    return data.response;
};

// Guardar una inscripción
export const guardarInscripcion = async (inscripcion) => {
    const response = await fetch(`${API_URL}/guardar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inscripcion)
    });

    const data = await response.json();

    return data;
};

// Actualizar una inscripción
export const actualizarInscripcion = async (inscripcion) => {
    const response = await fetch(`${API_URL}/actualizar`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inscripcion)
    });

    const data = await response.json();

    return data;
};

// Eliminar una inscripción
export const eliminarInscripcion = async (id) => {
    const response = await fetch(`${API_URL}/eliminar`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
    });

    const data = await response.json();

    return data;
};