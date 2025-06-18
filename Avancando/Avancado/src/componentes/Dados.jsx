import { useState } from "react";


const Dados = () => {
  let someDados = 10;

  const [novoNumero, setNovoNumero] = useState(15);

  return (
    <div>
        <p>Valor: {someDados}</p>
       
        
        {/*exibindo novo valor atribuido*/}
        <p> Novo Valor: {novoNumero}</p>

        {/*Exibindo um novo valor através de um evento de click*/}
        <button onClick={() => setNovoNumero(20)}>Mudando valor após o click</button>

        
    </div>
  )
}

export default Dados;