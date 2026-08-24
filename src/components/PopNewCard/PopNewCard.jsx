import { useNavigate } from 'react-router-dom';
import { themes } from '../../../data';
import { Calendar } from '../Calendar/Calendar';
import { Categories } from '../Categories/Categories';

import { SPopNewCard } from './PopNewCard.styled';
import { useState } from 'react';
import { addTask } from '../../services/api';

export const PopNewCard = ({ userData, setTasks }) => {
    const navigate = useNavigate();
    const [newCard, setNewCard] = useState({
        title: 'Новая задача',
        topic: 'Research',
        status: 'Без статуса',
        description: '',
        date: '2024-01-07T16:26:18.179Z',
    });

    const handleCreateTaskButtonClick = async () => {
        const newTasks = await addTask(newCard, userData.token);
        console.log(newTasks);
        setTasks(newTasks);
        navigate('/');
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setNewCard({ ...newCard, [e.target.name]: e.target.value });
    };

    const handleDataChange = ({ newDate }) => {
        setNewCard({ ...newCard, date: newDate });
    };

    const handleCategoryChange = (newTopic) => {
        setNewCard({ ...newCard, topic: newTopic });
    };

    return (
        <SPopNewCard className="pop-new-card" id="popNewCard">
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>
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
                                    ></textarea>
                                </div>
                            </form>
                            <Calendar
                                className="pop-new-card__calendar"
                                dataDate={newCard.date}
                                onChange={handleDataChange}
                            />
                        </div>
                        <Categories
                            className="pop-newcard__categories"
                            categories={Object.keys(themes)}
                            selectedCategory={1}
                            onChange={handleCategoryChange}
                        ></Categories>
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
