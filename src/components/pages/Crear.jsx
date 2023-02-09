import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useform";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const guardarArticulo = async (e) => {
    e.preventDefault();
    //Recoger ddatos del formulario
    let nuevoArticulo = formulario;

    //Guardar articulo en el back
    const { datos, cargando } = await Peticion(
      Global.url + "crear",
      "POST",
      nuevoArticulo
    );
    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }
    // console.log(datos);
  };

  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>
      <p>Formulario para crear un articulo</p>

      <strong>
        {resultado == "error" ? "Los datos proporcionados con incorrectos" : ""}
      </strong>
      {/* Creando Formulario */}
      <form className="formulario" onSubmit={guardarArticulo}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea name="contenido" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};
