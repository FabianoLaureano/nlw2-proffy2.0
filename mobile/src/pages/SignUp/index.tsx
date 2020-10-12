import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

const SignUp: React.FC = () => {
    const { navigate } = useNavigation();

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

    async function handleNavigateToSignUp() {
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
            navigate('SignIn');

            return response;

        } catch (err) {
            simpleAlertHandler();
            return err.message;
        }
    }

    return (
        
        <View style={styles.container}>

            <Text style={styles.title}>Crie sua conta gratuíta</Text>
            <Text style={styles.description}>
                Basta preencher esses dados e você estara conosco.
            </Text>

            <View style={styles.textSignUpContainer}>
                <Text style={styles.signUpText}>Preencha seus dados</Text>
            </View>

            <View style={styles.signUpForm}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder="Nome"
                    placeholderTextColor="#c1bccc"
                />

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="E-mail"
                    placeholderTextColor="#c1bccc"
                    autoCapitalize='none'
                />

                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    placeholder="Senha"
                    placeholderTextColor="#c1bccc"
                    secureTextEntry={true}
                    autoCapitalize='none'
                />
            </View>
    
            <RectButton onPress={handleNavigateToSignUp} style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Concluir cadastro</Text>
            </RectButton>
    
        </View>
    );
};

export default SignUp;