import { useEffect, useState } from 'react';
import { UserContext } from './ContextAPI';
import { userLoginAPI, userRegisterAPI } from '../services/api';

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        try {
            const localUserData = localStorage.getItem('userData');
            return localUserData ? JSON.parse(localUserData) : null;
        } catch {
            return null;
        }
    });

    const logOut = async () => {
        setUserData(null);
    };

    const logIn = async ({ login, password }) => {
        try {
            const data = await userLoginAPI({ login, password });
            setUserData(data);

            return data;
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    const signUp = async ({ login, password, name }) => {
        try {
            const data = await userRegisterAPI({ login, password, name });
            setUserData(data);
            return userData;
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    useEffect(() => {
        if (userData === null) {
            localStorage.removeItem('userData');
        } else {
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, logIn, logOut, signUp }}>
            {children}
        </UserContext.Provider>
    );
};
