import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./components/App/App";
import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import RDV from "./components/Pages/RDV";
import ProfilPage from "./components/Pages/ProfilPage";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {
      path: "",
      element: <HomePage />
    },
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "register",
      element: <RegisterPage />
    },
    {
      path: "rdv",
      element: <RDV />
    },
    {
      path: "profil",
      element: <ProfilPage />
    }
  ]
}
])


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);