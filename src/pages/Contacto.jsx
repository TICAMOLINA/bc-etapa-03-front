import useTitulo from '../hooks/useTitulo'
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <main className="contact-page">

      <div className="contact-page__tittle">
        <h1>Contáctenos</h1>
      </div>

      <section className="contact-section">
        <article className="contact-section__location-container">
          <div className="contact-section__location-icon-container">
            <div className="contact-section__img">
              <img className="contact-section__image-location" src="../../../imgs/location-contact.webp" alt=""/>
            </div>
          </div>
          <h2>Vení a nuestra sucursal</h2>
          <div className="contact-section__map-location"><iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.22349719539!2d-106.53681809999999!3d35.1260958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87227557938908eb%3A0x723dd3cf63dbb051!2s3828%20Piermont%20Dr%20NE%2C%20Albuquerque%2C%20NM%2087111%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1739363060060!5m2!1ses-419!2sar"
            width="390" height="500" style={{ border: 0}} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe></div>
          <div className="contact-section__text">
            <p><i className="fa fa-phone" aria-hidden="true"></i>123-4567-8910</p>
            <p><i className="fa fa-envelope" aria-hidden="true"></i>sarasa@mail.com</p>
            <p><i className="fa fa-location-arrow" aria-hidden="true"></i>Negra Arroyo Lane 308 - Albuquerque</p>
          </div>
        </article>



        <article className="contact-section__contact-container">
          <div className="contact-section__message-icon-container">
            <div className="contact-section__img-message">
              <img className="contact-section__image-message" src="../../../imgs/messages-contact.webp" alt=""/>
            </div>
          </div>
          <h2>Consultanos lo que quieras</h2>

          <form className="contact-section__form-container" action="#">
            <div className="contact-section__name-user">
              <i className="fa fa-user" aria-hidden="true"></i><input type="text" placeholder="Nombre"/>
            </div>
            <div className="contact-section__mail-user">
              <i className="fa fa-envelope" aria-hidden="true"></i><input type="email" placeholder="Email"/>
            </div>
            <div className="contact-section__text-area-user">
              <textarea name="consult" placeholder="Mensaje"></textarea>
            </div>
            <div className="contact-section__submit">
              <button>Enviar Mensaje</button>
            </div>
          </form>

        </article>
      </section>
    </main>
  )
}

export default Contacto