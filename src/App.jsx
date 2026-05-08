import './App.css';
import { Header } from './components/Header/Header';
import { PopNewCard } from './components/PopNewCard/PopNewCard';
import { PopBrowse } from './components/PopBrowse/PopBrowse';
import { Main } from './components/Main/Main';
import { PopUser } from './components/PopUser/PopUser';

function App() {
    return (
        <>
            <div class="wrapper">
                
                {/*pop-up start*/}

                <PopUser />
                <PopNewCard />
                <PopBrowse />

                {/*pop-up end*/}

                <Header />
                <Main />
            </div>

            <script src="js/script.js"></script>
        </>
    );
}

export default App;
