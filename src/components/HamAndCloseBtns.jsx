const HamAndCloseBtns = ({ isActive, toggleButtonsMenu }) => {
  return (
    <div className="header__mobile-menu">
      <button
        type="button"
        className={`header__mobile-hamburger ${isActive ? 'active' : ''}`}
        onClick={toggleButtonsMenu}
      >
        <img src="./images/icon-hamburger.svg" alt="Hamburger Menu" />
      </button>

      <button
        type="button"
        className={`header__mobile-close ${isActive ? 'active' : ''}`}
        onClick={toggleButtonsMenu}
      >
        <img src="./images/icon-close.svg" alt="Close Icon" />
      </button>
    </div>
  );
};

export default HamAndCloseBtns;
