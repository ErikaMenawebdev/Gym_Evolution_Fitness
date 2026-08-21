export default function PagosTable({
  pagos,
  onEliminar,
  onEditar,
}) {

  const eliminar = async (id) => {

    const confirmar = window.confirm(
      "¿Está seguro de eliminar este pago?"
    );

    if (!confirmar) {
      return;
    }

    try {

      await onEliminar(id);

    } catch (error) {

      console.error(error);

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
            Nombre
          </th>

          <th className="border p-2">
            Valor
          </th>

          <th className="border p-2">
            Método de Pago
          </th>

          <th className="border p-2">
            Acciones
          </th>

        </tr>
      </thead>

      <tbody>

        {pagos.map((pago) => (

          <tr key={pago._id}>

            <td className="border p-2 text-center">
              {pago.cedula}
            </td>

            <td className="border p-2 text-center">
              {pago.nombre}
            </td>

            <td className="border p-2 text-center">
              ${pago.valor}
            </td>

            <td className="border p-2 text-center">
              {pago.metodoPago}
            </td>

            <td className="border p-2">

              <div className="flex gap-2 justify-center">

                <button
                  onClick={() => onEditar(pago)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => eliminar(pago._id)}
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