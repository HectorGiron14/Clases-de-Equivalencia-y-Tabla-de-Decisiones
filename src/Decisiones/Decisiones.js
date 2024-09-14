export const validarTelefono = (telefono) => {
    if (telefono.length === 8 && /^\d{8}$/.test(telefono)) {
        return 'Aceptar';
    } else {
        return 'Rechazar';
    }
}
