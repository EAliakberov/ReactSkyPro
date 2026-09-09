import { Main } from '../components/Main/Main';
import { GlobalStyle } from '../App.styled';
import { Header } from '../components/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getTasks } from '../services/api';

const SWrapper = styled.div`
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
`;

export const MainPage = ({ userData, tasks, setTasks }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState('');
    //const [token, setToken] = useState('bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck');

    const fetchTasks = useCallback(async () => {
        if (!userData?.token) {
            setError('Нет авторизации');
            setIsLoading(false);
            navigate('/signin');
            return;
        }

        setIsLoading(false);
        try {
            const newTasks = await getTasks(userData.token);
            setTasks(newTasks);
        } catch (err) {
            setError(err.message);
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }, [userData]);

    //
    const tasksById = useMemo(() => {
        return tasks.reduce((map, task) => {
            if (task._id) {
                map[task._id] = task;
            }
            return map;
        }, {});
    }, [tasks]);

    //поправить позже
    useEffect(() => {
        queueMicrotask(() => {
            fetchTasks();
        });
    }, [fetchTasks]);

    return (
        <>
            <GlobalStyle />
            <SWrapper>
                <Header userData={userData} />
                <Main tasks={tasks} isLoading={isLoading} error={error} />

                <Outlet context={{ tasksById }} />
            </SWrapper>
        </>
    );
};
