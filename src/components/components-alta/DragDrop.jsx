
import { peticionesHttp } from '../../helpers/peticiones-http'
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

    const handleFiles = async (files) => {
        const file = files[0]
        await uploadFile(file)
        previewFile(file)
    }

    const uploadFile = async (file) => {
        console.log('llego a upload', file);
        const url = import.meta.env.VITE_BACKEND_UPLOAD

        try {            
            const formData = new FormData()
            formData.append('foto', file)
            
            const options = {
                method: 'POST',
                body: formData
            }
  
            const imagenUp = await peticionesHttp(url, options)
            // console.log(imagenUp);
            setFoto(imagenUp)

        } catch (error) {
            console.error('[uploadFile]', error)
        }

    }

    const previewFile = (file) => {
        // console.log('llego a preview', file);
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', () => {
        setSrcImagenBack(reader.result)
        })
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