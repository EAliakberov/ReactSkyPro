import { useContext, useEffect, useMemo, useState } from 'react';
import { Column } from '../Column/Column';
import { SMain } from './Main.styled';
import { statusList } from '../../../data';
import { useNavigate } from 'react-router-dom';
import { TaskListContext } from '../../context/ContextAPI';
import { EmptyColumn } from '../EmptyColumn/EmptyColumn';

export const Main = () => {
    const navigate = useNavigate();
    const { tasks, loadTasks, error: taskError } = useContext(TaskListContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadTasks()
            .catch(() => {
                navigate('/signin');
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            });
    }, [loadTasks, navigate]);

    const groupedTasks = useMemo(() => {
        return Object.groupBy(tasks, (card) => card.status?.toLowerCase() || 'без статуса');
    }, [tasks]);

    return (
        <SMain className="main">
            <div className="container">
                <div className="main__block">
                    {tasks.length <= 0 ? <div className="main_message">Новых задач нет</div> : null}
                    {!isLoading && !taskError ? (
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
                        !taskError && (
                            <div className="main__content">
                                {statusList.map((status, i) => {
                                    const a = [5, 1, 3, 1, 1];
                                    return (
                                        <EmptyColumn
                                            cardsCount={a[i] || 1}
                                            status={status}
                                            key={status}
                                        ></EmptyColumn>
                                    );
                                })}
                            </div>
                        )
                    )}
                    
                </div>
            </div>
        </SMain>
    );
};
