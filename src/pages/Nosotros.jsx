import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'

const Nosotros = () => {
  
  useTitulo('Nosotros')

  return (
    <main>
      <section className="section-header">
        <header className="section-header__description">
          <h1>Acerca de nosotros</h1>
        </header>
        <div className="section-header__p-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo possimus aspernatur nihil eos quod
            similique! Laudantium earum iure culpa expedita est facere.</p>
        </div>
      </section>

      <section className="about-description">
        <article className="about-description__secondary-container">
          <h2>Somos una tienda coleccionista hecha para coleccionistas, con veinte años en el rubro</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores aliquam adipisci sit! Alias minima
            excepturi quae temporibus expedita ad eius, impedit nam sequi rerum doloribus culpa delectus suscipit! Quos
            natus rem consequatur debitis a sed perferendis atque ipsam dignissimos nulla.</p>
        </article>
      </section>
    </main>
  )
}

export default Nosotros