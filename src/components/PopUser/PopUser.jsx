import { useNavigate } from 'react-router-dom';
import { SPopUserSet } from './PopUser.styled';
import { useContext } from 'react';
import { UserContext } from '../../context/ContextAPI';

const PopUser = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    const exitBtnClick = (e) => {
        e.stopPropagation();
        navigate('/exit');
    };

    const { login, name } = userData;

    return (
        <SPopUserSet className="pop-user-set" id="user-set-target">
            <p className="pop-user-set__name">{name}</p>
            <p className="pop-user-set__mail">{login}</p>
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
