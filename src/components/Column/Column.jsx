import { Card } from '../Card/Card';
import { SColuumn } from './Column.styled';

export const Column = ({ status, cards, setPopBrowse,setPopBrowseId }) => {
    return (
        <SColuumn className="main__column">
            <div className="column__title">
                <p>{status}</p>
            </div>
            <div className="cards">
                {cards.map((card) => (
                    <Card
                        theme={card.theme}
                        taskTitle={card.text}
                        date={card.date}
                        key={card.id}
                        id={card.id}
                        setPopBrowse={setPopBrowse}
                        setPopBrowseId={setPopBrowseId}
                    />
                ))}
            </div>
        </SColuumn>
    );
};
