export default function PlanesTable({ planes,  onEditar, onEliminar }) {

  return (

    <div className="overflow-x-auto">

      <table className="min-w-full border">

        <thead className="bg-blue-900 text-white">

          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Duración (días)</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Acciones</th>
          </tr>

        </thead>

        <tbody>

          {planes.map((plan) => (

            <tr key={plan._id} className="border">

              <td className="p-2 text-center">
                {plan.nombre}
              </td>

              <td className="p-2 text-center">
                {plan.duracionDias}
              </td>

              <td className="p-2 text-center">
                {plan.precio}
              </td>

              <td className="p-2 text-center space-x-2">

              <button
              onClick={() => onEditar(plan)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
             >
             Editar
             </button>

             <button
             onClick={() => onEliminar(plan._id)}
             className="bg-red-600 text-white px-3 py-1 rounded"
              >
            Eliminar
            </button>

            </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}