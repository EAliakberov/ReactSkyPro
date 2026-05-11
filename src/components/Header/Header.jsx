import { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import { SBlock, SBtnMainNew, SHeader, SLogo, SNav, SUser } from './Header.styled';

export const Header = () => {
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
                        <SBtnMainNew className="header__btn-main-new _hover01" id="btnMainNew">
                            <a href="#popNewCard">Создать новую задачу</a>
                        </SBtnMainNew>
                        <SUser
                            href="#"
                            className="_hover02"
                            onClick={() => setIsPopUserVisible(!isPopUserVisible)}
                        >
                            Ivan Ivanov
                        </SUser>
                        <PopUser isVisible={isPopUserVisible} />
                    </SNav>
                </SBlock>
            </div>
        </SHeader>
    );
};
