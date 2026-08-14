import { useState, useEffect } from "react";
import {
  guardarPlan,
  actualizarPlan,
} from "../../services/planesService";

export default function PlanesForm({
  onGuardar,
  planEditar,
  setPlanEditar,
}) {

  const [plan, setPlan] = useState({
    nombre: "",
    duracionDias: "",
    precio: "",
  });

  useEffect(() => {

  if (planEditar) {

    setPlan({
      nombre: planEditar.nombre,
      duracionDias: planEditar.duracionDias,
      precio: planEditar.precio,
    });

    } else {

    setPlan({
      nombre: "",
      duracionDias: "",
      precio: "",
    });

  }

}, [planEditar]);

  const manejarCambio = (e) => {
    setPlan({
      ...plan,
      [e.target.name]: e.target.value,
    });
  };

  const guardar = async (e) => {
  e.preventDefault();

  try {

    if (planEditar) {

      await actualizarPlan({
        id: planEditar._id,
        nombre: plan.nombre,
        duracionDias: Number(plan.duracionDias),
        precio: Number(plan.precio),
      });

      alert("Plan actualizado");

    } else {

      await guardarPlan({
        nombre: plan.nombre,
        duracionDias: Number(plan.duracionDias),
        precio: Number(plan.precio),
      });

      alert("Plan guardado");
    }

    setPlan({
      nombre: "",
      duracionDias: "",
      precio: "",
    });

    setPlanEditar(null);

    onGuardar();

  } catch (error) {
    console.error(error);
    alert("Error al guardar el plan");
  }
};


  return (
    <form onSubmit={guardar} className="mb-6">

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del plan"
        value={plan.nombre}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      />

      <input
        type="number"
        name="duracionDias"
        placeholder="Duración en días"
        value={plan.duracionDias}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      />

      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={plan.precio}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      />

      <button
      type="submit"
      className="bg-blue-800 text-white px-4 py-2 rounded"
>
      {planEditar ? "Actualizar Plan" : "Guardar Plan"}
      </button>

    </form>
  );
}