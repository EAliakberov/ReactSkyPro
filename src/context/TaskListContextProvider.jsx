import { useCallback, useContext, useMemo, useState } from 'react';
import { TaskListContext, UserContext } from './ContextAPI';
import { addTaskAPI, deleteTaskAPI, editTaskAPI, getTasksAPI } from '../services/api';

export const TaskListContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const { userData } = useContext(UserContext);
    const [error, setError] = useState();

    const loadTasks = useCallback(async () => {
        if (!userData?.token) {
            setError('Нет авторизации');
            return null;
        }

        try {
            const newTasks = await getTasksAPI(userData.token);
            setTasks(newTasks);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    }, [userData]);

    const tasksById = useMemo(() => {
        return tasks.reduce((map, task) => {
            if (task._id) {
                map[task._id] = task;
            }
            return map;
        }, {});
    }, [tasks]);

    const editTask = async (currentCard, id) => {
        try {
            const newTasks = await editTaskAPI(currentCard, id, userData.token);
            return setTasks(newTasks);
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    deleteTask;

    async function deleteTask(id) {
        try {
            const newTasks = await deleteTaskAPI(id, userData.token);
            setTasks(newTasks);
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    }

    const addTask = async (newCard) => {
        try {
            const newTasks = await addTaskAPI(newCard, userData.token);
            await setTasks(newTasks);
        } catch {
            setError(new Error('Заполните все поля верно!'));
        }
    };

    return (
        <TaskListContext.Provider
            value={{ tasks, editTask, loadTasks, deleteTask, tasksById, addTask }}
        >
            {children}
        </TaskListContext.Provider>
    );
};
