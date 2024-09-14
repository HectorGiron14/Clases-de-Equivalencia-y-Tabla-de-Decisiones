import { validarTelefono } from "../../Decisiones/Decisiones";

describe('Pruebas en validarTelefono.js', () => {
    test('Probar cualquier combinación de 8 dígitos', () => {
        expect(validarTelefono('56892218')).toBe('Aceptar');
    });

    test('Probar si tiene menos de 8 dígitos', () => {
        expect(validarTelefono('1234567')).toBe('Rechazar');
    });

    test('Probar si tiene más de 8 dígitos', () => {
        expect(validarTelefono('123456789')).toBe('Rechazar');
    });

    test('Probar si contiene caracteres no válidos', () => {
        expect(validarTelefono('1234abcd')).toBe('Rechazar');
    });
});