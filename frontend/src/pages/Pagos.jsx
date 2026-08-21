import { useEffect, useState } from "react";
import { obtenerPagos } from "../services/pagosService";
import PagosForm from "../components/forms/PagosForm";

export default function Pagos() {

  const [pagos, setPagos] = useState([]);

  useEffect(() => {
    cargarPagos();
  }, []);

  const cargarPagos = async () => {

    const data = await obtenerPagos();

    console.log("Pagos:", data);
    console.log("Cantidad:", data.length);

    setPagos(data);
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Pagos
      </h1>

      <PagosForm onGuardar={cargarPagos} />

    </div>
  );
}