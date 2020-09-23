import React, { useContext, useState } from 'react';
import { View, ImageBackground, Text, TextInput, CheckBox } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import loginBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

const SignIn: React.FC = () => {
    const { signed, user, signIn } = useContext(AuthContext);

    const { navigate } = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    //console.log(signed);
    //console.log(email);

    function handleNavigateToSignUp() {
        navigate('SignUp');
    }

    function handleSignIn() {
        signIn(email, senha);
    }

    return (
        
        <View style={styles.container}>

            <ImageBackground 
                source={loginBgImage}
                resizeMode="contain" 
                style={styles.content}
            >
    
                <Text style={styles.title}>Proffy</Text>
                <Text style={styles.description}>
                     Sua Plataforma de estudos online.
                </Text>

            </ImageBackground>

            <View style={styles.textLoginContainer}>
                <Text style={styles.loginText}>Fazer Login</Text>

                <Text onPress={handleNavigateToSignUp} style={styles.text}>Criar uma conta</Text>
            </View>

            <View style={styles.loginForm}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="E-mail"
                    placeholderTextColor="#c1bccc"
                />

                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    placeholder="Senha"
                    placeholderTextColor="#c1bccc"
                />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                //value={isSelected}
                //onValueChange={setSelection}
                style={styles.checkbox}
                />
                <Text style={styles.checkboxText}>Lembrar-me</Text>

                <Text style={styles.text}>Esqueci minha senha</Text>
            </View>
    
            <RectButton onPress={handleSignIn} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </RectButton>
    
        </View>
        
        //<View style={{flex: 1, justifyContent: 'center'}}>
            //<Button title="Sign in" onPress={handleSignIn} />
        //</View>
    );
};

export default SignIn;