const EventoClick = () => {

//8- Função no evento
const handleClick = () => {
    console.log("handleClik executou!")
}

//9 - Função de Renderização
const renderizando = (x) => {
    if(x) {
        return <h1>Renderizando X</h1>
    }
    else{
        return <h1> Renderizando Y</h1>
    }
}


    return (
    <div>
    
        <div>
             <button onClick = {() => console.log("Teste Click")}>EventoClick</button>
        </div>

    {/* Função no evento */}
         <div>
             <button onClick = {handleClick}>Botão com função</button>
         </div>

    {/* Função de Renderização */}
    {renderizando(true)}
    {renderizando(false)}
    
    </div>
  )
}

export default EventoClick;