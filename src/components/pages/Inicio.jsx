import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="jumbo">
      <h1>Bienvenido al Blog</h1>
      <p>
        Blog desarrollado con el MERN Stack (Mongo, Express, React y NodeJS)
      </p>
      <Link to="/articulos" className="button">
        Ver los articulos
      </Link>
    </div>
  );
};
