import { useEffect, useState } from 'react';
import { Column } from '../Column/Column';
import { SMain } from './Main.styled';

export const Main = ({ cardsArray, setPopBrowse, setPopBrowseId}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const groupedCards = Object.groupBy(cardsArray, (card) => card.status);

    return (
        <SMain className="main">
            <div className="container">
                <div className="main__block">
                    {!isLoading ? (
                        <div className="main__content">
                            {Object.entries(groupedCards).map(([group, cards]) => {
                                return <Column cards={cards} status={group} key={group} setPopBrowse={setPopBrowse} setPopBrowseId={setPopBrowseId} />;
                            })}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>Подождите, идет загрузка...</div>
                    )}
                </div>
            </div>
        </SMain>
    );
};
