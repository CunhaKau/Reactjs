import './App.css'

import PrimeiroComponente from './componentes/PrimeiroComponente';

//3- Importando o Template Expression
import TemplateExpression from './componentes/TemplateExpression';

//5 - Hierarquia de Componentes
import HierarquiadeComponente from './componentes/HierarquiadeComponente';

//6 - Evento Click
import EventoClick from './componentes/EventoClick';

//2- Exibindo o componente na tela
function App() {
  return(
  <div className="App">
   <h1>Fundamentos do React</h1>
   <PrimeiroComponente />
   <TemplateExpression />
   <HierarquiadeComponente />
   <EventoClick />
  </div>
  )
}

export default App