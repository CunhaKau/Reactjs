const EventoClick = () => {
  
    //8 - Função com handleClick
    const handleClick = () => {
        console.log("handleClick executou!")
    }

    //9 - Função de Renderização
    const renderizando = (x) =>{

        if(x) {
            return <h1>Renderizando X</h1>
        }
        else{
            return <h1>Renderizando Y</h1>
        }
    }
  
  
    return (
        <div>
    <div>
       <button onClick = {() => console.log("teste click")}>
       CLIQUE AQUI</button> 
    </div>

    {/*Chamando Função com handleClick*/}
    <div>
        <button onClick={handleClick}>Botão com função</button>
    </div>

    {/*Retornando a função com renderização*/}
     {renderizando(true)}
     {renderizando(false)}
    

    </div>
  )
}

export default EventoClick;