import { useDispatch, useSelector } from 'react-redux';
import newsApi from '../api/newsApi';
// import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';
import { onChecking, onLogin, onLogout, onClear, logOutNewspaper } from '../store';


export const useLoginStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await newsApi.post('/auth',{ email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
            
        } catch (error) {
            console.log({error})
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( onClear() );
            }, 30);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await newsApi.get('auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(logOutNewspaper());
        dispatch(onLogout());
    }

    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
    }

}