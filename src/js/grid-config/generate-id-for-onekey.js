
export const obtenerDescripcion = () => {
    const desc = [];
    const elements = document.querySelectorAll('.key-desc');
    for (let element of elements) {
        desc.push(element.innerText);
    }
    return desc;
};

export const generarId = (descripciones) => {
    const keys = document.querySelectorAll('.keys');
    for (let i = 0; i < descripciones.length; i++) {
        keys[i].id = (descripciones[i]).toLowerCase();
    }
}