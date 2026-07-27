import { useNavigate } from 'react-router-dom';
import { SPopExit } from './PopExit.styled';

export const PopExit = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const singOut = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsAuth(false);
        navigate('/');
    };
    const cancelSingOut = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate('/');
    };

    return (
        <SPopExit id="popExit">
            <div className="pop-exit__container">
                <div className="pop-exit__block">
                    <div className="pop-exit__ttl">
                        <h2>Выйти из аккаунта?</h2>
                    </div>
                    <form className="pop-exit__form" id="formExit" action="#">
                        <div className="pop-exit__form-group">
                            <button
                                className="pop-exit__exit-yes _hover01"
                                id="exitYes"
                                onClick={singOut}
                            >
                                Выйти
                            </button>
                            <button
                                className="pop-exit__exit-no _hover03"
                                id="exitNo"
                                onClick={cancelSingOut}
                            >
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    Нет, остаться
                                </a>{' '}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </SPopExit>
    );
};
