import { useState } from "react";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [msg, setMsg] = useState("");

  function calcImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMsg("Você está Abaixo do peso " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMsg("Você está no peso ideal " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMsg("Você está Acima do peso ideal " + imc.toFixed(2));
    } else if (imc > 34.9) {
      setMsg("Cuidado você está com obesidade! " + imc.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 123"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="text"
          placeholder="Altura em (cm) Ex: 193"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcImc}>Calcular</button>
      </div>

      <h2>{msg}</h2>
    </div>
  );
}
