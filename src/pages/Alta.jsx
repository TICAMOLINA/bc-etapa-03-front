import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"
import '../components/components-alta/Tabla.scss'
import './Alta.scss'
import { useContext } from "react"
import ProductosContext from "../contexts/ProductosContext"

const Alta = () => {

  useTitulo('Alta')
  const { productoAEditar } = useContext(ProductosContext)
  
  return (
    <>
      <main className="alta-container">

        <section className="alta-container__form-crud-container">
          <h1>Formulario de <span>{productoAEditar ? 'edición' : 'alta'}</span> de productos</h1>
          <hr />
          <div className="alta-container__form-crud">
            <Formulario />
          </div>
        </section>

        <section className="alta-container__table-container">
          <Tabla />
        </section>

      </main>
    </>
  )
}

export default Alta