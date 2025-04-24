import { Link } from 'react-router'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container__footer-logo">
        <div className="footer-container__logo-facebook">
          <Link to="https://www.facebook.com/" target='blank'>
          <i className="fab fa-facebook" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="footer-container__logo-instagram">
          <Link to="https://www.instagram.com/" target='blank'>
          <i className="fab fa-instagram" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="footer-container__logo-whatsapp">
          <Link to="https://www.whatsapp.com/?lang=es_LA" target='blank'><i className="fab fa-whatsapp" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="footer-container__logo-twitter">
          <Link to="https://x.com/?lang=es" target='blank'><i className="fab fa-twitter" aria-hidden="true"></i>
          </Link></div>
      </div>
      <div className="footer-container__footer-text">
        <p>® Copyright 2025 - Todos los derechos reservados</p>
      </div>

    </footer>
  )
}

export default Footer