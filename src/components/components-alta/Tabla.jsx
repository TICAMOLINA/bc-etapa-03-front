import { useContext } from "react"
import Fila from "./Fila"
import './Tabla.scss'
import ProductosContext from "../../contexts/ProductosContext"
import Spinner from "../../utils/Spinner"

const Tabla = () => {

    const { productos } = useContext(ProductosContext)
 
  return (

    <>
    {productos ? (
    
    <table className="alta-container__table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Stock</th>
                <th>Foto</th>
                <th>Envío</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                productos && productos.map((producto) => (
                    <Fila producto={producto} key={producto.id}/>
                ))
            }
        </tbody>
    </table>
    ) : (
        <Spinner />
    )}
    </>
  )
}

export default Tabla