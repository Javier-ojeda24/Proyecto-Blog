import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useform";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";

export const Editar = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const [articulo, setArticulo] = useState({});
  const params = useParams();

  const conseguirArticulo = async () => {
    const { datos } = await Peticion(
      Global.url + "articulo/" + params.id,
      "GET"
    );
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
  };

  useEffect(() => {
    conseguirArticulo();
  }, [articulo]);

  const guardarArticulo = async (e) => {
    e.preventDefault();
    //Recoger datos del formulario
    let nuevoArticulo = formulario;

    //Guardar articulo en el back
    const { datos } = await Peticion(
      Global.url + "crear",
      "POST",
      nuevoArticulo
    );
    if (datos.status === "success") {
      setResultado("Guardado");
    } else {
      setResultado("error");
    }

    //Subir la imagen
    const fileInput = document.querySelector("#file");

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("guardado");

      const formData = new FormData();
      formData.append("file0", fileInput.files[0]);

      const subida = await Peticion(
        Global.url + "subir-imagen/" + datos.articulo._id,
        "POST",
        formData,
        true
      );
      // console.log(subida);

      if (subida.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }
    }
  };

  return (
    <div className="jumbo">
      <h1>Editar articulo</h1>
      <p>Formulario para editar: {articulo.titulo}</p>

      <strong>
        {resultado == "error" ? "Los datos proporcionados son incorrectos" : ""}
      </strong>
      <strong>
        {resultado == "guardado" ? "Articulo guardado con exito!!!!" : ""}
      </strong>
      {/* Creando Formulario */}
      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            name="titulo"
            onChange={cambiado}
            value={articulo.titulo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea
            name="contenido"
            onChange={cambiado}
            value={articulo.contenido}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
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
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
