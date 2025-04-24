
export const peticionesHttp = async (url, options) => {

    try {

        const res = await fetch(url, options)
        if(!res.ok) throw new Error(`No se pudo realizar la petición. Código: ${res.status}` )
        const data = await res.json()
        return data

    } catch (error) {
        console.error('[peticionesHttp]', error.message)
    }

}