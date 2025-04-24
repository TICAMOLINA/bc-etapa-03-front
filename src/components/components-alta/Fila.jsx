import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import { Link } from "react-router"
import Swal from "sweetalert2"
import ARSConvert from "../../utils/ARSConvert"


const Fila = ({ producto }) => {

    const { eliminarProductoContext, setProductoAEditar, handleVer} = useContext(ProductosContext)

    const handleEliminar = (id) => {
        Swal.fire({
            title: "¿Estás seguro que deseas borrar?",
            text: "No podrás revertir este proceso",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borralo!",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
              
              eliminarProductoContext(id)
              Swal.fire({
                title: "Borrado con éxito!",
                text: "El producto ha sido borrado de la lista.",
                icon: "success"
              });
            } 
          });
    }

    const handleEditar = (producto) => {
        setProductoAEditar(producto)
    }

    return (
        <tr>
            <td>{producto.nombre}</td>
            <td>{ARSConvert(producto.precio)}</td>
            <td>{producto.categoria}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.stock}</td>
            <td>
                <img src={producto.foto} alt={producto.nombre} width={'80'}/>
            </td>
            <td>{producto.envio ? 'Si' : 'No'}</td>
            <td>                    
                <button>
                <Link to={`/detalle/${producto.id}`}>
                Ver</Link>
                </button>
                <button onClick={() => handleEditar(producto)}>Editar</button>
                <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
            </td>
        </tr>
    )
}

export default Fila