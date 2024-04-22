import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';


const Error = () => {
    return (
        <main className='error'>
            <section>
                <h2>ERROR 404</h2>
                <p>Page not found</p>
                <NavLink to="/">
                        <h3 >Back to home Page</h3>
                </NavLink>
            </section>
        </main>
    );
}

export default Error;