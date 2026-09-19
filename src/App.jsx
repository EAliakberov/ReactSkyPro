import './App.styled.js';

import { AppRoutes } from './components/AppRoutes.jsx';
import { TaskListContextProvider } from './context/TaskListContextProvider.jsx';
import { UserContextProvider } from './context/UserContextProvider.jsx';

function App() {
    return (
        <UserContextProvider>
            <TaskListContextProvider>
                <AppRoutes />
            </TaskListContextProvider>
        </UserContextProvider>
    );
}

export default App;
