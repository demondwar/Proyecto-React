import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Perfil({ user, onLogout }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    // Verificar si hay usuario logeado en localStorage
    const userFromStorage = JSON.parse(localStorage.getItem('loggedInUser'));
    
    if (!userFromStorage) {
      alert("No hay usuario logeado. Redirigiendo al login...");
      nav("/login");
      return;
    }
    
    setLoggedInUser(userFromStorage);
  }, [nav]);

  const handleLogout = () => {
    onLogout();
    nav("/");
  };

  if (!loggedInUser) {
    return null; // O un loading spinner
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Contenido principal que se expande */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <section className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow p-4">
                <h2 className="text-center text-danger mb-4">Perfil de Usuario</h2>
                <div id="perfilUsuario">
                  <p><strong>Nombre:</strong> {loggedInUser.name}</p>
                  <p><strong>Correo:</strong> {loggedInUser.email}</p>
                  <div className="d-grid">
                    <button 
                      className="btn btn-danger" 
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer que siempre está abajo */}
      <footer className="footer text-white text-center p-3 bg-danger mt-auto">
        <p>&copy; 2025 Adopta un Amigo | Todos los derechos reservados</p>
      </footer>
    </div>
  );
}