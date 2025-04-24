import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./App.tsx";
import SystemeSolaire from "./pages/systeme-solaire";
import CardDescription from "./components/CardDescription.tsx";

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
        element: <CardDescription />,
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
