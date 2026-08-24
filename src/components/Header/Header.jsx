import { useState } from 'react';
import { SBlock, SBtnMainNew, SHeader, SLogo, SNav, SUser } from './Header.styled';
import { useNavigate } from 'react-router-dom';

export const Header = ({ userData }) => {
    const [isPopUserVisible, setIsPopUserVisible] = useState(false);
    const [isPopNewCard, setIsPopNewCard] = useState(false);

    const navigate = useNavigate();

    const userBtnClick = (e) => {
        e.stopPropagation();
        
        if (isPopUserVisible) {
            setIsPopUserVisible(false);
            navigate('/');
        } else {
            setIsPopUserVisible(true);
            navigate('/user');
        }
    };
    const newCardBtnClick = (e) => {
        e.stopPropagation();
        if (isPopNewCard) {
            setIsPopNewCard(false);
            navigate('/');
        } else {
            setIsPopNewCard(true);
            navigate('/new_card');
        }
    };

    return (
        <SHeader>
            <div className="container">
                <SBlock className="header__block">
                    <SLogo className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="./images/logo.png" alt="logo" />
                        </a>
                    </SLogo>
                    <SLogo className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </SLogo>
                    <SNav>
                        <SBtnMainNew
                            className="header__btn-main-new _hover01"
                            id="btnMainNew"
                            onClick={newCardBtnClick}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Создать новую задачу
                            </a>
                        </SBtnMainNew>
                        <SUser className="_hover02" onClick={userBtnClick}>
                            {userData ? userData.name : 'Войти'}
                        </SUser>
                    </SNav>
                </SBlock>
            </div>
        </SHeader>
    );
};
