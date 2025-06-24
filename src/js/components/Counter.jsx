import React, { useState, useEffect } from "react";

const Counter = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Calcular horas, minutos y segundos
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  // Función auxiliar para rellenar con ceros
  const formatoDosDigitos = (valor) => valor.toString().padStart(2, "0");

  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
      <div className="p-3 bg-light border rounded text-center shadow">
        <h2>{formatoDosDigitos(horas)}</h2>
        <small>Horas</small>
      </div>
      <div className="p-3 bg-light border rounded text-center shadow">
        <h2>{formatoDosDigitos(minutos)}</h2>
        <small>Minutos</small>
      </div>
      <div className="p-3 bg-light border rounded text-center shadow">
        <h2>{formatoDosDigitos(segundosRestantes)}</h2>
        <small>Segundos</small>
      </div>
    </div>
  );
};

export default Counter;
