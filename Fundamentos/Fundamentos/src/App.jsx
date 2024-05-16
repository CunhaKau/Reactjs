import './App.css';


//1 - Importando componente
import PrimeiroComponente from './componentes/PrimeiroComponente';

// 3 - Importando TemplateExpressions
import TemplateExpression from './componentes/TemplateExpression';

//6 - Importando Hierarquia de Componentes
import HierarquiadeComponente from './componentes/HierarquiadeComponente';

//7 - Importanto Evento de Click
import EventoClick from './componentes/EventoClick';

//2 - Exibindo componente importado na tela
function App() {
  return(
  <div className="App">
    <h1>Fundamentos do React</h1>
    <PrimeiroComponente/>
    <TemplateExpression/>
    <HierarquiadeComponente />
    <EventoClick />
  </div>
  );
}

export default App;
