export default function ClienteTable({ clientes, onEditar, onEliminar }) {

  return (
    
    <div className="overflow-x-auto">
    <table className="min-w-full border">

      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="p-2 text-center">Cédula</th>
          <th className="p-2 text-center">Nombre</th>
          <th className="p-2 text-center">Apellido</th>
          <th className="p-2 text-center">Fecha Nacimiento</th>
          <th className="p-2 text-center">Sexo</th>
          <th className="p-2 text-center">Teléfono</th>
          <th className="p-2 text-center">Correo</th>
          <th className="p-2 text-center">Ciudad</th>
          <th className="p-2 text-center">Acciones</th>
        </tr>
      </thead>

      <tbody>

        {clientes.map((cliente) => (

          <tr key={cliente._id} className="border">

            <td className="p-2 text-center">{cliente.cedula}</td>
            <td className="p-2 text-center">{cliente.nombre}</td>
            <td className="p-2 text-center">{cliente.apellido}</td>

           <td className="p-2 text-center">
           {new Date(cliente.fechaNacimiento).toLocaleDateString("es-CO")}
          </td>

            <td className="p-2 text-center">{cliente.sexo}</td>
            <td className="p-2 text-center">{cliente.telefono}</td>
            <td className="p-2 text-center">{cliente.correo}</td>
            <td className="p-2 text-center">{cliente.ciudad}</td>

            

  <td className="p-2 space-x-2">
  <button
    onClick={() => onEditar(cliente)}
    className="bg-yellow-500 text-white px-3 py-1 rounded"
  >
    Editar
  </button>

  <button
    onClick={() => onEliminar(cliente.cedula)}
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