import { Link, useNavigate } from 'react-router-dom';
import { SModal, SWrapper } from './SignInUp.styled';
import { GlobalStyle } from '../../App.styled';
import { useState } from 'react';
import { userLogin, userRegister } from '../../services/api';

export const SingInUp = ({ isSignIn, setUserData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        name: '',
    });

    const [formErrors, setFormErrors] = useState({
        login: false,
        password: false,
        name: false,
    });

    function isFieldsOk() {
        const errors = {
            login: formData.login?.length < 3,
            password: formData.password?.length < 8,
            name: formData.name?.length < 3,
        };

        setFormErrors(errors);

        return !errors.login && !errors.password && !errors.name;
    }

    const logIn = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.target;
        const login = form.login.value;
        const password = form.password.value;

        await setFormData({ login, password, name: 'login' });
        isFieldsOk();

        // Отправляем данные напрямую
        userLogin({ login, password })
            .then((userData) => {
                setUserData(userData);
                navigate('/');
            })
            .catch((err) => {
                setFormErrors({
                    login: true,
                    password: true,
                    name: true,
                });
                console.error(err.message);
            });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.target;
        const login = form.login.value;
        const password = form.password.value;
        const name = form.name.value;

        setFormData({ login, password, name });

        // Проверка полей
        let isOk = await isFieldsOk();

        if (!isOk) {
            console.error('Поля заполнены неправильно');
            return;
        }

        try {
            const userData = await userRegister({ login, password, name });
            setUserData(userData);
            navigate('/');
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        await setFormData((prev) => ({ ...prev, [name]: value }));
        setFormErrors((prev) => ({ ...prev, [name]: false }));
    };

    return (
        <SWrapper>
            <GlobalStyle />
            <div className={'container-signinup'}>
                <SModal>
                    <div className="modal__block">
                        <div className="modal__ttl">
                            <h2>{isSignIn ? 'Вход' : 'Регистрация'}</h2>
                        </div>
                        {isSignIn ? (
                            <form
                                className="modal__form-login"
                                id="formLogIn"
                                action="#"
                                onSubmit={logIn}
                            >
                                <input
                                    value={formData.login}
                                    className={`modal__input ${formErrors.login ? 'error' : ''}`}
                                    type="text"
                                    name="login"
                                    id="formlogin"
                                    placeholder="Эл. почта"
                                    onChange={handleInputChange}
                                />
                                <input
                                    value={formData.password}
                                    className={`modal__input ${formErrors.password ? 'error' : ''}`}
                                    type="password"
                                    name="password"
                                    id="formpassword"
                                    placeholder="Пароль"
                                    onChange={handleInputChange}
                                />
                                <button className="modal__btn-enter _hover01" id="btnEnter">
                                    Войти
                                </button>
                                <div className="modal__form-group">
                                    <p>Нужно зарегистрироваться?</p>
                                    <Link to={'/signup'}>Регистрируйтесь здесь</Link>
                                </div>
                            </form>
                        ) : (
                            <form
                                className="modal__form-login"
                                id="formLogUp"
                                action="#"
                                onSubmit={handleSignUp}
                            >
                                <input
                                    value={formData.name}
                                    className={`modal__input first-name ${formErrors.name ? 'error' : ''}`}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Имя"
                                    onChange={handleInputChange}
                                />
                                <input
                                    value={formData.login}
                                    className={`modal__input login ${formErrors.login ? 'error' : ''}`}
                                    type="text"
                                    name="login"
                                    id="loginReg"
                                    placeholder="Логин"
                                    onChange={handleInputChange}
                                />
                                <input
                                    value={formData.password}
                                    className={`modal__input password-first ${formErrors.password ? 'error' : ''}`}
                                    type="password"
                                    name="password"
                                    id="passwordFirst"
                                    placeholder="Пароль"
                                    onChange={handleInputChange}
                                />
                                <button className="modal__btn-signup-ent _hover01" id="SignUpEnter">
                                    Зарегистрироваться{' '}
                                </button>
                                <div className="modal__form-group">
                                    <p>
                                        Уже есть аккаунт? <Link to={'/signin'}>Войдите здесь</Link>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </SModal>
            </div>
        </SWrapper>
    );
};
