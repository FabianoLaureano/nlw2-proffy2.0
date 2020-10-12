import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

import AuthContext from '../../contexts/auth';
import userEvent from '@testing-library/user-event';


// Esse é um componente do React, que é uma funcao com a primeira letra maiscula e que retorna um html */

// Toda vez que for usar uma varival javascript dentro do html usar {}

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    const { user, signOut } = useContext(AuthContext);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function handleSignOut() {
        signOut();
    }

    // user?.name evita o erro possibly null

    return (
        
        <div id="page-landing">

            <p className="user-name">{user?.name}</p>

            <div className="user-info">
                <img  className="user-avatar" src={user?.avatar} alt="avatar"/>   
            </div>

            <div id="page-landing-content" className="container">                

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                /> 

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar aulas
                    </Link>               

                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexôes já realizadas <img src={purpleHeartIcon} alt="Coracao roxo" />
                </span>

            </div>

            <div className="log-out" onClick={handleSignOut}>
                <FiLogOut size={36} color="#FFF" />
            </div>
        </div>
    )
}

export default Landing;