import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../services/usuariosService";


export default function Login() {

const [usuario, setUsuario] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const iniciarSesion = async (e) => {

  e.preventDefault();

  try {

    const data = await loginUsuario({
      correo: usuario,
      password: password,
    });

    console.log("Respuesta del login:", data);
    localStorage.setItem("token", data.token);
    navigate("/");

  } catch (error) {

    console.error(error);
    alert("Error al iniciar sesión");

  }
};

    

   return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Evolution Fitness
        </h1>

        <h2 className="text-2xl font-bold mb-6">
          Iniciar sesión
        </h2>

         <form onSubmit={iniciarSesion}>

          <input
         type="text"
         placeholder="Usuario"
         value={usuario}
         onChange={(e) => setUsuario(e.target.value)}
        className="border p-2 w-full mb-4"
        />

          <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
        />

          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded w-full"
          >
            Ingresar
          </button>

        </form>

      </div>

    </div>
  );
}