import React, { createContext, useState, useEffect }  from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import { View, ActivityIndicator } from 'react-native';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    //loading: boolean;
    signIn(email: string, senha: string): Promise<void>;
    signOut(): void;
}

const  AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    //const data = {
        //email : "teste@email",
        //senha : "aaaa"
    //};

    const [user, setUser] = useState<object | null>(null);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@Auth:user');
            const storagedToken = await AsyncStorage.getItem('@Auth:token');

            if (storagedUser && storagedToken) {
                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
                //setLoading(false);
            }
        }

        loadStorageData();
    }, []);

    async function signIn(email: string, senha: string) {
        const data = {
            email : email,
            senha : senha
        };

        try {

            const response = await api.post('login', data);

            const { token, user } = response.data;

            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(user);

            await AsyncStorage.setItem('@Auth:user', JSON.stringify(user));
            await AsyncStorage.setItem('@Auth:token', token);

            return response.data.mensagem

        } catch (err) {
            return err.message;
        }
        
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    //if (loading) {
        //return (
            //<View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                //<ActivityIndicator size="large" color="#999" />
            //</View>
        //);
    //}

    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;