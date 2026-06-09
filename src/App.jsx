import './App.styled.js';
import { Header } from './components/Header/Header';
import { PopNewCard } from './components/PopNewCard/PopNewCard';
import { PopBrowse } from './components/PopBrowse/PopBrowse';
import { Main } from './components/Main/Main';
import { PopExit } from './components/PopExit/PopExit';
import { cardsArray } from '../data';
import { useState } from 'react';
import { GlobalStyle } from './App.styled.js';

function App() {
    const [isPopExitShowed, setPopExitState] = useState(false);
    const [isPopNewCard, setPopNewCard] = useState(false);
    const [isPopBrowse, setPopBrowse] = useState(false);
    const [popBrowseId, setPopBrowseId] = useState(0);

    return (
        <>
            <GlobalStyle />
            <div className="wrapper">
                {/*pop-up start*/}

                {isPopExitShowed ? <PopExit setPopExitState={setPopExitState} /> : ''}
                {isPopNewCard ? <PopNewCard setPopNewCard={setPopNewCard} /> : ''}
                {isPopBrowse ? (
                    <PopBrowse setPopBrowse={setPopBrowse} popBrowseId={popBrowseId} />
                ) : (
                    ''
                )}

                {/*pop-up end*/}

                <Header setPopExitState={setPopExitState} setPopNewCard={setPopNewCard} />
                <Main
                    cardsArray={cardsArray}
                    setPopBrowse={setPopBrowse}
                    setPopBrowseId={setPopBrowseId}
                />
            </div>
        </>
    );
}

export default App;
