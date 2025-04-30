import { Link } from 'react-router'
import './SearchBar.scss'
import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import ProductosContext from '../contexts/ProductosContext'

const SearchBar = () => {

    const { carrito, cantidadTotalProductos } = useContext(CarritoContext)
    const { textFilter, setTextFilter} = useContext(ProductosContext)

    return (
        <div className="search-bar">
            <div className="search-bar__logo-container">
                <img className="search-bar__logo-image" src="/imgs/logo1.webp" alt="logo de la pagina" />
            </div>
            <form action="#" className="search-bar__form-container">
                <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
                <input 
                type="search" 
                value={textFilter}
                onChange={(e) => setTextFilter(e.target.value)}
                id="busqueda" 
                className="search-bar__form-search" 
                placeholder="BUSCAR..." />
                <button type="submit" className="search-bar__form-submit"><i className="fa fa-search"></i></button>
            </form>
            <div className="search-bar__carrito-container">
                <Link to="/carrito"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                {
                    carrito.length <= 0 ? (
                        <p></p>
                    ) : (
                        <div className='search-bar__carrito-items'><span>{cantidadTotalProductos > 0 && cantidadTotalProductos}</span></div>
                    )
                }
            </div>
            <div className="menu-toogle">
                <label htmlFor="menu" className="menu-toogle__label">
                    <span className="menu-toogle__top-bread"></span>
                    <span className="menu-toogle__meat"></span>
                    <span className="menu-toogle__bottom-bread"></span>
                </label>
            </div>
        </div>
    )
}

export default SearchBar