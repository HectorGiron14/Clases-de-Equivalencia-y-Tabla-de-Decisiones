export const validarEdad = (edad) => {
    if (edad >= 18 && edad <= 65) {
        return 'Aceptar';
    } else {
        return 'Rechazar';
    }
}