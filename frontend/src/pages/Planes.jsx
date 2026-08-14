import { useEffect, useState } from "react";
import {
  obtenerPlanes,
  guardarPlan,
  actualizarPlan,
  eliminarPlan
} from "../services/planesService";
import PlanesTable from "../components/ui/PlanesTable";
import PlanesForm from "../components/forms/PlanesForm";

export default function Planes() {

  const [planes, setPlanes] = useState([]);
  const [planEditar, setPlanEditar] = useState(null);

  useEffect(() => {
    cargarPlanes();
  }, []);

  const cargarPlanes = async () => {
    const data = await obtenerPlanes();

    console.log("Planes:", data);
    console.log("Cantidad:", data.length);

    setPlanes(data);
  };

  const eliminar = async (id) => {

  if (!window.confirm("¿Desea eliminar este plan?")) return;

  try {

    await eliminarPlan(id);

    alert("Plan eliminado");

    setPlanEditar(null);

    cargarPlanes();

  } catch (error) {

    console.error(error);
    alert("Error al eliminar el plan");

  }
};

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Planes
      </h1>

      <PlanesForm
  onGuardar={cargarPlanes}
  planEditar={planEditar}
  setPlanEditar={setPlanEditar}
/>
      <PlanesTable
  planes={planes}
  onEditar={setPlanEditar}
  onEliminar={eliminar}
/>

    </div>
  );
}