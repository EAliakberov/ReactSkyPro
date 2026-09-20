import { useNavigate, useParams } from 'react-router-dom';

import { Calendar } from '../Calendar/Calendar';
import { Category } from '../Category/Category';
import { SPopBrowse } from './PopBrowse.styled';
import { getTheme, statusList } from '../../../data';
import { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/ContextAPI';

export const PopBrowse = () => {
    const { editTask, deleteTask, tasksById } = useContext(TaskListContext);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const currentTask = tasksById[id];

    function taskToCard(Task) {
        return {
            title: Task.title,
            topic: Task.topic,
            status: Task.status,
            description: Task.description,
            date: Task.date,
        };
    }

    const [currentCard, setCurrentCard] = useState(() => {
        if (currentTask) {
            return taskToCard(currentTask);
        } else return null;
    });

    useEffect(() => {
        if (!currentTask) {
            navigate('/');
        }
    }, [currentTask, navigate]);

    useEffect(() => {
        if (currentTask) {
            setCurrentCard(taskToCard(currentTask));
        }
    }, [currentTask]);

    if (!currentTask) {
        return null;
    }

    const theme = getTheme(currentTask.topic);

    const closePopBrowse = (e) => {
        e.preventDefault();
        navigate('/');
    };

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

    const handleEditTaskButtonClick = async () => {
        setIsEditing(true);
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
        try {
            await deleteTask(currentTask._id);
            navigate('/');
        } catch {
            setError(new Error('Не удалось удалить задачу'));
        }
    }

    async function handleStatusButtonClick(status) {
        setCurrentCard({ ...currentCard, status: status });
    }

    return (
        <SPopBrowse
            className="pop-browse"
            id="popBrowse"
            onMouseDown={(e) => {
                const isClickInsidePopup = e.target.closest('.pop-browse__block');
                if (!isClickInsidePopup) {
                    e.currentTarget.dataset.shouldClose = 'true';
                } else {
                    e.currentTarget.dataset.shouldClose = 'false';
                }
            }}
            onMouseUp={(e) => {
                // Проверяем, где ОТПУСТИЛИ мышь
                const isReleaseInsidePopup = e.target.closest('.pop-browse__block');
                if (e.currentTarget.dataset.shouldClose === 'true' && !isReleaseInsidePopup) {
                    closePopBrowse(e);
                }
                e.currentTarget.dataset.shouldClose = 'false';
            }}
        >
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{currentCard.title}</h3>
                            <Category isActive={true} theme={theme} />
                        </div>
                        <div className="pop-browse__status status">
                            {error && <p style={{ color: 'red' }}>{error?.message}</p>}
                            <p className="status__p subttl">Статус</p>
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
                                        style={error ? { outline: 'solid 1px red' } : undefined}
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
