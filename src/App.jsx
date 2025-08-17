import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    
    const ids = Array.from({ length: 42 }, (_, i) => i + 1);

    Promise.all(
      ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((res) => res.json())
          .then((data) => ({
            nombre: data.name,
            imagen: data.sprites.front_default,
            peso: data.weight / 10 + " kg",
          }))
      )
    )
      .then((pokemons) => setPokemons(pokemons))
      .catch((error) => console.error("Error al obtener los Pokémon:", error));
  }, []);

  return (
    <div className="container_poke">
      {pokemons.map((poke) => (
        <div className="pokemon" >
          <img className="pokemon_img" src={poke.imagen} alt={poke.nombre} />
          <p className="name">{poke.nombre}</p>
          <p className="peso">Peso: {poke.peso}</p>
          
        </div>
      ))}
    </div>
  );
}

export default App;
