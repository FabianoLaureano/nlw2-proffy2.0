import React, { FormEvent, useContext, useState } from 'react';
//import { View, ImageBackground, Text, TextInput, CheckBox } from 'react-native';
//import { RectButton } from 'react-native-gesture-handler';
//import AuthContext from '../../contexts/auth';
//import { useNavigation } from '@react-navigation/native';
import { Link, Redirect } from "react-router-dom";
//import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

//import signImg from '../../assets/images/success-background.svg';
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import Input from '../../components/Input';

import './styles.css';

const SignIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext);

    //const history = useHistory();

    //const { navigate } = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //console.log('user', user);
    //console.log('signed: ', signed);
    //console.log('user: ', user)

    //function handleNavigateToSignUp() {
        //navigate('SignUp');
        //history.push('/');
    //}

    function handleSignIn(e: FormEvent) {
        e.preventDefault();

        signIn(email, senha);
    }

    return (

        <div id="login-page">

            { signed ? (
                <Redirect to='/landing' />
            ) : (

            <div className="login">
                <div className="login-form">
                <h1>Fazer login</h1>
                <form onSubmit={handleSignIn}>
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
                    <section className="form-footer">
                        <div>
                            <label htmlFor="rememberMe">
                            Lembrar-me
                            <input type="checkbox" id="rememberMe" />
                            <span className="checkmark"></span>
                            </label>
                        </div>
                        <Link to="/forgot-password">
                            Esqueci minha senha
                        </Link>
                    </section>

                    <button type="submit">Entrar</button>
                </form>
                <div className="footer-login">
                    <div>
                    <p>Não tem uma conta?</p>
                    <Link to="/signup">
                        Cadastre-se
                    </Link>
                    </div>
                    <div>
                    <p>É de graça</p>
                    <img alt="purple heart" src={purpleHeartIcon} />
                    </div>
                </div>
                </div>
            </div>

            )}

        </div>    
      );
};

export default SignIn;