import { useState, useEffect } from 'react';
import Button from './Button';
import HamAndCloseBtns from './HamAndCloseBtns';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 765 && isActive) setIsActive(false);
    };

    window.addEventListener('resize', handleResize);
  }, [isActive]);

  const toggleButtonsMenu = () => {
    setIsActive(changeButton => !changeButton);
  };

  return (
    //  *** Header ***
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="./images/logo.svg" alt="Easybank Logo Dark Blue" />
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="#" className="header__link">
                Home
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                About
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Contact
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Blog
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <Button />
        <HamAndCloseBtns
          isActive={isActive}
          toggleButtonsMenu={toggleButtonsMenu}
        />
        <MobileNavigation isActive={isActive} />
      </div>
    </header>
    //  *** End of Header ***
  );
};

export default Header;
