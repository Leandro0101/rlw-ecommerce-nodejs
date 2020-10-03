import React, { useState, useEffect } from 'react';

import Header from '../../Components/Header';

import './styles.css';

function Register() {
    return (
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Nome" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Senha" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" />
            </div>

            <div className="footer row">
                <div className="col-6">
                    <button class="btn-register">Cadastrar</button>
                </div>
                <div className="col-6">
                    <a href="" className="forgot-link">Esqueci a senha</a>
                </div>
            </div>
        </div>
    );
}

function Log_in() {
    return (
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Senha" />
            </div>

            <div className="footer row">
                <div className="col-6">
                    <button class="btn-register">Cadastrar</button>
                </div>
                <div className="col-6">
                    <a href="" className="forgot-link">Esqueci a senha</a>
                </div>
            </div>
        </div>
    );
}

function Login() {
    const [showLogin, setShowLogin] = useState(false);

    // useEffect(() => {
    //     console.log('Estado:' + showLogin);
    // }, [showLogin])
    
    console.log('Estado:' + showLogin);

    return (
        <>
            <Header title="Minha conta" />

            <div className="accordion login-container" id="accordionExample">
                <div className="login">

                    <div className="buttons">
                        <button className="btn btn-link btn-block text-left" onClick={() => setShowLogin(true)} type="button" >
                            Cadastro
                        </button>
                        <button className="btn btn-link btn-block text-left" onClick={() => setShowLogin(false)} type="button" >
                            Login
                        </button>
                    </div>

                    <div className="content">
                        {showLogin ? <Register /> : <Log_in />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;