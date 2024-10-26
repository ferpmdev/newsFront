import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../login/Login';
import { Newspaper } from '../Newspaper/Newspaper';


export const AppRouter = () => {

    const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';


    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')  
                    ? <Route path="/auth/*" element={ <Login /> } />
                    : <Route path="/*" element={ <Newspaper /> } />
            }
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
