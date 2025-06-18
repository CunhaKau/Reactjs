import './App.css';

import PrimeiroComponente from './componentes/PrimeiroComponente';

// 3 - Importando TemplateExpressions
import TemplateExpressions from './componentes/TemplateExpressions';


//6 - Importando Hierarquia de Componentes
import HierarquiaComponente from './componentes/HierarquiaComponente';

//7- Importando evento de click
import EventoClick from './componentes/EventoClick';

// 2 - Exibindo componente importado na tela
function App() {
  return(
    <div className="AppFundamentos">
      <h1>Fundamentos do React</h1>
      <PrimeiroComponente />
      <TemplateExpressions />
      <HierarquiaComponente />
      <EventoClick />
    </div>
  )
}

export default App;
