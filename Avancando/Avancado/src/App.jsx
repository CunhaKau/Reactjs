import './App.css'

//9-importando imagem do assets
import ibirapuera from "./assets/Ibirapuera.jpg";

//10-Importando hooks - useState
import Dados from './componentes/Dados';

function App() {
 

  return (
    <div className="AppAvancando" style={{paddingBottom: "300px"}}>
      <h1>Próximos passos React js</h1>
    
    
    {/*8 - inserindo imagem do public*/}
    <img src="/SP.jpg" alt="Imagem de Cima, São Paulo" />

    {/*importando imagem do assets*/}
    <img src={ibirapuera} alt="Foto do Parque Ibirapuera" />

    {/*Importando hooks*/}
    <Dados />

    </div>
  )
}

export default App;
