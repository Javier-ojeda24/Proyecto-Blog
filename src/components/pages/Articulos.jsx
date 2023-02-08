import React from "react";
import { useState, useEffect } from "react";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    conseguirArticulos();
  }, []);
  const conseguirArticulos = async () => {
    const url = "http://localhost:3900/api/articulos";
    const peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();
    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
      {articulos.length >= 1 ? (
        articulos.map((articulo) => {
          return (
            <article key={articulo._id} className="articulo-item">
              <div className="mascara">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--Y3Elq6xg--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
                  alt="react"
                />
              </div>
              <div className="datos">
                <h3 className="title">{articulo.titulo}</h3>
                <p className="description">{articulo.contenido}</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
              </div>
            </article>
          );
        })
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};
