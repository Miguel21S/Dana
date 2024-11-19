import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
      path: "*",
      element: <App />,
  },
], {
  future: {
    v7_startTransition: true,           // Envolver actualizaciones de estado con React.startTransition
    v7_relativeSplatPath: true,         // Resolución de rutas relativas en rutas tipo "*"
    v7_fetcherPersist: true,            // Persistencia de fetchers
    v7_normalizeFormMethod: true,       // Normalización de métodos en formularios
    v7_partialHydration: true,          // Hidratación parcial
    v7_skipActionErrorRevalidation: true, // Omisión de revalidación después de errores 4xx/5xx
  },
});

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
