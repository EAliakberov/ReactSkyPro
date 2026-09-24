import { useContext, useEffect, useMemo, useState } from 'react';
import { Column } from '../Column/Column';
import { SMain } from './Main.styled';
import { statusList } from '../../../data';
import { useNavigate } from 'react-router-dom';
import { TaskListContext } from '../../context/ContextAPI';

export const Main = () => {
    const navigate = useNavigate();
    const { tasks, loadTasks, error: taskError } = useContext(TaskListContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    //поправить позже
    useEffect(() => {
        setIsLoading(true);
        loadTasks()
            .then(() => {})
            .catch(() => {
                setError(taskError);
                navigate('/signin');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const groupedTasks = useMemo(() => {
        return Object.groupBy(tasks, (card) => card.status?.toLowerCase() || 'без статуса');
    }, [tasks]);

    return (
        <SMain className="main">
            <div className="container">
                <div className="main__block">
                    {!isLoading && !error ? (
                        <div className="main__content">
                            {statusList.map((status) => {
                                return (
                                    <Column
                                        cards={groupedTasks[status.toLowerCase()] || []}
                                        status={status}
                                        key={status}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        !error && (
                            <div style={{ textAlign: 'center' }}>Подождите, идет загрузка...</div>
                        )
                    )}
                </div>
            </div>
        </SMain>
    );
};
