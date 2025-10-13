import React, { useState } from "react";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000/api";


export default function Hide() {
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState(null);
  const [error, setError] = useState(null);

  async function handleHide(e) {
    e.preventDefault();
    setError(null);
    setKey(null);
    if (!secret) return setError("Aun no ingresas tu secreto");

    try {
      const res = await fetch(`${API}/hide/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ secret }),
    });
      const data = await res.json();
      if (res.ok) {
        setKey(data.key);
        setSecret("");
      } else {
        setError(data.error || "Error al ocultar");
      }
    } catch (err) {
      setError("Error de conexión");
    }
  }

  return (
    <div>
      <form onSubmit={handleHide}>
        <div>
          <textarea
            rows={6}
            style={{ width: "100%" }}
            placeholder="Escribe tu Secreto"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: 8, }}>Ocultar</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {key && (
        <div style={{ marginTop: 12 }}>
          <p style={{fontWeight: "bold"} }>Esta Es Su Llave (solo la puede usar una vez):</p>
          <p>{key}</p>
          
        </div>
      )}
    </div>
  );
}
