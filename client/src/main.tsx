import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";

import Evenements from "./pages/Evenements.tsx";
import HomePage from "./pages/HomePage.tsx";
import SystemeSolaire from "./pages/systeme-solaire";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error();
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/systeme-solaire",
        element: <SystemeSolaire />,
      },
      {
        path: "/systeme-solaire/:id",
        element: <h1>Carte planetes</h1>,
      },
      {
        path: "/evenements",
        element: <Evenements />,
      },
    ],
  },
]);
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
