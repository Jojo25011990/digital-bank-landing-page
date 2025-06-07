const MobileNavigation = ({ isActive }) => {
  return (
    <div className={`header__nav-mobile-overlay ${isActive ? 'active' : ''}  `}>
      <nav className="header__nav-mobile">
        <ul className="header__list-mobile">
          <li className="header__item-mobile">
            <a href="#" className="header__link-mobile">
              Home
            </a>
          </li>
          <li className="header__item-mobile">
            <a href="#" className="header__link-mobile">
              About
            </a>
          </li>
          <li className="header__item-mobile">
            <a href="#" className="header__link-mobile">
              Contact
            </a>
          </li>
          <li className="header__item-mobile">
            <a href="#" className="header__link-mobile">
              Blog
            </a>
          </li>
          <li className="header__item-mobile">
            <a href="#" className="header__link-mobile">
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
