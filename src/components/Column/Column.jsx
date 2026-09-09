import { Card } from '../Card/Card';
import { SColuumn } from './Column.styled';

export const Column = ({ status, cards }) => {
    return (
        <SColuumn className="main__column">
            <div className="column__title">
                <p>{status}</p>
            </div>
            <div className="cards">
                {cards.map((card) => (
                    <Card key={card._id} {...card} />
                ))}
            </div>
        </SColuumn>
    );
};
