import { useEffect, useState } from 'react';
import { Column } from '../Column/Column';

export const Main = ({ cardsArray }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const groupedCards = Object.groupBy(cardsArray, (card) => card.status);

    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    {!isLoading ? (
                        <div className="main__content">
                            {Object.entries(groupedCards).map(([group, cards]) => {
                                return <Column cards={cards} status={group} key={group} />;
                            })}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>Подождите, идет загрузка...</div>
                    )}
                </div>
            </div>
        </main>
    );
};
