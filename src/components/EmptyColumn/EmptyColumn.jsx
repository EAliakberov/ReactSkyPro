import { SEmptyColumn, SEmptyCard } from './EmptyColumn.styled';

export const EmptyColumn = ({ cardsCount, status }) => {
    return (
        <SEmptyColumn className="main__column">
            <div className="column__title">
                <p>{status}</p>
            </div>
            <div className="cards">
                {Array.from({ length: cardsCount }).map((_, i) => {
                    return (
                        <SEmptyCard className="cards__item" key={i}>
                            <div className="cards__card card">
                                <div className="card__group">
                                    <div className="card__theme"></div>
                                    <div className="card__btn"> </div>
                                </div>
                                <div className="card__content">
                                    <h3 className="card__title"></h3>
                                    <div className="card__date"></div>
                                </div>
                            </div>
                        </SEmptyCard>
                    );
                })}
            </div>
        </SEmptyColumn>
    );
};
