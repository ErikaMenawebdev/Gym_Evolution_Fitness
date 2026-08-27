import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/Login";
import RutaProtegida from "../components/auth/RutaProtegida";

import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Clientes";
import Planes from "../pages/Planes";
import Inscripciones from "../pages/Inscripciones";
import Pagos from "../pages/Pagos";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
  path="/login"
  element={<Login />}
/>

      <Route
        path="/"
        element={
          <RutaProtegida>
          <Layout>
            <Dashboard />
          </Layout>
          </RutaProtegida>
        }
      />

      <Route
        path="/clientes"
        element={
          <RutaProtegida>
          <Layout>
            <Clientes />
          </Layout>
          </RutaProtegida>
        }
      />

      <Route
        path="/planes"
        element={
          <RutaProtegida>
          <Layout>
            <Planes />
          </Layout>
          </RutaProtegida>
        }
      />

      <Route
        path="/inscripciones"
        element={
          <RutaProtegida>
          <Layout>
            <Inscripciones />
          </Layout>
          </RutaProtegida>
        }
      />

      <Route
        path="/pagos"
        element={
           <RutaProtegida>
          <Layout>
            <Pagos />
          </Layout>
          </RutaProtegida>
        }
      />
    </Routes>
  );
}