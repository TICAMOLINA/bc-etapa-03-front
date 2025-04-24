import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Integrador con React Mauricio Molina - ${textoTitulo}`
    }, [])
    
}

export default useTitulo