import './App.css';
import { Header } from './components/Header/Header';
import { PopNewCard } from './components/PopNewCard/PopNewCard';
import { PopBrowse } from './components/PopBrowse/PopBrowse';
import { Main } from './components/Main/Main';
import { PopExit } from './components/PopExit/PopExit';
import { cardsArray } from '../data';

function App() {
    return (
        <>
            <div className="wrapper">
                {/*pop-up start*/}

                <PopExit />
                <PopNewCard />
                <PopBrowse />

                {/*pop-up end*/}

                <Header />
                <Main cardsArray={cardsArray} />
            </div>

            <script src="js/script.js"></script>
        </>
    );
}

export default App;
