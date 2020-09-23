import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { AppLoading } from 'expo';

import AuthContext from '../contexts/auth';

import AppStack from './AppStack';
import Auth from './Auth';

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);

    //if (loading) {
        //return (
            //<View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                //<ActivityIndicator size="large" color="#999" />
            //</View>
        //);
        //return <AppLoading />;
    //}

    return signed ? <AppStack /> : <Auth />;
};

export default Routes;