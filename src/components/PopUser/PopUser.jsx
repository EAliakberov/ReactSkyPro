import { SPopUserSet } from './PopUser.styled';

const PopUser = ({ setPopExitState, setIsPopUserVisible }) => {
    return (
        <SPopUserSet className="pop-user-set" id="user-set-target">
            <p className="pop-user-set__name">Ivan Ivanov</p>
            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
            <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
            </div>
            <button
                type="button"
                className="_hover03"
                onClick={(e) => {
                    e.stopPropagation();
                    setPopExitState(true);
                    setIsPopUserVisible(false);
                }}
            >
                <a>Выйти</a>
            </button>
        </SPopUserSet>
    );
};

export default PopUser;
