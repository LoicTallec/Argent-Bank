import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProfile, editUserName } from '../../redux/auth.action';
import accountData from '../../data/accountData.json';
import Account from '../../components/Account/Account';
import './profile.css';


function Profil() {
const dispatch = useDispatch();    

const user = useSelector((state) => state.auth.user);
const [isEditing, setIsEditing] = useState(false); // État pour gérer l'affichage du formulaire

useEffect(() => {
    dispatch(getProfile());
}, [dispatch]);

const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true); // Mettre à jour l'état pour afficher le formulaire
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false); // Mettre à jour l'état pour revenir au header
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newUserName = e.target.elements.userName.value;
    dispatch(editUserName(newUserName));
    setIsEditing(false);
  };

    return (
        <main className='profil'>
            
                {!isEditing ? (
                    <section className='profil-header'>
                    <h2>
                        Welcome back <br /> {user.firstName} {user.lastName} !  
                    </h2>
                    <button onClick={handleEdit}>Edit</button>
                    </section>
                ) : (
                    <form onSubmit={handleSave}>
                        <p>Edit user name</p>
                        <label htmlFor="userName">User name :</label>
                        <input type="text" id="userName" defaultValue={user.userName} required />

                        <button type="submit">Save</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
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