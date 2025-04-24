const ARSConvert = (number) => {
    const transfValue = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(number)

    return transfValue
}

export default ARSConvert