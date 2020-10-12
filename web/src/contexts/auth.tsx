import React, { createContext, useState, useEffect }  from 'react';

import api from '../services/api';

interface userInterface {
    name: string;
    email: string;
    avatar: string;
}

interface AuthContextData {
    signed: boolean;
    user: userInterface | null;
    //loading: boolean;
    signIn(email: string, senha: string): Promise<void>;
    signOut(): void;
}

const  AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    
    const [user, setUser] = useState<userInterface | null>(null);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = localStorage.getItem('@Auth:user');
            const storagedToken = localStorage.getItem('@Auth:token');

            if (storagedUser && storagedToken) {
                //api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

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

            //api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(user);

            localStorage.setItem('@Auth:user', JSON.stringify(user));
            localStorage.setItem('@Auth:token', token);

            return response.data.mensagem

            //console.log(response);

        } catch (err) {
            alert('Erro no login');
            return err.message;
        }
        
    }

    function signOut() {
        //AsyncStorage.clear().then(() => {
            setUser(null);
            localStorage.removeItem('@Auth:user');
            localStorage.removeItem('@Auth:token');
        //});
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