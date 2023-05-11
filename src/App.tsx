import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./paginas/home/Home";
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='titulo'>Inicio</h1><h1 className='titulo'>Entre em Contato</h1>
    </>
  );
}

export default App;