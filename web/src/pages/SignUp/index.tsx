import React, { FormEvent, useState } from 'react';
import { useHistory } from "react-router-dom";

//import signImg from '../../assets/images/success-background.svg';

import Input from '../../components/Input';

import api from '../../services/api';

import './styles.css';

const SignUp: React.FC = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const simpleAlertHandler = () => {
        //function to make simple alert
        alert('Dados invalidos para o cadastro do usuario');
    };

    const simpleAlertHandlerOk = () => {
        //function to make simple alert
        alert('Cadastro realizado com sucesso');
    };

    async function handleNavigateToSignUp(e: FormEvent) {
        e.preventDefault();

        try {
            const data = {
                name : name,
                email : email,
                senha : senha,            
                avatar: "",
                whatsapp: "",
                bio: "",
            };
        
            const response = await api.post('users', data);
        
            simpleAlertHandlerOk();
            history.push('login');

            return response;

        } catch (err) {
            simpleAlertHandler();
            return err.message;
        }
    }

    return (

        <div id="signup-page">

            <div className="signup">
                <div className="signup-form">
                    <h1>Cadastro</h1>
                    <form onSubmit={handleNavigateToSignUp}>
                        <Input 
                            name="name" 
                            label="Nome" 
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input 
                            name="email" 
                            label="E-mail" 
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <Input
                            type="password" 
                            name="senha" 
                            label="Senha" 
                            value={senha}
                            onChange={(e) => { setSenha(e.target.value) }}
                        />

                        <button type="submit">Conclir cadastro</button>
                    </form>
                
                </div>

            </div>

        </div>    
      );
};

export default SignUp;