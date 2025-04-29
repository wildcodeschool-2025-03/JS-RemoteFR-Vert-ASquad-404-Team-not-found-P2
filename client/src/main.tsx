import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";

import HomePage from "./pages/HomePage.tsx";
import PlanetInfo from "./pages/PlanetInfo.tsx";
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
        path: "/PlanetInfo/:id",
        element: <PlanetInfo />,
      },
      {
        path: "/evenements",
        element: <h1>evenements</h1>,
      },
    ],
  },
]);
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
