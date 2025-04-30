import useTitulo from "../hooks/useTitulo"
import ListadoCarrito from '../components/ListadoCarrito'
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import './Carrito.scss'

const Carrito = (producto) => {

  useTitulo('Carrito')

  const { carrito, cantidadTotalProductos } = useContext(CarritoContext)



  return (
    <main className="cart-container">
      <h1 className="cart-container__title">Productos en el <span className="cart-container__products-amount">carrito:</span>
        {
          carrito.length <= 0 ? (
            <p></p>
          ) : (
            <span> {cantidadTotalProductos > 0 && cantidadTotalProductos}</span>
          )
        }
      </h1>
      <hr />
      <ListadoCarrito />


    </main>
  )
}

export default Carrito