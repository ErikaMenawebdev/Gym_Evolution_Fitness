import { useState, useEffect } from "react";
import { obtenerClientes } from "../../services/clientesService";
import { obtenerPlanes } from "../../services/planesService";
import { obtenerPagos } from "../../services/pagosService";
import {
  guardarInscripcion,
  actualizarInscripcion,
} from "../../services/inscripcionesService";

export default function InscripcionesForm({
  onGuardar,
  inscripcionEditar,
  setInscripcionEditar,
}) {

  const [clientes, setClientes] = useState([]);
  const [planes, setPlanes] = useState([]);
  const [pagos, setPagos] = useState([]);

  const [inscripcion, setInscripcion] = useState({
    cedula: "",
    idPlan: "",
    idPago: "",
    fechaInscripcion: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "Activa",
  });

  useEffect(() => {
    cargarDatos();
  }, []);

  useEffect(() => {

  if (inscripcionEditar) {

    setInscripcion({
      cedula: inscripcionEditar.cedula,
      idPlan: inscripcionEditar.idPlan,
      idPago: inscripcionEditar.idPago,
      fechaInscripcion: inscripcionEditar.fechaInscripcion.split("T")[0],
      fechaInicio: inscripcionEditar.fechaInicio.split("T")[0],
      fechaFin: inscripcionEditar.fechaFin.split("T")[0],
      estado: inscripcionEditar.estado,
    });

  }

}, [inscripcionEditar]);

  const cargarDatos = async () => {

    const clientesData = await obtenerClientes();
    const planesData = await obtenerPlanes();
    const pagosData = await obtenerPagos();

    setClientes(clientesData);
    setPlanes(planesData);
    setPagos(pagosData);
  };

  const guardar = async (e) => {
  e.preventDefault();

  try {

    if (inscripcionEditar) {

      const data = await actualizarInscripcion({
        id: inscripcionEditar._id,
        cedula: inscripcion.cedula,
        idPlan: inscripcion.idPlan,
        idPago: inscripcion.idPago,
        fechaInscripcion: inscripcion.fechaInscripcion,
        fechaInicio: inscripcion.fechaInicio,
        estado: inscripcion.estado,
      });

      console.log("Respuesta al actualizar:", data);

      alert("Inscripción actualizada");

      // Limpiar formulario
      setInscripcion({
        cedula: "",
        idPlan: "",
        idPago: "",
        fechaInscripcion: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "Activa",
      });

      setInscripcionEditar(null);

      onGuardar();

    } else {

      const data = await guardarInscripcion(inscripcion);

      console.log("Respuesta del backend:", data);
      console.log("Fecha fin:", data.response.fechaFin);

      alert("Inscripción guardada");

      setInscripcion({
        ...inscripcion,
        fechaFin: data.response.fechaFin.split("T")[0],
      });

      onGuardar();
    }

  } catch (error) {

    console.error(error);
    alert("Error al guardar la inscripción");

  }
};

  return (
  <form onSubmit={guardar} className="mb-6">

    <h2 className="text-2xl font-bold mb-4">
  {inscripcionEditar ? "Editar Inscripción" : "Nueva Inscripción"}
</h2>

    <select
      name="cedula"
      value={inscripcion.cedula}
      onChange={(e) =>
        setInscripcion({
          ...inscripcion,
          cedula: e.target.value,
        })
      }
      className="border p-2 w-full mb-4"
    >
      <option value="">Seleccione un cliente</option>

      {clientes.map((cliente) => (
        <option key={cliente._id} value={cliente.cedula}>
          {cliente.cedula} - {cliente.nombre} {cliente.apellido}
        </option>
      ))}
    </select>

    <select
      name="idPlan"
      value={inscripcion.idPlan}
      onChange={(e) =>
        setInscripcion({
          ...inscripcion,
          idPlan: e.target.value,
        })
      }
      className="border p-2 w-full mb-4"
    >
      <option value="">Seleccione un plan</option>

      {planes.map((plan) => (
        <option key={plan._id} value={plan._id}>
          {plan.nombre} - {plan.duracionDias} días - ${plan.precio}
        </option>
      ))}
    </select>

    <select
      name="idPago"
      value={inscripcion.idPago}
      onChange={(e) =>
        setInscripcion({
          ...inscripcion,
          idPago: e.target.value,
        })
      }
      className="border p-2 w-full mb-4"
    >
      <option value="">Seleccione un pago</option>

      {pagos.map((pago) => (
        <option key={pago._id} value={pago._id}>
          {pago.cedula} - {pago.nombre} - ${pago.valor}
        </option>
      ))}
    </select>

      <label className="block mb-1">
  Fecha de Inscripción
</label>
    <input
      type="date"
      name="fechaInscripcion"
      value={inscripcion.fechaInscripcion}
      onChange={(e) =>
        setInscripcion({
          ...inscripcion,
          fechaInscripcion: e.target.value,
        })
      }
      className="border p-2 w-full mb-4"
    />
    
    <label className="block mb-1">
  Fecha de inicio
</label>
    <input
      type="date"
      name="fechaInicio"
      value={inscripcion.fechaInicio}
      onChange={(e) =>
        setInscripcion({
          ...inscripcion,
          fechaInicio: e.target.value,
        })
      }
      className="border p-2 w-full mb-4"
    />

<label className="block mb-1">
  Fecha de vencimiento
</label>
    <input
  type="date"
  name="fechaFin"
  value={inscripcion.fechaFin}
  readOnly
  className="border p-2 w-full mb-4"
/>

      <label className="block mb-1">
  Estado de la Inscripción
</label>
    <select
      name="estado"
      value={inscripcion.estado}
      onChange={(e) =>
        setInscripcion({
          ...inscripcion,
          estado: e.target.value,
        })
      }
      className="border p-2 w-full mb-4"
    >
      <option value="Activa">Activa</option>
      <option value="Vencida">Vencida</option>
      <option value="Cancelada">Cancelada</option>
    </select>

    <button
  type="submit"
  className="bg-blue-800 text-white px-4 py-2 rounded"
>
  {inscripcionEditar ? "Actualizar Inscripción" : "Guardar Inscripción"}
</button>

  </form>
);
}
