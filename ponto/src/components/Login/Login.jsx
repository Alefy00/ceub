/* eslint-disable no-unused-vars */
import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <img src="./logo.png" alt="CEUB LOGO" className="logo"/>
                <h2 className="title">Prof Ponto</h2>
                <form className="login-form">
                    <div className="input-group">
                        <span className="icon"></span>
                        <input type="text"  placeholder="Matrícula" required/>
                    </div>
                    <div className="input-group">
                        <span className="icon"></span>
                        <input type="password"  placeholder="Senha" required/>
                    </div>
                    <button className="login-button" type="submit">Acessar</button>

                </form>

            </div>

        </div>
    )
}

export default Login;