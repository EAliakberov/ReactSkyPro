import { Card } from '../Card/Card';

export const Column = ({ status, cards }) => {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{status}</p>
            </div>
            <div className="cards">
                {cards.map((card) => (
                    <Card theme={card.theme} taskTitle={card.text} date={card.date} key={card.id} />
                ))}
            </div>
        </div>
    );
};
