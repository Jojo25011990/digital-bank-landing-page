const FooterLinks = () => {
  return (
    // *** Footer Links ***
    <nav className="footer__nav-links">
      <ul className="footer__nav-list footer__nav-list-left">
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            About Us
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Contact
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Blog
          </a>
        </li>
      </ul>

      <ul className="footer__nav-list footer__nav-list-right">
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Careers
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Support
          </a>
        </li>
        <li className="footer__nav-item">
          <a href="#" className="footer__nav-link">
            Privacy Policy
          </a>
        </li>
      </ul>
    </nav>
    // *** End of Footer Links ***
  );
};

export default FooterLinks;
