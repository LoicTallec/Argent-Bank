import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProfile, editUserName } from '../../redux/auth.action';
import accountData from '../../data/accountData.json';
import Account from '../../components/Account/Account';
import './profile.css';


function Profil() {
const dispatch = useDispatch(); // 

const user = useSelector((state) => state.auth.user); // Selectionne "user" dans le reducer
const [editing, setEditing] = useState(false); // État pour gérer l'affichage du formulaire

useEffect(() => {
    dispatch(getProfile());
}, [dispatch]);

const edit = (e) => {
    e.preventDefault();
    setEditing(true); // Mettre à jour l'état pour afficher le formulaire
};

const cancel = (e) => {
    e.preventDefault();
    setEditing(false); // Mettre à jour l'état pour revenir au header
};

const save = async (e) => {
    e.preventDefault();
    const newUserName = e.target.elements.userName.value;
    dispatch(editUserName(newUserName));
    setEditing(false);
};

    return (
        <main className='profil'>
            
                {!editing ? (
                    <section className='profil-header'>
                    <h2>
                        Welcome back <br /> {user.firstName} {user.lastName} !  
                    </h2>

                        <button onClick={edit}>Edit</button>
                    </section>
                ) : (
                    <form className='profil-header' onSubmit={save}>
                        <p>Edit user name</p>

                        <label htmlFor="userName">User name :</label>
                        <input type="text" id="userName" defaultValue={user.userName} required />

                        <label htmlFor="firstName">First name</label>
                        <input type="text" id="firstName" defaultValue={user.firstName} disabled />

                        <label htmlFor="lastName">Last name</label>
                        <input type="text" id="lastName" defaultValue={user.lastName} disabled />
                        
                        <button type="submit">Save</button>
                        <button type="button" onClick={cancel}>Cancel</button>
                    </form>
                )}
                
            
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