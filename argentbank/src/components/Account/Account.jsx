import './account.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Account = ({ title, amount, description, transaction }) => {
    const navigate = useNavigate();

    const redirectToErrorPage = () => {
        navigate('/error');
    };


    return (
        <section className="account">
            <header>
                <h3>{title}</h3>
                <b>{amount}</b>
                <p>{description}</p>
            </header>
            <button onClick={redirectToErrorPage}>{transaction}</button>
        </section>
    );
};

export default Account;