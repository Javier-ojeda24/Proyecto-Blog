import React from "react";
import { useState, useEffect } from "react";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";
import { Listado } from "./Listado";
import { useParams } from "react-router-dom";

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, [articulo]);
  const conseguirArticulo = async () => {
    const { datos, cargando } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    setCargando(false);
  };

  return (
    <div className="jumbo">
      {cargando ? (
        "Cargando...."
      ) : (
        <>
          {" "}
          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
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
          <p>{articulo.contenido}</p>
        </>
      )}
    </div>
  );
};
