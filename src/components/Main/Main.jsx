import { useMemo } from 'react';
import { Column } from '../Column/Column';
import { SMain } from './Main.styled';
import { statusList } from '../../../data';

export const Main = ({ tasks, isLoading, error }) => {
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
