import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

import { Calendar } from '../Calendar/Calendar';
import { Category } from '../Category/Category';
import { SPopBrowse } from './PopBrowse.styled';
import { getTheme } from '../../../data';
import { deleteTask, editTask } from '../../services/api';

export const PopBrowse = ({ userData, setTasks }) => {
    const navigate = useNavigate();
    const closePopBrowse = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/');
    };

    const { id } = useParams();

    const { tasksById } = useOutletContext();
    const currentTask = tasksById[id];
    currentTask || navigate('/');
    // ` "_id": "659ad0aad0e154bebca2b6b3",
    //   "userId": "659abd3ad0e154bebca2b6b7",
    //   "title": "Новая задача 1!",
    //   "topic": "Research",
    //   "date": "2024-01-07T16:26:18.179Z",
    //   "description": "Подробное описание задачи",
    //   "status": "Без статуса"`;

    console.log(currentTask, id);

    const theme = getTheme(currentTask.topic);

    const handleEditTaskButtonClick = async () => {
        const newTasks = await editTask(
            {
                title: currentTask.title,
                topic: currentTask.topic,
                date: currentTask.date,
                description: currentTask.description,
                status: currentTask.status,
            },
            currentTask._id,
            userData.token
        );
        console.log(newTasks);
        setTasks(newTasks);
        navigate('/');
    };

    async function handleDeleteButton() {
        const newTasks = await deleteTask(currentTask._id, userData.token);
        setTasks(newTasks);
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
                            <h3 className="pop-browse__ttl">{currentTask.title}</h3>
                            <Category isActive={true} theme={theme} />
                        </div>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                <div className="status__theme _gray">
                                    <p className="_gray">{currentTask.status}</p>
                                </div>
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
                                        name="text"
                                        id="textArea01"
                                        readOnly
                                        placeholder="Введите описание задачи..."
                                        value={currentTask.description || ''}
                                    ></textarea>
                                </div>
                            </form>
                            <Calendar className="pop-new-card__calendar calendar" />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                                <p className="_orange">{currentTask.topic}</p>
                            </div>
                        </div>
                        <div className="pop-browse__btn-browse ">
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleEditTaskButtonClick();
                                        }}
                                    >
                                        Редактировать задачу
                                    </a>
                                </button>
                                <button className="btn-browse__delete _btn-bor _hover03">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleDeleteButton();
                                        }}
                                    >
                                        Удалить задачу
                                    </a>
                                </button>
                            </div>
                            <button
                                className="btn-browse__close _btn-bg _hover01"
                                onClick={closePopBrowse}
                            >
                                <a
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    Закрыть
                                </a>
                            </button>
                        </div>
                        <div className="pop-browse__btn-edit _hide">
                            <div className="btn-group">
                                <button className="btn-edit__edit _btn-bg _hover01">
                                    <a href="#">Сохранить</a>
                                </button>
                                <button className="btn-edit__edit _btn-bor _hover03">
                                    <a href="#">Отменить</a>
                                </button>
                                <button
                                    className="btn-edit__delete _btn-bor _hover03"
                                    id="btnDelete"
                                >
                                    <a href="#">Удалить задачу</a>
                                </button>
                            </div>
                            <button
                                className="btn-edit__close _btn-bg _hover01"
                                onClick={closePopBrowse}
                            >
                                <a
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    Закрыть
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SPopBrowse>
    );
};
