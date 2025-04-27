
import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagenBack, setSrcImagenBack }) => {

    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']

    arrayEventosDragDrop.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        const files = e.dataTransfer.files
        handleFiles(files)
    }

    const handleChange = () => {

    }

    const handleFiles = (files) => {
        const file = files[0]
        uploadFile(file)
        previewFile(file)
    }

    const uploadFile = (file) => {
        console.log('llego a upload', file);
    }

    const previewFile = (file) => {
        console.log('llego a preview', file);

        // API READER -> del window o BOM navegador
        const reader = new FileReader()
        reader.readAsDataURL(file) // A partir del archivo binario creo una url para que pueda previsualizar

        // espero hasta que el archivo haya sido leido completamente
        reader.addEventListener('loadend', () => {
            setSrcImagenBack(reader.result)
        }) // cuando termino de leer el archivo
    }


    return (
        <div className='drop-area' onDrop={handleDrop}>
            <p>
                Subir imagen al servidor con <b>File Dialog</b> o con
                <b> drag and drop</b> dentro del area punteada.
            </p>

            <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
            <label className="drop-area-button" htmlFor="lbl-foto">
                File Dialog
            </label>

            <div className='drop-area-image'>
                <img src={srcImagenBack} alt="" />
            </div>

        </div>
    )
}

export default DragDrop