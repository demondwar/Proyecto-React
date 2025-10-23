import React from "react";
import { Link } from "react-router-dom";

const Adopcion = () => {
  const perritos = [
    {
      id: 1,
      nombre: "LUNA",
      edad: "2 meses",
      genero: "Hembra",
      raza: "Mestiza",
      imagen: "/img/adopcion1.jpeg",
      descripcion: "Luna es una cachorrita curiosa y llena de vida. Siempre está explorando su entorno y aprendiendo cosas nuevas. Le encanta jugar, perseguir pelotas y hacer nuevos amigos, tanto humanos como perritos. Su ternura y simpatía hacen que cualquiera se enamore de ella al instante."
    },
    {
      id: 2,
      nombre: "MAX",
      edad: "2 años",
      genero: "Macho",
      raza: "Boxer",
      imagen: "/img/adopcion2.jpeg",
      descripcion: "Max es un boxer lleno de energía y entusiasmo. Le encanta jugar al aire libre, correr y recibir caricias. Es muy leal y protector con su familia, siempre listo para acompañarte en cualquier aventura. Su alegría es contagiosa y se lleva muy bien con niños y otros perritos."
    },
    {
      id: 3,
      nombre: "ROCKY",
      edad: "3 años",
      genero: "Macho",
      raza: "Galgo",
      imagen: "/img/adopcion3.jpeg",
      descripcion: "Rocky es un galgo tranquilo y elegante, que disfruta de paseos largos y momentos de descanso al sol. Es muy cariñoso y paciente, ideal para hogares que busquen un compañero apacible y afectuoso. Rocky tiene un corazón noble y se adapta bien a la vida familiar, brindando amor y calma a quienes lo rodean."
    },
    {
      id: 4,
      nombre: "BELLA",
      edad: "1 año",
      genero: "Hembra",
      raza: "Chihuahua",
      imagen: "/img/adopcion4.jpeg",
      descripcion: "Bella es juguetona y muy cariñosa. Le encanta estar con niños y se adapta fácilmente a la vida familiar. Su energía y simpatía la hacen la compañera perfecta para cualquier hogar que quiera adoptarla."
    }
  ];

  return (
    <>
      {/* Perritos disponibles */}
      <section className="container my-5">
        <h2 className="text-center text-danger mb-4">PERRITOS EN BUSCA DE UNA FAMILIA 🐶</h2>
        <div className="row g-4">
          {perritos.map((perrito) => (
            <div key={perrito.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow h-100 d-flex flex-column">
                <img 
                  src={perrito.imagen} 
                  className="card-img-top" 
                  alt={perrito.nombre}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{perrito.nombre}</h5>
                  <p className="card-text"><strong>EDAD:</strong> {perrito.edad}</p>
                  <p className="card-text"><strong>GENERO:</strong> {perrito.genero}</p>
                  <p className="card-text"><strong>RAZA:</strong> {perrito.raza}</p>
                  <p className="card-text">{perrito.descripcion}</p>
                  <div className="mt-auto">
                    <Link to="/contacto" className="btn btn-custom w-100">
                      Adóptame
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-white text-center p-3">
        <p>&copy; 2025 Adopta un Amigo | Todos los derechos reservados</p>
      </footer>
    </>
  );
};

export default Adopcion;