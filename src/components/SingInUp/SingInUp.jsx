import { Link, useNavigate } from 'react-router-dom';
import { SModal, SWrapper } from './SignInUp.styled';
import { GlobalStyle } from '../../App.styled';

export const SingInUp = ({ isSignIn, setIsAuth }) => {
    const navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAuth(true);
        navigate('/');
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
                            <form className="modal__form-login" id="formLogIn" action="#">
                                <input
                                    className="modal__input"
                                    type="text"
                                    name="login"
                                    id="formlogin"
                                    placeholder="Эл. почта"
                                />
                                <input
                                    className="modal__input"
                                    type="password"
                                    name="password"
                                    id="formpassword"
                                    placeholder="Пароль"
                                />
                                <button className="modal__btn-enter _hover01" id="btnEnter">
                                    <a onClick={logIn}>Войти</a>
                                </button>
                                <div className="modal__form-group">
                                    <p>Нужно зарегистрироваться?</p>
                                    <Link to={'/signup'}>Регистрируйтесь здесь</Link>
                                </div>
                            </form>
                        ) : (
                            <form className="modal__form-login" id="formLogUp" action="#">
                                <input
                                    className="modal__input first-name"
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    placeholder="Имя"
                                />
                                <input
                                    className="modal__input login"
                                    type="text"
                                    name="login"
                                    id="loginReg"
                                    placeholder="Эл. почта"
                                />
                                <input
                                    className="modal__input password-first"
                                    type="password"
                                    name="password"
                                    id="passwordFirst"
                                    placeholder="Пароль"
                                />
                                <button className="modal__btn-signup-ent _hover01" id="SignUpEnter">
                                    <a onClick={logIn}>Зарегистрироваться</a>{' '}
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
