import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import '../../pages/Alta.scss'
const Formulario = () => {

    const { crearProductoContext,
        productoAEditar,
        setProductoAEditar,
        actualizarProductoContext
    } = useContext(ProductosContext)

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        categoria: '',
        descripcion: '',
        stock: '',
        foto: '',
        envio: false
    }

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar])


    const [form, setForm] = useState(formInicial)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.id === null) {
            crearProductoContext(form)
        } else {
            actualizarProductoContext(form)
        }
    }

    const handleChange = (e) => {

        const { type, name, checked, value } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleReset = () => {
        setForm(formInicial)
        setProductoAEditar(null)
    }

    return (
        <>


            <form className="alta-container__form-alta" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lbl-nombre">Nombre</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-nombre"
                        name="nombre"
                        value={form.nombre} />
                </div>
                <div>
                    <label htmlFor="lbl-precio">Precio</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-precio"
                        name="precio"
                        value={form.precio} />
                </div>
                <div>
                    <label htmlFor="lbl-categoria">Categoría</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-categoria"
                        name="categoria"
                        value={form.categoria} />
                </div>
                <div>
                    <label htmlFor="lbl-descripcion">Descripción</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-descripcion"
                        name="descripcion" value={form.descripcion} />
                </div>
                <div>
                    <label htmlFor="lbl-stock">Stock</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-stock"
                        name="stock" value={form.stock} />
                </div>
                <div>
                    <label htmlFor="lbl-foto">Foto</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-foto"
                        name="foto" value={form.foto} />
                </div>
                <div className="alta-container__checkbox-group">
                    <label className="checkbox-send" htmlFor="lbl-envio">Envío</label>
                    <input onChange={handleChange}
                        type="checkbox" id="lbl-envio"
                        name="envio" checked={form.envio} />
                </div>

                <div className="alta-container__btn-container">
                    <button className={productoAEditar ? 'alta-container__btn-submit-edit' : 'alta-container__btn-submit'} type="submit">{productoAEditar ? 'Editar' : 'Crear'}</button>
                    <button className="alta-container__btn-reset" onClick={handleReset} type="reset">Limpiar</button>
                </div>
            </form>
        </>
    )
}

export default Formulario