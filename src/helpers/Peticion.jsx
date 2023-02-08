export const Peticion = async (url, metodo, datosGuardar = "") => {
  let cargando = true;

  let opciones = {
    method: "GET",
  };
  if (metodo == "GET" || metodo == "DELETE") {
    opciones = {
      method: metodo,
    };
  }
  if (metodo == "PUT" || metodo == "POST") {
    opciones = {
      method: metodo,
      body: JSON.stringify(datosGuardar),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  let call = await fetch(url, opciones);
  const datos = await call.json();

  cargando = false;
  return {
    datos,
    cargando,
  };
};
