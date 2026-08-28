import { useEffect, useState } from "react";
import { obtenerDashboard } from "../services/dashboardService";

const formatearMoneda = (valor) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor);
};

export default function Dashboard() {

  const [datos, setDatos] = useState(null);

  useEffect(() => {
    cargarDashboard();
  }, []);

  const cargarDashboard = async () => {

    try {

      const data = await obtenerDashboard();

      console.log("Datos del Dashboard:", data);

      setDatos(data);

    } catch (error) {

      console.error("Error al cargar el Dashboard:", error);

    }

  };

  if (!datos) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-600">
          Cargando Dashboard...
        </p>
      </div>
    );
  }

  return (
    <div>

      {/* Encabezado */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Resumen general de Evolution Fitness Gym:
        </p>

      </div>


      {/* Tarjetas */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* Clientes */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm font-medium">
                Total clientes
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {datos.totalClientes}
              </p>

            </div>

            <div className="text-4xl">
              👥
            </div>

          </div>

        </div>


        {/* Planes */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm font-medium">
                Total planes
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {datos.totalPlanes}
              </p>

            </div>

            <div className="text-4xl">
              📋
            </div>

          </div>

        </div>


        {/* Inscripciones */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm font-medium">
                Total inscripciones
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {datos.totalInscripciones}
              </p>

            </div>

            <div className="text-4xl">
              📝
            </div>

          </div>

        </div>


        {/* Pagos */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm font-medium">
                Total pagos
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {datos.totalPagos}
              </p>

            </div>

            <div className="text-4xl">
              💳
            </div>

          </div>

        </div>


        {/* Ingresos totales */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm font-medium">
                Ingresos totales
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {formatearMoneda(datos.ingresosTotales)}
              </p>

            </div>

            <div className="text-4xl">
              💰
            </div>

          </div>

        </div>


        {/* Inscripciones activas */}

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm font-medium">
                Inscripciones activas
              </p>

              <p className="text-3xl font-bold text-gray-800 mt-2">
                {datos.inscripcionesActivas}
              </p>

            </div>

            <div className="text-4xl">
              🟢
            </div>

          </div>

        </div>


      </div>


      {/* Ingresos mensuales */}

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mt-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-gray-500 text-sm font-medium">
              Ingresos del mes actual
            </p>

            <p className="text-4xl font-bold text-gray-800 mt-2">
              {formatearMoneda(datos.ingresosMensuales)}
            </p>

          </div>

          <div className="text-5xl">
            📈
          </div>

        </div>

      </div>

    </div>
  );
}