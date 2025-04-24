import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"
import Carrito from "../pages/Carrito"
import Alta from "../pages/Alta"
import NoEncontrado from "../pages/NoEncontrado"
import ProductosDetalle from "../pages/ProductosDetalle"

const Rutas = () => {

    const hookRutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/detalle/:id',
                element: <ProductosDetalle />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/carrito',
                element: <Carrito />
            },
            {
                path: '/alta',
                element: <Alta />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )
  
    return hookRutas
}

export default Rutas