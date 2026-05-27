import { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import { SBlock, SBtnMainNew, SHeader, SLogo, SNav, SUser } from './Header.styled';

export const Header = ({ setPopExitState, setPopNewCard }) => {
    const [isPopUserVisible, setIsPopUserVisible] = useState(false);

    return (
        <SHeader>
            <div className="container">
                <SBlock className="header__block">
                    <SLogo className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
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
                            onClick={(e) => {
                                e.stopPropagation();
                                setPopNewCard(true);
                            }}
                        >
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Создать новую задачу
                            </a>
                        </SBtnMainNew>
                        <SUser
                            className="_hover02"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsPopUserVisible(!isPopUserVisible);
                            }}
                        >
                            Ivan Ivanov
                        </SUser>
                        {isPopUserVisible ? (
                            <PopUser
                                setPopExitState={setPopExitState}
                                setIsPopUserVisible={setIsPopUserVisible}
                            />
                        ) : (
                            ''
                        )}
                    </SNav>
                </SBlock>
            </div>
        </SHeader>
    );
};
