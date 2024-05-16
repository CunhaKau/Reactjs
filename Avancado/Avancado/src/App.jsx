import './App.css'

//11- Importanto imagem do Assets
import ibirapuera from "./assets/Ibirapuera.jpg";

//12- Importando Hooks
import Dados from './assets/componentes/Dados';

function App() {
 
  return (
    <div className="AppAvancado" style={{paddingBottom: "300px"}}>
      <h1>Próximos passos React js</h1>
   

      {/*10 - Inserindo imagem do Public*/}
      <img src="/SP.jpg" alt="Imagem de cima, São Paulo" />

      {/* Importando imagem do Assets */}
      <img src={ibirapuera} alt="Foto do Parque Ibirapuera" />
      
      {/* Importando Hooks*/}
      <Dados />
    </div>
  )
}

export default App;
