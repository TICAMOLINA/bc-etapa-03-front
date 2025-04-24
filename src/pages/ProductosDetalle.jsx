import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../utils/Spinner"
import Slider from "../components/Slider"
import ARSConvert from "../utils/ARSConvert"
import './ProductosDetalle.scss'
import CarritoContext from "../contexts/CarritoContext"

const ProductosDetalle = () => {

  const handleAgregar = (productoDetalle) => {
    agregarProductoAlCarritoContext(productoDetalle)
  }

  const { id } = useParams()

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)


  const [productoDetalle, setProductoDetalle] = useState(null)

  useEffect(() => {
    getOne(id)
  }, [])

  const getOne = async (id) => {
    const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id

    try {
      const res = await fetch(urlGetOne)

      if (!res.ok) {
        throw new Error('No se pudo obtener producto')
      }
      const data = await res.json()
      setProductoDetalle(data)

    } catch (error) {
      console.error('[getOne]', error)
    }
  }


  return (
    <>

      {
        productoDetalle ?
          (
            <main className="product-detail">
              <section className="product-detail__slider">
                <Slider data={productoDetalle} />
              </section>
              <section className="product-detail__text-content">
                <h2>{productoDetalle.nombre}</h2>
                <p>Categoría: <span>{productoDetalle.categoria}</span></p>
                <p>{productoDetalle.descripcion}</p>
                <p>Disponible por <span>{ARSConvert(productoDetalle.precio)}</span></p>
                <div className="product-detail__btn-container">
                  <button
                    onClick={() => handleAgregar(productoDetalle)}
                    className="product-detail__btn-add">
                      AGREGAR AL CARRITO <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      </button>
                </div>
              </section>
            </main>

          ) :
          (
            <Spinner />
          )
      }

    </>

  )
}

export default ProductosDetalle