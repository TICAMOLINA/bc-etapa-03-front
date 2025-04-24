import React, { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from './ItemCarrito'
import './ListadoCarrito.scss'
import Swal from 'sweetalert2'
import ARSConvert from '../utils/ARSConvert'
import '../pages/Carrito.scss'

const ListadoCarrito = (producto) => {

    const { carrito,
        limpiarCarritoContext,
        guardarCarritoBackendContext } = useContext(CarritoContext)

    const handleComprar = () => {
        guardarCarritoBackendContext()
    }

    const handleLimpiarCarrito = () => {
        Swal.fire({
            title: "¿Estás seguro que deseas limpiar el carrito?",
            text: "Se eliminaran todos los productos",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, deseo limpiarlo",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                limpiarCarritoContext()
                Swal.fire({
                    title: "Carrito limpiado con éxito!",
                    text: "Se quitaron todos los productos de la lista.",
                    icon: "success"
                });
            }
        });
    }

    const totalAPagar = carrito.reduce((acumulado, producto) =>
        acumulado + producto.precio * producto.cantidad, 0)

    return (
        <>
            <table className='cart-container__cart-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center' }}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }
                </tbody>
            </table>
            <hr />
            <div className='cart-container__section-actions'>
                <div><p>Total: <span>{ARSConvert(totalAPagar)}</span></p></div>
                {!carrito.length <= 0 && (
                    <>
                        <button onClick={handleComprar}
                        className='buy-btn'>Comprar</button>
                        <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    </>
                )
                }
            </div>
        </>
    )
}

export default ListadoCarrito