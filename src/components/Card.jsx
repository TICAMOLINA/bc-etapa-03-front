import { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'
import { Link } from 'react-router'

const Card = ({ producto }) => {

    const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

    const handleAgregar = (producto) => {
        agregarProductoAlCarritoContext(producto)
    }

    return (
        <div className="card">
            <article className="card__article">
                <div className="card__image-container">
                    <img className="card__image" src={producto.foto} alt={producto.nombre} />
                </div>
                <div className="card__content">
                    <h2 className="card__heading">{producto.nombre}</h2>
                    <div className="card__description">
                        <p>{producto.descripcion}</p>

                        <Link to={`/detalle/${producto.id}`}>
                        Ver
                        </Link>

                        <button
                        className='card__add-button' 
                        onClick={() => handleAgregar(producto)}>
                        Agregar al carrito <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Card