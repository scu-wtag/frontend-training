import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import Welcome from "./Welcome.jsx";
import Bye from "./Bye.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/todos", element: <App /> },
  { path: "/bye", element: <Bye /> },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);