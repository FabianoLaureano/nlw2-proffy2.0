import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="SignUp" component={SignUp}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;