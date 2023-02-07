import React from "react";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Articulos } from "../components/pages/Articulos";
import { Inicio } from "../components/pages/Inicio";

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* LAYOUT */}
      <Header />
      <Nav />

      {/* CONTENIDO CENTRAL Y  RUTAS */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
        </Routes>
      </section>
      <Sidebar />

      <Footer />
    </BrowserRouter>
  );
};
