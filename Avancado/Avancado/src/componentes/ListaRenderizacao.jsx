    import {useState} from "react";
    
    const ListaRenderizacao = () => {
       
        //13 - Lista de renderização
        const [lista] = useState (["Matheus", "Pedro", "Josias"]);
   
        //14 - Propriedade key
        const [usuarios, setUsuarios] = useState ([
            { id: 1, name: "Matheus", age: 31 },
            { id: 2, name: "Pedro", age: 20 },
            { id: 3, name: "Josias", age: 19 },
        ]);


        const deletandoaleatoriamente = () =>{

            const numeroAleatorio = Math.floor(Math.random() * 4);

            setUsuarios((prevUsuarios) => 
                prevUsuarios.filter ((usuarios) => numeroAleatorio !== usuarios.id)
        );
        };

        


        return (
        <div>

            {/* render key - agora com índice */}
        <ul>
            {lista.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/* render COM key */}
            <ul>
                {usuarios.map((usuarios) => (
                    <li>{usuarios.name} - {usuarios.age} anos</li>
                ))}
            </ul>


        {/* 6 - Previous State */}
        <button onClick={deletandoaleatoriamente}>Deletando Usuário Aleatoriamente</button>    
        </div>
      )
    }
    
    export default ListaRenderizacao;