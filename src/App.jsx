import { useState } from "react"
import Avaliacao from "./components/Avaliacao"
import GrupoAvaliacao from "./components/GrupoAvaliacao"
import './style.css'

function App() {
  const [componentType, setComponentType] = useState('unique');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
      { componentType == 'unique' ? <GrupoAvaliacao /> : <Avaliacao /> }
    </div>
  )
}

export default App
