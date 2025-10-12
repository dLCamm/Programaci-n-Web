import React, { useState } from "react";
const API = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export default function Reveal() {
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState(null);
  const [error, setError] = useState(null);

  async function handleReveal(e) {
    e.preventDefault();
    setError(null);
    setSecret(null);
    if (!key) return setError("Debe de ingresar La Llave");

    try {
      const res = await fetch(`${API}/show/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });
      const data = await res.json();
      if (res.ok) {
        setSecret(data.secret);
      } else {
        setError(data.error || "Error al revelar");
      }
    } catch (err) {
      setError("Error de conexión");
    }
  }

  return (
    <div>
      <form onSubmit={handleReveal}>
        <div>
          <input
            style={{ width: "100%" }}
            placeholder="Ingrese la Llave"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: 8 }}>Revelar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {secret && (
        <div style={{ marginTop: 12 }}>
          <p><strong>Este es el Secreto (Se autodestruira):</strong></p>
          <p>{secret}</p>
        </div>
      )}
    </div>
  );
}
