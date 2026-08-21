import { useEffect, useState } from "react";
import {
  obtenerInscripciones,
  eliminarInscripcion,
} from "../services/inscripcionesService";
import InscripcionesForm from "../components/forms/InscripcionesForm";
import InscripcionesTable from "../components/ui/InscripcionesTable";

export default function Inscripciones() {

  const [inscripciones, setInscripciones] = useState([]);
  const [inscripcionEditar, setInscripcionEditar] = useState(null);

  useEffect(() => {
    cargarInscripciones();
  }, []);

  const cargarInscripciones = async () => {

    const data = await obtenerInscripciones();

    console.log("Inscripciones:", data);
    console.log("Cantidad:", data.length);

    setInscripciones(data);
  };

  const eliminar = async (id) => {

  try {

    await eliminarInscripcion(id);

    alert("Inscripción eliminada");

    cargarInscripciones();

  } catch (error) {

    console.error(error);
    alert("Error al eliminar la inscripción");

  }
};

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Inscripciones
      </h1>

      <InscripcionesForm
  onGuardar={cargarInscripciones}
  inscripcionEditar={inscripcionEditar}
  setInscripcionEditar={setInscripcionEditar}
/>
      <InscripcionesTable
      inscripciones={inscripciones}
      onEliminar={eliminar}
      onEditar={setInscripcionEditar}
      />
    </div>
  );
}