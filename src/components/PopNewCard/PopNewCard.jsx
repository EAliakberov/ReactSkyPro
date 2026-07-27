import { useNavigate } from 'react-router-dom';
import { themes } from '../../../data';
import { Calendar } from '../Calendar/Calendar';
import { Categories } from '../Categories/Categories';

import { SPopNewCard } from './PopNewCard.styled';

export const PopNewCard = () => {
    const navigate = useNavigate();
    
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
                                        name="name"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus
                                    />
                                </div>
                                <div className="form-new__block">
                                    <label htmlFor="textArea" className="subttl">
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-new__area"
                                        name="text"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                    ></textarea>
                                </div>
                            </form>
                            <Calendar className="pop-new-card__calendar" />
                        </div>
                        <Categories
                            className="pop-new-card__categories"
                            categories={[themes.copywriting, themes.research, themes.webDesigne]}
                            activeCategory={themes.copywriting}
                        ></Categories>
                        <button className="form-new__create _hover01" id="btnCreate">
                            Создать задачу
                        </button>
                    </div>
                </div>
            </div>
        </SPopNewCard>
    );
};
