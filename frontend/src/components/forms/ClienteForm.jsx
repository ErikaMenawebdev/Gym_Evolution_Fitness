import { useState, useEffect } from "react";
import {
  guardarCliente,
  actualizarCliente,
} from "../../services/clientesService";

function formatearFecha(fecha) {
  const date = new Date(fecha);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function ClienteForm({
  onGuardar,
  clienteEditar,
  setClienteEditar,
}) {

 const [cliente, setCliente] = useState({
  cedula: "",
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  sexo: "",
  telefono: "",
  correo: "",
  ciudad: "",
});


useEffect(() => {

  if (clienteEditar) {
    setCliente({
      ...clienteEditar,
      fechaNacimiento: clienteEditar.fechaNacimiento
        ? formatearFecha(clienteEditar.fechaNacimiento)
        : "",
    });
  }
}, [clienteEditar]);

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const guardar = async (e) => {
    e.preventDefault();

    console.log("Entró a guardar");

    try {

    if (clienteEditar) {
  await actualizarCliente(cliente);
  alert("Cliente actualizado");
} else {
  await guardarCliente(cliente);
  alert("Cliente guardado");
}

onGuardar();
    
} catch (error) {
    console.error(error);
    alert("Error al guardar el cliente");
}
    setCliente({
      cedula: "",
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      sexo: "",
      telefono: "",
      correo: "",
      ciudad: "",
    });

    setClienteEditar(null);
  };

  return (
    <form onSubmit={guardar} className="space-y-3 mb-6">

      <input
        type="text"
        name="cedula"
        placeholder="Cédula"
        value={cliente.cedula}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={cliente.nombre}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={cliente.apellido}
        onChange={handleChange}
        className="border p-2 w-full"
      />

     <label className="block mb-1">
  Fecha de Nacimiento
</label>
      <input
        type="date"
        name="fechaNacimiento"
        value={cliente.fechaNacimiento}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <select
        name="sexo"
        value={cliente.sexo}
        onChange={handleChange}
        className="border p-2 w-full"
        >
  <option value="">Seleccione un sexo</option>
  <option value="Masculino">Masculino</option>
  <option value="Femenino">Femenino</option>
</select>

     <input
  type="text"
  name="telefono"
  placeholder="Teléfono"
  value={cliente.telefono}
  onChange={handleChange}
  className="border p-2 w-full"
/>

<input
  type="email"
  name="correo"
  placeholder="Correo"
  value={cliente.correo}
  onChange={handleChange}
  className="border p-2 w-full"
/>

<input
  type="text"
  name="ciudad"
  placeholder="Ciudad"
  value={cliente.ciudad}
  onChange={handleChange}
  className="border p-2 w-full"
/>

      <button
  className="bg-blue-900 text-white px-4 py-2 rounded"
>
  {clienteEditar ? "Actualizar Cliente" : "Guardar Cliente"}
</button>

    </form>
  );
}