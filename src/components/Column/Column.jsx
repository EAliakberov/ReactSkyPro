import { Card } from '../Card/Card';

export const Column = ({ status, cards }) => {
    return (
        <div class="main__column column">
            <div class="column__title">
                <p>{status}</p>
            </div>
            <div class="cards">
                {cards.map((card) => (
                    <Card
                        theme={card.theme}
                        taskTitle={card.text}
                        date={card.date}
                        style={card.style}
                    />
                ))}
            </div>
        </div>
    );
};
