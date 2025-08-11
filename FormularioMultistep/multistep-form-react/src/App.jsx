import { GrFormNext, GrFormPrevious } from "react-icons/gr"; 
import{FiSend} from 'react-icons/fi';
import './App.css';
//components
import UsuarioForm from "./components/UsuarioForm";
import AvaliacaoForm from "./components/AvaliacaoForm";
import Obrigado from "./components/Obrigado";
import Etapas from "./components/etapas";

//Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

const formTemplate = {
name: "",
email: "",
review: "",
comment: "",
};

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UsuarioForm data={data} updateFieldHandler={updateFieldHandler} />, 
    <AvaliacaoForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Obrigado data={data} />
  ];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

  return (
      <div className="App">
        <div className="Header">
       <h2>Deixe a sua avaliação</h2>
       <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para
        avaliar o produto
       </p>
      </div>
      <div className="form-container">
        <Etapas currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            )}
            {!isLastStep ? (
            <button type="submit">
              <GrFormNext />
              <span>Avançar</span>
            </button>
            ) : (
              <button type="button">
              <FiSend/>
              <span>Enviar</span>
            </button>
            )}
          </div>
        </form>
      </div>
      </div>
   
  );
}

export default App;
