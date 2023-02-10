import React from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Link } from "react-router-dom";

export const Listado = ({ articulos, setArticulos }) => {
  const eliminar = async (id) => {
    let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE");
    if (datos == "success") {
      let articulosActualizados = articulos.filter((e) => e._id !== id);
      console.log(articulosActualizados);
      setArticulos(articulosActualizados);
    }
  };

  return articulos.map((articulo) => {
    return (
      <article key={articulo._id} className="articulo-item">
        <div className="mascara">
          {articulo.imagen != "default.png" && (
            <img src={Global.url + "imagen/" + articulo.imagen} />
          )}
          {articulo.imagen == "default.png" && (
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Y3Elq6xg--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
              alt="react"
            />
          )}
        </div>
        <div className="datos">
          <h3 className="title">
            <Link to={"/articulo/" + articulo._id}> {articulo.titulo} </Link>
          </h3>
          <p className="description">{articulo.contenido}</p>

          <button className="edit">Editar</button>
          <button
            className="delete"
            onClick={() => {
              eliminar(articulo._id);
            }}
          >
            Borrar
          </button>
        </div>
      </article>
    );
  });
};
