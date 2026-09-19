import { useNavigate, useParams } from 'react-router-dom';

import { Calendar } from '../Calendar/Calendar';
import { Category } from '../Category/Category';
import { SPopBrowse } from './PopBrowse.styled';
import { getTheme, statusList } from '../../../data';
import { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/ContextAPI';

export const PopBrowse = () => {
    const { editTask, deleteTask, tasksById } = useContext(TaskListContext);

    const navigate = useNavigate();
    const { id } = useParams();

    const currentTask = tasksById[id];

    const [error, setError] = useState(null);
    const [currentCard, setCurrentCard] = useState(taskToCard(currentTask));

    useEffect(() => {
        // Move the side effect (navigation) into useEffect
        if (!currentTask) {
            navigate('/some-path');
        }
    }, [currentTask, navigate]);

    function taskToCard(Task) {
        return {
            title: Task.title,
            topic: Task.topic,
            status: Task.status,
            description: Task.description,
            date: Task.date,
        };
    }

    /**
     *
     * @param {Event} e
     */
    const closePopBrowse = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/');
    };
    const [isEditing, setIsEditing] = useState(false);

    // ` "_id": "659ad0aad0e154bebca2b6b3",
    //   "userId": "659abd3ad0e154bebca2b6b7",
    //   "title": "Новая задача 1!",
    //   "topic": "Research",
    //   "date": "2024-01-07T16:26:18.179Z",
    //   "description": "Подробное описание задачи",
    //   "status": "Без статуса"`;

    const theme = getTheme(currentTask.topic);

    const handleEditTaskButtonClick = async () => {
        setIsEditing(true);
    };

    /**
     *
     * @param {Event} e
     */
    const handleInputChange = (e) => {
        //e.preventDefault();
        e.stopPropagation();
        setError(null);

        setCurrentCard({ ...currentCard, [e.target.name]: e.target.value });
    };

    const handleCancelClick = () => {
        setCurrentCard(taskToCard(currentTask));
        setIsEditing(false);
    };

    /**
     *
     * @param {Date} date
     */
    const handleDateChange = (date) => {
        if (isEditing) {
            setCurrentCard({ ...currentCard, date: date.toISOString() });
        }
    };

    const handleSaveButtonClick = async () => {
        try {
            await editTask(currentCard, currentTask._id);
            navigate('/');
        } catch {
            setError(new Error('Заполните все поля верно!'));
        }
    };

    async function handleDeleteButton() {
        deleteTask(currentTask._id);
        navigate('/');
    }

    async function handleStatusButtonClick(status) {
        setCurrentCard({ ...currentCard, status: status });
    }

    return (
        <SPopBrowse className="pop-browse" id="popBrowse" onClick={closePopBrowse}>
            <div className="pop-browse__container">
                <div
                    className="pop-browse__block"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{currentCard.title}</h3>
                            <Category isActive={true} theme={theme} />
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">
                                {error ? `Статус ${error}` : 'Статус'}
                            </p>
                            <div className="status__themes">
                                {!isEditing ? (
                                    <div className="status__theme _gray">
                                        <p className="_gray">{currentCard.status}</p>
                                    </div>
                                ) : (
                                    statusList.map((status) => {
                                        const current =
                                            status.toLowerCase() ===
                                            currentCard.status.toLowerCase();
                                        return (
                                            <div
                                                key={status}
                                                onClick={() => {
                                                    handleStatusButtonClick(status);
                                                }}
                                                className={`status__theme ${current ? '_gray' : ''}`}
                                            >
                                                <p className={current ? '_gray' : ''}>{status}</p>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form
                                className="pop-browse__form form-browse"
                                id="formBrowseCard"
                                action="#"
                            >
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-browse__area"
                                        name="description"
                                        id="textArea01"
                                        readOnly={!isEditing}
                                        placeholder="Введите описание задачи..."
                                        value={currentCard.description || ''}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </form>
                            <Calendar
                                className="pop-new-card__calendar calendar"
                                currentDate={new Date(currentTask.date)}
                                onChange={handleDateChange}
                                isEditing={isEditing}
                            />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">{currentCard.topic}</p>
                            </div>
                        </div>
                        <div className={`pop-browse__btn-browse ${!isEditing ? '' : '_hide'}`}>
                            <div className="btn-group">
                                <button
                                    className="btn-browse__edit _btn-bor _hover03"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleEditTaskButtonClick();
                                    }}
                                >
                                    Редактировать задачу
                                </button>
                                <button
                                    className="btn-browse__delete _btn-bor _hover03"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleDeleteButton();
                                    }}
                                >
                                    Удалить задачу
                                </button>
                            </div>
                            <button
                                className="btn-browse__close _btn-bg _hover01"
                                onClick={closePopBrowse}
                            >
                                Закрыть
                            </button>
                        </div>
                        <div className={`pop-browse__btn-edit ${isEditing ? '' : '_hide'}`}>
                            <div className="btn-group">
                                <button
                                    className="btn-edit__edit _btn-bg _hover01"
                                    onClick={handleSaveButtonClick}
                                >
                                    Сохранить
                                </button>
                                <button
                                    className="btn-edit__edit _btn-bor _hover03"
                                    onClick={handleCancelClick}
                                >
                                    Отменить
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                >
                                    Удалить задачу
                                </button>
                            </div>
                            <button
                                className="btn-edit__close _btn-bg _hover01"
                                onClick={closePopBrowse}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SPopBrowse>
    );
};
