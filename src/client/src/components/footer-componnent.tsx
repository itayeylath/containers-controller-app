import "../styles/footer.scss";
const Footer = () => {
    return (
      <div className="footer-container">
        <div className="contact-container">
          <p className="contact-text">© 2022, Made by Itay Eylath</p>
        </div>
        <div className="action-button-container">
          <p className="action-button-licence">License</p>
          <p className="action-button-sitmap">Sitmap</p>
          <p className="action-button-documentation">Documentation</p>
          <p className="action-button-support">Support</p>
        </div>
      </div>
    );
  };
  export default Footer;