import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import useTitulo from '../hooks/useTitulo'

const Inicio = () => {

  const {productos, textFilter} = useContext(ProductosContext)

  useTitulo('Inicio')

  const productosFiltrados = productos && productos.filter((product) => {
    if (
      product.nombre.toLowerCase().indexOf(
        textFilter.toLowerCase()
      ) === -1
    ) {
      return false;
    }
    return true;
  })

  return (
      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Te presentamos nuestros últimos ingresos en camisetas retro.</h1>
            <p>Se encontraron {productosFiltrados?.length} productos</p>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          {
            productos && productosFiltrados.map((producto) => (
              <Card producto={producto} key={producto.id}/>

            ))
          }
        </section>
      </main>
  )
}

export default Inicio