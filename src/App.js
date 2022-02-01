import { useState } from "react";
import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

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
          placeholder="Peso em (kg) Ex: 123"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button>Calcular</button>
      </div>

      <h2>Seu imc foi 25, você está abaixo do Peso!</h2>
    </div>
  );
}
