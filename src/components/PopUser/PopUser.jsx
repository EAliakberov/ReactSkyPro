import { useNavigate } from 'react-router-dom';
import { SPopUserSet } from './PopUser.styled';

const PopUser = () => {
    const navigate = useNavigate();
    const exitBtnClick = (e) => {
        e.stopPropagation();
        navigate('/exit');
    };

    return (
        <SPopUserSet className="pop-user-set" id="user-set-target">
            <p className="pop-user-set__name">Ivan Ivanov</p>
            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
            <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
            </div>
            <button type="button" className="_hover03" onClick={exitBtnClick}>
                Выйти
            </button>
        </SPopUserSet>
    );
};

export default PopUser;
