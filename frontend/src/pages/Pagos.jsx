import { useEffect, useState } from "react";
import {
  obtenerPagos,
  eliminarPago,
} from "../services/pagosService";

import PagosForm from "../components/forms/PagosForm";
import PagosTable from "../components/ui/PagosTable";

export default function Pagos() {

  const [pagos, setPagos] = useState([]);
  const [pagoEditar, setPagoEditar] = useState(null);

  useEffect(() => {
    cargarPagos();
  }, []);

  const cargarPagos = async () => {

    const data = await obtenerPagos();

    console.log("Pagos:", data);
    console.log("Cantidad:", data.length);

    setPagos(data);
  };

  const eliminar = async (id) => {

    try {

      await eliminarPago(id);

      alert("Pago eliminado");

      cargarPagos();

    } catch (error) {

      console.error(error);
      alert("Error al eliminar el pago");

    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Pagos
      </h1>

      <PagosForm onGuardar={cargarPagos}
      pagoEditar={pagoEditar}
      setPagoEditar={setPagoEditar} />

      <PagosTable
        pagos={pagos}
        onEliminar={eliminar}
        onEditar={setPagoEditar}
      />

    </div>
  );
}