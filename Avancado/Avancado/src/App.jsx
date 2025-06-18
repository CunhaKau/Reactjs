import './App.css';

//10- Importando imagem do Assets
import ibirapuera from "./assets/Ibirapuera.jpg";

//11- Importando Hooks - useState
import Dados from './componentes/Dados';


//13 - Importanto Lista Renderizada
import ListaRenderizacao from './componentes/ListaRenderizacao';

//16 - Importando Renderização Condicional
import RenderizacaoCondicional from './componentes/RenderizacaoCondicional';

//17 - Props
import MostrarNomedoUsuario from './componentes/MostrarNomedoUsuario';

//18 - Desestruturando Props
import DetalhesdoCarro from './componentes/DetalhesdoCarro';

//20 - renderização de listas com componentes
const carros = [
  {id: 1, marca: "Fiat", cor: "verde", km: 0},
  {id: 2, marca: "Ford", cor: "preto", km: 12000},
  {id: 3, marca: "Citroen", cor: "vermelho", km: 100000},
];

//21 - importando fragmento
import Fragmento from './componentes/Fragmento';

//22 - importando children prop
import Container from './componentes/Container';

//23 - importando função em prop
import FuncaoProp from './componentes/FuncaoProp';

import { useState } from 'react';

//25 - State lift
import Mensagem from './componentes/Mensagem';
import MudarMensagem from './componentes/MudarMensagem';

function App() {

  function showMessage(){
    console.log("Evento do componente pai");
  }

  //24 state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };


  return (
    <div className="AppAvancado">
      <h1>Próximos passos React JS</h1>

      {/* 9- Inserindo imagem do public */}
      <img src="/SP.jpg" alt="Imagem de Cima, São Paulo" />
       
       {/*Importando imagem do assets */}
       <img src={ibirapuera} alt="Foto do Parque Ibirapuera" />
      
      {/* importando Hooks */}
      <Dados />

      {/* importando Lista Renderizada */}
      <ListaRenderizacao />

      {/* importando Lista Condicional */}
      <RenderizacaoCondicional />

      {/* props */}
      <MostrarNomedoUsuario name = "Ana" />

      {/* desestruturando props */}
      <DetalhesdoCarro marca = "BMW" km = {200} cor = "azul" />

      {/* 19- reaproveitando componentes */}
      <DetalhesdoCarro marca = "HRV" km = {500} cor = "prata" />
      <DetalhesdoCarro marca = "Onix" km = {1500} cor = "branco" />

      {/* renderização de lista com componente */}
      {carros.map((carros) => (
        <DetalhesdoCarro key={carros.id} marca={carros.marca} cor={carros.cor} km={carros.km} />
      ))}

      {/* importando fragmento */}
      <Fragmento />

      {/* importando children */}
      <Container>
        <p>Exibindo Children</p>
      </Container>

      {/* função em prop */}
      <FuncaoProp minhaFuncao={showMessage}/>

      {/* state lift */}
      <Mensagem msg={message}/>
      <MudarMensagem handleMessage={handleMessage}/> 

    </div>
  )
}

export default App;
