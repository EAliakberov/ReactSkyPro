import { useNavigate } from 'react-router-dom';
import { themes } from '../../../data';
import { Calendar } from '../Calendar/Calendar';
import { Categories } from '../Categories/Categories';

import { SPopNewCard } from './PopNewCard.styled';
import { useContext, useState } from 'react';

import { TaskListContext } from '../../context/ContextAPI';

export const PopNewCard = () => {
    const { addTask } = useContext(TaskListContext);

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [newCard, setNewCard] = useState({
        title: 'Новая задача',
        topic: 'Research',
        status: 'Без статуса',
        description: '',
        date: '2024-01-07T16:26:18.179Z',
    });

    const closePopBrowse = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleCreateTaskButtonClick = async () => {
        try {
            await addTask(newCard);
            navigate('/');
        } catch {
            setError(new Error('Заполните все поля верно!'));
        }
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setError(null);
        setNewCard({ ...newCard, [e.target.name]: e.target.value });
    };
    /**
     *
     * @param {Date} newDate
     */
    const handleDateChange = (newDate) => {
        setNewCard({ ...newCard, date: newDate.toISOString() });
        setError(null);
    };

    const handleCategoryChange = (newTopic) => {
        setNewCard({ ...newCard, topic: newTopic });
    };

    return (
        <SPopNewCard
            className="pop-new-card"
            id="popNewCard"
            onMouseDown={(e) => {
                const isClickInsidePopup = e.target.closest('.pop-new-card__block');
                if (!isClickInsidePopup) {
                    e.currentTarget.dataset.shouldClose = 'true';
                } else {
                    e.currentTarget.dataset.shouldClose = 'false';
                }
            }}
            onMouseUp={(e) => {
                // Проверяем, где ОТПУСТИЛИ мышь
                const isReleaseInsidePopup = e.target.closest('.pop-new-card__block');
                if (e.currentTarget.dataset.shouldClose === 'true' && !isReleaseInsidePopup) {
                    closePopBrowse(e);
                }
                e.currentTarget.dataset.shouldClose = 'false';
            }}
        >
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>

                        {error && <p style={{ color: 'red' }}>{error?.message}</p>}
                        <a
                            href="#"
                            className="pop-new-card__close"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                navigate('/');
                            }}
                        >
                            &#10006;
                        </a>
                        <div className="pop-new-card__wrap">
                            <form
                                className="pop-new-card__form form-new"
                                id="formNewCard"
                                action="#"
                            >
                                <div className="form-new__block">
                                    <label htmlFor="formTitle" className="subttl">
                                        Название задачи
                                    </label>
                                    <input
                                        className="form-new__input"
                                        type="text"
                                        name="title"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        value={newCard.title}
                                        onChange={handleInputChange}
                                        autoFocus
                                        style={error ? { outline: 'solid 1px red' } : undefined}
                                    />
                                </div>
                                <div className="form-new__block">
                                    <label htmlFor="textArea" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-new__area"
                                        name="description"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        onChange={handleInputChange}
                                        value={newCard.description}
                                        style={error ? { outline: 'solid 1px red' } : undefined}
                                    ></textarea>
                                </div>
                            </form>
                            <div style={error ? { outline: 'solid 1px red' } : undefined}>
                                <Calendar
                                    className="pop-new-card__calendar"
                                    currentDate={new Date()}
                                    onChange={handleDateChange}
                                    isEditing={true}
                                />
                            </div>
                        </div>
                        <div style={error ? { outline: 'solid 1px red' } : undefined}>
                            <Categories
                                className="pop-newcard__categories"
                                categories={Object.keys(themes)}
                                selectedCategory={1}
                                onChange={handleCategoryChange}
                            ></Categories>
                        </div>
                        <button
                            className="form-new__create _hover01"
                            id="btnCreate"
                            onClick={handleCreateTaskButtonClick}
                        >
                            Создать задачу
                        </button>
                    </div>
                </div>
            </div>
        </SPopNewCard>
    );
};
