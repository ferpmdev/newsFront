import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../login/Login';
import { Newspaper } from '../Newspaper/Newspaper';
import { useLoginStore } from '../hooks';
import { useEffect } from 'react';


export const AppRouter = () => {

    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    const { status, checkAuthToken } = useLoginStore();

    useEffect(() => {
        checkAuthToken();
    }, [])

    if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={<Login />} />
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<Newspaper />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    )
            }
        </Routes>
    )
}
