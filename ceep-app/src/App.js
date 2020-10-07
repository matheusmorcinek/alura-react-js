import React from 'react';
import { ListaDeNotas } from './components/listaDeNotas.jsx';

function App() {
  return (
    <div>
      <form>
        <input type='text' placeholder='Título'></input>
        <textarea placeholder='Escreva sua nota...'></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas />
    </div>
  );
}

export default App;
