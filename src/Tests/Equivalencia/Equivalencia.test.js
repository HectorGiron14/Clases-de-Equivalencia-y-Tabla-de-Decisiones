import { validarEdad } from "../../Equivalencia/Equivalencia";

describe('Pruebas en validarEdad.js', () => {
    test('Probar si la edad está entre 18 y 65', () => {
        expect(validarEdad(30)).toBe('Aceptar');
    });

    test('Probar si la edad es menor que 18', () => {
        expect(validarEdad(17)).toBe('Rechazar');
    });

    test('Probar si la edad es mayor que 65', () => {
        expect(validarEdad(66)).toBe('Rechazar');
    });
});