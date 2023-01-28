import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Articulos } from "../components/pages/Articulos";
import { Inicio } from "../components/pages/Inicio";

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* LAYOUT */}

      {/* CONTENIDO CENTRAL Y  RUTAS */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
