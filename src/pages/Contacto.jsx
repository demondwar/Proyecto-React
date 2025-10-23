import React, { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    perrito: "",
    edad: "",
    mensaje: "",
    preferencia: "",
    terminos: false
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!form.nombre || !form.correo || !form.perrito || !form.terminos) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      perrito: "",
      edad: "",
      mensaje: "",
      preferencia: "",
      terminos: false
    });
  };

  return (
    <>
      {/* Formulario de contacto */}
      <section className="container my-5">
        <h2 className="text-center text-danger mb-4">Contáctanos 📩</h2>
        {sent && <div className="alert alert-success text-center">Mensaje enviado con éxito ✅</div>}
        
        <form 
          className="shadow p-4 rounded bg-light mx-auto" 
          style={{maxWidth: "600px"}}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre completo</label>
            <input 
              type="text" 
              className="form-control" 
              id="nombre" 
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre" 
              required 
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="correo" 
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="ejemplo@email.com" 
              required 
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input 
              type="tel" 
              className="form-control" 
              id="telefono" 
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="+56 9 1234 5678" 
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="perrito" className="form-label">Perrito interesado en adoptar</label>
            <select 
              className="form-select" 
              id="perrito" 
              name="perrito"
              value={form.perrito}
              onChange={handleChange}
              required
            >
              <option value="" selected disabled>Selecciona un perrito</option>
              <option value="Max">Max</option>
              <option value="Luna">Luna</option>
              <option value="Rocky">Rocky</option>
              <option value="Bella">Bella</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">Edad del adoptante / grupo familiar</label>
            <input 
              type="text" 
              className="form-control" 
              id="edad" 
              name="edad"
              value={form.edad}
              onChange={handleChange}
              placeholder="Ej: 25 años / familia de 4" 
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje adicional</label>
            <textarea 
              className="form-control" 
              id="mensaje" 
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="4" 
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          
          <div className="mb-3">
            <label htmlFor="preferencia" className="form-label">Preferencia de adopción</label>
            <select 
              className="form-select" 
              id="preferencia" 
              name="preferencia"
              value={form.preferencia}
              onChange={handleChange}
            >
              <option value="" selected disabled>Selecciona una opción</option>
              <option value="inmediata">Inmediata</option>
              <option value="próxima_semana">Próxima semana</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          
          <div className="mb-3 form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="terminos" 
              name="terminos"
              checked={form.terminos}
              onChange={handleChange}
              required 
            />
            <label className="form-check-label" htmlFor="terminos">
              Acepto los términos y condiciones de adopción
            </label>
          </div>
          
          <button type="submit" className="btn btn-custom w-100">Enviar</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer text-white text-center p-3">
        <p>&copy; 2025 Adopta un Amigo | Todos los derechos reservados</p>
      </footer>
    </>
  );
}