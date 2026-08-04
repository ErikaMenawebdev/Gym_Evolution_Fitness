import { useEffect, useState } from "react";
import ClienteForm from "../components/forms/ClienteForm";
import { obtenerClientes, obtenerCliente, eliminarCliente} from "../services/clientesService";
import ClienteTable from "../components/ui/ClienteTable";

export default function Clientes() {

  const [clientes, setClientes] = useState([]);
  const [clienteEditar, setClienteEditar] = useState(null);
  const [cedulaBuscar, setCedulaBuscar] = useState("");
    

  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
  const data = await obtenerClientes();

  console.log("Datos:", data);
  console.log("Cantidad:", data.length);
  
  setClientes(data);
};

const eliminar = async (cedula) => {

  if (!window.confirm("¿Desea eliminar este cliente?")) return;

  await eliminarCliente(cedula);

  alert("Cliente eliminado");

  cargarClientes();
};

const buscarCliente = async () => {

  if (!cedulaBuscar.trim()) {
    alert("Ingrese una cédula");
    return;
  }

  try {

    const cliente = await obtenerCliente(cedulaBuscar);

    if (cliente) {
      setClientes([cliente]);
    } else {
      alert("Cliente no encontrado");
      setClientes([]);
    }

  } catch (error) {
    alert("Cliente no encontrado");
    setClientes([]);
  }

};

const mostrarTodos = () => {
  setCedulaBuscar("");
  cargarClientes();
};

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Clientes
      </h1>

      <div className="flex gap-2 mb-4">

  <input
    type="text"
    placeholder="Buscar por cédula"
    value={cedulaBuscar}
    onChange={(e) => setCedulaBuscar(e.target.value)}
    className="border p-2"
  />

  <button
    onClick={buscarCliente}
    className="bg-green-600 text-white px-4 py-2 rounded"
  >
    Buscar
  </button>

  <button
    onClick={mostrarTodos}
    className="bg-gray-600 text-white px-4 py-2 rounded"
  >
    Mostrar todos
  </button>

</div>

      <ClienteForm
  onGuardar={cargarClientes}
  clienteEditar={clienteEditar}
  setClienteEditar={setClienteEditar}
/>

      
<ClienteTable
  clientes={clientes}
  onEditar={setClienteEditar}
  onEliminar={eliminar}
/>


    </div>
  );
}