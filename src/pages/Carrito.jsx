import useTitulo from "../hooks/useTitulo"
import ListadoCarrito from '../components/ListadoCarrito'
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import productosTotalesCarrito from "../utils/cantidadProductosCarrito"
import './Carrito.scss'

const Carrito = (producto) => {

  useTitulo('Carrito')

  const { carrito } = useContext(CarritoContext)



  return (
    <main className="cart-container">
      <h1 className="cart-container__title">Productos en el <span className="cart-container__products-amount">carrito:</span>
        {
          carrito.length <= 0 ? (
            <p></p>
          ) : (
            <span> {productosTotalesCarrito(carrito)}</span>
          )
        }
      </h1>
      <hr />
      <ListadoCarrito />


    </main>
  )
}

export default Carrito