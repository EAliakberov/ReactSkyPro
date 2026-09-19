import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { PopBrowsePage } from '../pages/PopBrowsePage.jsx';
import { PopExitPage } from '../pages/PopExitPage.jsx';
import { PopNewCardPage } from '../pages/PopNewCardPage.jsx';

import { PopUserPage } from '../pages/PopUserPage.jsx';
import { ErrorPage } from '../pages/ErrorPage.jsx';
import { PrivatePage } from '../pages/PrivatePage.jsx';
import { SingInUp } from './SingInUp/SingInUp.jsx';

export const AppRoutes = () => {
    //const [popBrowseId, setPopBrowseId] = useState(0);
    
    const [tasks, setTasks] = useState([]);

    const [userData, setUserData] = useState(() => {
        try {            
            const localUserData = localStorage.getItem('userData');
            return localUserData ? JSON.parse(localUserData) : null;
        } catch {
            return null;
        }
    });

    useEffect(() => {
        if (userData === null) {
            localStorage.removeItem('userData');
        } else {
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [userData]);

    return (
        <Routes>
            <Route element={<PrivatePage isAuth={!!userData} />}>
                <Route
                    path="/"
                    element={
                        <MainPage
                            userData={userData}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    }
                >
                    <Route
                        path="/browse/:id"
                        element={<PopBrowsePage userData={userData} setTasks={setTasks} />}
                    />
                    <Route path="/exit" element={<PopExitPage setUserData={setUserData} />} />
                    <Route
                        path="/new_card"
                        element={<PopNewCardPage userData={userData} setTasks={setTasks} />}
                    />
                    <Route path="/user" element={<PopUserPage />} />
                </Route>
            </Route>

            <Route
                path="/signin"
                element={<SingInUp isSignIn={true} setUserData={setUserData} />}
            />
            <Route
                path="/signup"
                element={<SingInUp isSignIn={false} setUserData={setUserData} />}
            />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};
