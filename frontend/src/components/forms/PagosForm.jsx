import { useState } from "react";
import { guardarPago } from "../../services/pagosService";

export default function PagosForm({ onGuardar }) {

  const [pago, setPago] = useState({
    cedula: "",
    nombre: "",
    valor: "",
    metodoPago: "",
  });

  const manejarCambio = (e) => {
    setPago({
      ...pago,
      [e.target.name]: e.target.value,
    });
  };

  const guardar = async (e) => {
    e.preventDefault();

    try {

      await guardarPago({
        cedula: pago.cedula,
        nombre: pago.nombre,
        valor: Number(pago.valor),
        metodoPago: pago.metodoPago,
      });

      alert("Pago guardado");

      setPago({
        cedula: "",
        nombre: "",
        valor: "",
        metodoPago: "",
      });

      onGuardar();

    } catch (error) {

      console.error(error);
      alert("Error al guardar el pago");

    }
  };

  return (
    <form onSubmit={guardar} className="mb-6">

      <h2 className="text-2xl font-bold mb-4">
        Nuevo Pago
      </h2>

      <input
        type="text"
        name="cedula"
        placeholder="Cédula del cliente"
        value={pago.cedula}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      />

      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cliente"
        value={pago.nombre}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      />

      <input
        type="number"
        name="valor"
        placeholder="Valor del pago"
        value={pago.valor}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      />

      <select
        name="metodoPago"
        value={pago.metodoPago}
        onChange={manejarCambio}
        className="border p-2 w-full mb-4"
      >
        <option value="">Seleccione un método de pago</option>
        <option value="Efectivo">Efectivo</option>
        <option value="Transferencia">Transferencia</option>
      </select>

      <button
        type="submit"
        className="bg-blue-800 text-white px-4 py-2 rounded"
      >
        Guardar Pago
      </button>

    </form>
  );
}