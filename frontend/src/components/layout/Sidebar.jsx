import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const estiloLink = ({ isActive }) =>
    `px-3 py-2 rounded-md transition ${
      isActive
        ? "bg-blue-700 font-semibold"
        : "hover:bg-gray-700"
    }`;

  return (

    <aside className="w-64 bg-gray-800 text-white min-h-screen p-5">

      <nav className="flex flex-col h-full">

        {/* Navegación principal */}

        <div className="flex flex-col gap-2">

          <NavLink
            to="/"
            className={estiloLink}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/clientes"
            className={estiloLink}
          >
            Clientes
          </NavLink>

          <NavLink
            to="/planes"
            className={estiloLink}
          >
            Planes
          </NavLink>

          <NavLink
            to="/inscripciones"
            className={estiloLink}
          >
            Inscripciones
          </NavLink>

          <NavLink
            to="/pagos"
            className={estiloLink}
          >
            Pagos
          </NavLink>

        </div>


        {/* Cerrar sesión */}

        <button
          type="button"
          onClick={cerrarSesion}
          className="text-left px-3 py-2 rounded-md mt-8 hover:bg-gray-700 transition"
        >
          Cerrar sesión
        </button>

      </nav>

    </aside>
  );
}