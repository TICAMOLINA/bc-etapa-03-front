import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import '../../pages/Alta.scss'
import DragDrop from "./DragDrop"

const Formulario = () => {
    const { crearProductoContext, productoAEditar, setProductoAEditar, actualizarProductoContext } = useContext(ProductosContext)

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        categoria: '',
        descripcion: '',
        stock: '',
        foto: '',
        sliderFoto: '',
        envio: false
    }

    useEffect(() => {
        if (productoAEditar) {
            setForm(productoAEditar)
            setFotos({
                foto: productoAEditar.foto || placeHolderImagen,
                sliderFoto: productoAEditar.sliderFoto || placeHolderImagen
            })
            setSrcImagenBackPrincipal(productoAEditar.foto || placeHolderImagen)
            setSrcImagenBackSlider(productoAEditar.sliderFoto || placeHolderImagen)
        } else {
            setForm(formInicial)
            setFotos({
                foto: placeHolderImagen,
                sliderFoto: placeHolderImagen
            })
            setSrcImagenBackPrincipal(placeHolderImagen)
            setSrcImagenBackSlider(placeHolderImagen)
        }
    }, [productoAEditar])

    const [form, setForm] = useState(formInicial)
    const placeHolderImagen = 'http://localhost:8080/uploads/elementor-placeholder-image-3.webp'
    
    const [fotos, setFotos] = useState({
        foto: placeHolderImagen,
        sliderFoto: placeHolderImagen
    })
    
    const [srcImagenBackPrincipal, setSrcImagenBackPrincipal] = useState(placeHolderImagen)
    const [srcImagenBackSlider, setSrcImagenBackSlider] = useState(placeHolderImagen)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.id === null) {
            const productoNuevoConImagen = { ...form, ...fotos }
            crearProductoContext(productoNuevoConImagen)
        } else {
            const productoNuevoConImagen = { ...form, ...fotos }
            actualizarProductoContext(productoNuevoConImagen)
        }
        handleReset()
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
        setFotos({
            foto: placeHolderImagen,
            sliderFoto: placeHolderImagen
        })
        setSrcImagenBackPrincipal(placeHolderImagen)
        setSrcImagenBackSlider(placeHolderImagen)
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
                    <select
                        onChange={handleChange}
                        id="lbl-categoria"
                        name="categoria"
                        value={form.categoria}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Selecciones">Selecciones</option>
                        <option value="Clubes">Clubes</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lbl-descripcion">Descripción</label>
                    <textarea
                        onChange={handleChange}
                        id="lbl-descripcion"
                        name="descripcion"
                        value={form.descripcion}
                        rows={2}
                        cols={50} 
                    />
                </div>
                <div>
                    <label htmlFor="lbl-stock">Stock</label>
                    <input onChange={handleChange}
                        type="text" id="lbl-stock"
                        name="stock" value={form.stock} />
                </div>
                <div>
                    <h3>Imagen principal</h3>
                    <DragDrop
                        setFotos={setFotos}
                        srcImagenBack={srcImagenBackPrincipal}
                        setSrcImagenBack={setSrcImagenBackPrincipal}
                        isPrincipal={true}
                    />
                </div>
                
                <div>
                    <h3>Imagen para slider</h3>
                    <DragDrop
                        setFotos={setFotos}
                        srcImagenBack={srcImagenBackSlider}
                        setSrcImagenBack={setSrcImagenBackSlider}
                        isPrincipal={false}
                    />
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