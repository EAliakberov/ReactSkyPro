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

    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <Routes>
            <Route element={<PrivatePage isAuth={isAuth} />}>
                <Route path="/" element={<MainPage isLoading={isLoading} isAuth={isAuth} />}>
                    <Route path="/browse/:id" element={<PopBrowsePage />} />
                    <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth} />} />
                    <Route path="/new_card" element={<PopNewCardPage />} />
                    <Route path="/user" element={<PopUserPage />} />
                </Route>
            </Route>

            <Route path="/signin" element={<SingInUp isSignIn={true} setIsAuth={setIsAuth} />} />
            <Route path="/signup" element={<SingInUp isSignIn={false} setIsAuth={setIsAuth} />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};
