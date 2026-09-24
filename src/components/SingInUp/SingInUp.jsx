import { Link, useNavigate } from 'react-router-dom';
import { SModal, SWrapper } from './SignInUp.styled';
import { GlobalStyle } from '../../App.styled';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/ContextAPI';

export const SingInUp = ({ isSignIn }) => {
    const { logIn, signUp } = useContext(UserContext);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        name: '',
    });
    const [error, setError] = useState(null);

    const [formErrors, setFormErrors] = useState({
        login: false,
        password: false,
        name: false,
    });

    function isFieldsOk(data) {
        const errors = {
            login: data.login?.length < 3,
            password: data.password?.length < 8,
            name: data.name?.length < 3,
        };

        setFormErrors(errors);

        return !errors.login && !errors.password && !errors.name;
    }

    const handleLogIn = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.target;
        const login = form.login.value;
        const password = form.password.value;


        setFormData({ login, password, name: 'login' });
        if (!isFieldsOk({ login, password, name: 'login' })) return;

        try {
            await logIn({ login, password });
        } catch (err) {
            setFormErrors({
                login: true,
                password: true,
                name: true,
            });
            setError(err);
        }
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
        let isOk = isFieldsOk({ login, password, name });

        if (!isOk) {
            setError(new Error('Поля заполнены неправильно'));
            return;
        }

        try {
            await signUp({ login, password, name });
            navigate('/');
        } catch (err) {
            setError(err);
        }
    };

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
                            {error ? <p style={{ color: 'red' }}>{error.message}</p> : ''}
                        </div>
                        {isSignIn ? (
                            <form
                                className="modal__form-login"
                                id="formLogIn"
                                action="#"
                                onSubmit={handleLogIn}
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
