import React from "react";

const LOGIN_URL = 'http://localhost:3001/api/v1/user/profile';

const Login = () => {
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(responseData)
            });
            const responseData = await response.json();

            console.log(responseData); // Ajout du console.log ici

            if (responseData.userId && responseData.token) {
                window.location.assign('../index.html');
                localStorage.setItem('token', responseData.token);
            } else {
                console.log('Error 404 - User not found');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {/* Votre contenu de formulaire ici */}
        </form>
    );
};

export default Login;