import React, { useState, useEffect } from 'react';

import accountData from '../../data/accountData.json';
import Account from '../../components/Account/Account';
import './profil.css';
function Profil() {
    

    return (
        <main className='profil'>
            <section className='profil-header'>
                <h2>
                    Welcome back <br />  !  
                </h2>
                <button>Edit Name</button>
            </section>
            {accountData.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                    transaction={account.transaction}
                />
            ))}
        </main>
    )
}

export default Profil;