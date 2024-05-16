import {useState} from "react";

const Dados = () => {
  let mostreDados = 10;
  

  const [novoNumero, setNovoNumero] = useState(15);
  return (
    <div>
        <p>Valor: {mostreDados}</p>
    
    {/*13- Exibindo novo valor atribuido via useState*/}
    <p>Novo valor: {novoNumero}</p>
    
    {/*14- Exibindo um novo valor atráves de um evento de click */}
    <button onClick={() => setNovoNumero(20)}>Mudando o valor após o Click</button>
    </div>
  )
}

export default Dados;