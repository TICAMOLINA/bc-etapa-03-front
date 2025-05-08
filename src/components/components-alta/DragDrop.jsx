
import { peticionesHttp } from '../../helpers/peticiones-http'
import './DragDrop.scss'

const DragDrop = ({ setFotos, srcImagenBack, setSrcImagenBack, isPrincipal }) => {
    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']

    arrayEventosDragDrop.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        const files = e.dataTransfer.files
        handleFiles(files)
    }

    const handleChange = (e) => {
        const files = e.target.files
        handleFiles(files)
    }

    const handleFiles = async (files) => {
        const file = files[0]
        await uploadFile(file)
        previewFile(file)
    }

    const uploadFile = async (file) => {
        const url = import.meta.env.VITE_BACKEND_UPLOAD

        try {            
            const formData = new FormData()
            formData.append('foto', file)
            
            const options = {
                method: 'POST',
                body: formData
            }
  
            const imagenUp = await peticionesHttp(url, options)
            setFotos(prev => ({
                ...prev,
                [isPrincipal ? 'foto' : 'sliderFoto']: imagenUp.foto
            }))

        } catch (error) {
            console.error('[uploadFile]', error)
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('loadend', () => {
            setSrcImagenBack(reader.result)
        })
    }

    return (
        <div className='drop-area' onDrop={handleDrop}>
            <p>
                {isPrincipal ? 'Imagen principal' : 'Imagen para slider'} - 
                Suba fotos arrastrando dentro del área punteada (<b>drag and drop</b>) 
                o desde el archivo abriendo el <b>cuadro de diálogo</b>.
            </p>

            <input type="file" id={`lbl-foto-${isPrincipal ? 'principal' : 'slider'}`} 
                   accept="image/*" onChange={handleChange} />
            <label className="drop-area-button" htmlFor={`lbl-foto-${isPrincipal ? 'principal' : 'slider'}`}>
                Seleccionar archivo
            </label>

            <div className='drop-area-image'>
                <img src={srcImagenBack} alt="" />
            </div>
        </div>
    )
}

export default DragDrop