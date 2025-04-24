const productosTotalesCarrito = (carrito) => {
    return carrito.reduce((acumulado, producto) =>
    acumulado + producto.cantidad, 0)

}

export default productosTotalesCarrito
