import './App.css'

//2 - CSS de Componente
import MeuComponente from './assets/componentes/MeuComponente';

// 6 - CSS Modules
import Titulo from './assets/componentes/Titulo';

function App() {

  // 4 - css dinâmico inline 
  const n = 15;

  // 5 - Classe dinâmica
  const brownTitulo = true;

  return (
    
      <div className="App">
       {/* 1 - css global */}
       <h1 className="titulo">CSS no React</h1>

      {/* 2 - css de componente */}
      <MeuComponente />
      <p>Pegou o CSS do componente</p>

      {/* 3 - inline styles */}
      <p style={{color: "green", padding: "25px", borderLeft: "2px solid red"}}>Elemento com estilo inline</p>

      {/* 4 - inline styles dinâmico */}
      <h2 style={n > 10 ? {color:"yellow"} : {color: "red"}}>inline styles dinâmico</h2>
      <h2 style={n > 45 ? {color:"yellow"} : {color: "red"}}>inline styles dinâmico novo teste</h2>

      {/* 5 - Classe Dinâmica */}
      <h1 className={brownTitulo ? "brown-titulo" : "titulo"}>Título com Classe Dinâmica</h1>

      {/* 6 - CSS Modules */}
      <Titulo />

      </div>      
  )
}

export default App;
