import { eliminarInscripcion } from "../../services/inscripcionesService";

export default function InscripcionesTable({
  inscripciones,
  onEliminar,
  onEditar,
}) {

  const eliminar = async (id) => {

    const confirmar = window.confirm(
      "¿Está seguro de eliminar esta inscripción?"
    );

    if (!confirmar) {
      return;
    }

    try {

      await eliminarInscripcion(id);

      alert("Inscripción eliminada");

      onEliminar();

    } catch (error) {

      console.error(error);
      alert("Error al eliminar la inscripción");

    }
  };

  return (
    <table className="w-full border-collapse">

      <thead>
        <tr className="bg-blue-800 text-white">

          <th className="border p-2">
            Cédula
          </th>

          <th className="border p-2">
            Plan
          </th>

          <th className="border p-2">
            Pago
          </th>

          <th className="border p-2">
            Fecha Inscripción
          </th>

          <th className="border p-2">
            Fecha Inicio
          </th>

          <th className="border p-2">
            Fecha Vencimiento
          </th>

          <th className="border p-2">
            Estado
          </th>

          <th className="border p-2">
            Acciones
          </th>

        </tr>
      </thead>

      <tbody>

        {inscripciones.map((inscripcion) => (

          <tr key={inscripcion._id}>

            <td className="border p-2">
              {inscripcion.cedula}
            </td>

            <td className="border p-2">
              {inscripcion.idPlan}
            </td>

            <td className="border p-2">
              {inscripcion.idPago}
            </td>

            <td className="border p-2">
              {inscripcion.fechaInscripcion}
            </td>

            <td className="border p-2">
              {inscripcion.fechaInicio}
            </td>

            <td className="border p-2">
              {inscripcion.fechaFin}
            </td>

            <td className="border p-2">
              {inscripcion.estado}
            </td>

            <td className="border p-2">

              <div className="flex gap-2">

                <button
                  onClick={() => onEditar(inscripcion)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => eliminar(inscripcion._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Eliminar
                </button>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}