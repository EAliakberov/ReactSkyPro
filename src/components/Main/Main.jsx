import { useMemo } from 'react';
import { Column } from '../Column/Column';
import { SMain } from './Main.styled';

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
                            {Object.entries(groupedTasks).map(([group, cards]) => {
                                return <Column cards={cards} status={group} key={group} />;
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
