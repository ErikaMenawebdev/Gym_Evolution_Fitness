import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Clientes";
import Planes from "../pages/Planes";
import Inscripciones from "../pages/Inscripciones";
import Pagos from "../pages/Pagos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/clientes"
        element={
          <Layout>
            <Clientes />
          </Layout>
        }
      />

      <Route
        path="/planes"
        element={
          <Layout>
            <Planes />
          </Layout>
        }
      />

      <Route
        path="/inscripciones"
        element={
          <Layout>
            <Inscripciones />
          </Layout>
        }
      />

      <Route
        path="/pagos"
        element={
          <Layout>
            <Pagos />
          </Layout>
        }
      />
    </Routes>
  );
}