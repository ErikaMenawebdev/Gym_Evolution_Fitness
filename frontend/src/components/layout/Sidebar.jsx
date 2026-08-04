import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <nav className="flex flex-col gap-4">

        <Link to="/">Dashboard</Link>

        <Link to="/clientes">Clientes</Link>

        <Link to="/planes">Planes</Link>

        <Link to="/inscripciones">Inscripciones</Link>

        <Link to="/pagos">Pagos</Link>

      </nav>
    </aside>
  );
}