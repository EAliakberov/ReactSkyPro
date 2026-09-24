import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { PopBrowsePage } from '../pages/PopBrowsePage.jsx';
import { PopExitPage } from '../pages/PopExitPage.jsx';
import { PopNewCardPage } from '../pages/PopNewCardPage.jsx';

import { PopUserPage } from '../pages/PopUserPage.jsx';
import { ErrorPage } from '../pages/ErrorPage.jsx';
import { PrivatePage } from '../pages/PrivatePage.jsx';
import { SingInUp } from './SingInUp/SingInUp.jsx';
import { useContext } from 'react';
import { UserContext } from '../context/ContextAPI.jsx';

export const AppRoutes = () => {
    const { userData } = useContext(UserContext);

    return (
        <Routes>
            <Route element={<PrivatePage />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="/browse/:id" element={<PopBrowsePage />} />
                    <Route path="/exit" element={<PopExitPage />} />
                    <Route path="/new_card" element={<PopNewCardPage />} />
                    <Route path="/user" element={<PopUserPage />} />
                </Route>
            </Route>

            <Route
                path="/signin"
                element={userData ? <Navigate to="/" replace /> : <SingInUp isSignIn={true} />}
            />
            <Route
                path="/signup"
                element={userData ? <Navigate to="/" replace /> : <SingInUp isSignIn={false} />}
            />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};
