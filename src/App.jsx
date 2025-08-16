import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  
    return (
      <>
        <div className="container_poke">
          <div className="pokemon">
            <div className="pokemon_img">Imagen</div>

            <p class="name">Bulbasaur</p>
            <p class="name">Tierra</p>

          </div>
          <div className="pokemon">
            <div className="pokemon_img">I</div>
          </div>
          <div className="pokemon">
            <h1>hi</h1>
          </div>
          <div className="pokemon">
            <h1>hey</h1>
          </div>
          <div className="pokemon">
            <h1>hihi</h1>
          </div>
          <div className="pokemon">
            <h1>jeje</h1>
          </div>
          
            
          
        </div>
      </>
    ) 
}

export default App
