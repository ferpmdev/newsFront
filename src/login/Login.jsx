import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm, useLoginStore } from '../hooks'
import './login.css';


const loginFormFields = {
    loginEmail:    '',
    loginPassword: '',
}

export const Login = () => {

    const { startLogin, errorMessage } = useLoginStore();

    const { loginEmail, loginPassword, onInputChange } = useForm( loginFormFields );

    const loginSubmit = ( event ) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }


    useEffect(() => {
      if ( errorMessage !== undefined ) {
        Swal.fire('Email y password no válidos', errorMessage, 'error');
      }    
    }, [errorMessage])


    return (
        <div className="login-container">
            <div className="row">
                <h2>Welcome to The Last News</h2>
                <hr />
                <div className="login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={ loginSubmit }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={ loginEmail }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={ loginPassword }
                                onChange={ onInputChange }
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}