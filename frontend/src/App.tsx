import { useState } from 'react'
import axios from 'axios'

function App() {
  const [id, setId] = useState('')
  const [data, setData] = useState(null)

  const testMessage = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/`)
      setData(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados', error)
    }
  }
    const getAsset = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/getAsset`, {"id": id})
      setData(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados', error)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Insira o ID"
      />
      <button onClick={testMessage}>root test</button>
      <button onClick={getAsset}>Pegar dados do ativo</button>
      <button onClick={() => {}}>Alterar estado do ativo</button>
      <button onClick={() => {}}>Deletar ativo</button>
      <button onClick={() => {}}>Criar ativo</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  )
}

export default App