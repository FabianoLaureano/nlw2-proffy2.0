import React, { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

import AuthContext from './contexts/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { signed } = useContext(AuthContext);

    //console.log('rota', signed)

    return (

        <Route
            {...rest}
            render={ props => !!signed
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
            }
        />
    )
}

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/landing" component={Landing} />
            <PrivateRoute path="/study" component={TeacherList} />
            <PrivateRoute path="/give-classes" component={TeacherForm} />
        </Switch>
    </BrowserRouter>

);

export default Routes;