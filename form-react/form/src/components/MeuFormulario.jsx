import "./MeuFormulario.css";

import { use, useState } from "react";

const MyForm = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const[biografia, setBiografia] = useState("");

    const [role, setRole] = useState("");
    
    const handleName = (e) => {
        setName(e.target.value);
    };


    //5- envio do form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name,email,biografia,role);

        //Limpar o formulário
        setName("");
        setEmail("");
        setBiografia("");
        setRole("");
    }

    console.log(name, email);

    return (
    
    <div>

    {/* 1 - criação de form */}
    {/* 5- Envio de Formulário */}
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} 
            //6 - Controlled Input
            value={name || ""}/>
            
        </div>

        {/* 2 - label envolvendo input */}
        <label>
            <span>E-mail:</span>
            <input type="text" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} 
            //6 - Controlled Input
            value={name || ""}/>
        </label>
        {/* 8 - textarea */}
        <label>
            <span>Biografia:</span>
            <textarea name="biografia" placeholder="Descrição do usuário"
            onChange={(e) => setBiografia(e.target.value)}
            value={biografia}></textarea>
        </label>
        {/* 9 - select */}
        <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)}
                value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
        </label>
        <input type="submit" value="Enviar" />
    </form>
    </div>
    );
};

export default MyForm;