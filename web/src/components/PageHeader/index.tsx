import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// No tipescrypt interface para definir o formato das tipagens de um objeto

interface PageHeaderProps {
    title: string;
    description ?: string;
}

// No react a forma mais facil de declarar as tipagens das propriedades é uma funcao no formato de constante 

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to ="/">
                   <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;