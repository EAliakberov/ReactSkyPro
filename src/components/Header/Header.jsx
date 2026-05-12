import { useState } from 'react';
import PopUser from '../PopUser/PopUser';

export const Header = () => {
    const [isPopUserVisible, setIsPopUserVisible] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="images/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="images/logo_dark.png" alt="logo" />
                        </a>
                    </div>
                    <nav className="header__nav">
                        <button className="header__btn-main-new _hover01" id="btnMainNew">
                            <a href="#popNewCard">Создать новую задачу</a>
                        </button>
                        <a
                            className="header__user _hover02"
                            onClick={() => setIsPopUserVisible(!isPopUserVisible)}
                        >
                            Ivan Ivanov
                        </a>

                        {isPopUserVisible ? <PopUser /> : ''}
                    </nav>
                </div>
            </div>
        </header>
    );
};
