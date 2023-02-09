import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useform";

export const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const guardarArticulo = (e) => {
    e.preventDefaul();
    //Recoger ddatos del formulario
    let nuevoArticulo = JSON.stringify(formulario);

    //Guardar articulo en el back
    
  };

  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>
      <p>Formulario para crear un articulo</p>
      <pre>{JSON.stringify(formulario)}</pre>
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
