import {Monedero} from "../core/entities/Monedero.js";

const objMonedero = new Monedero({

idAlumno: "124345",

saldo: 500

});

describe("Pruebas de Monedero Tec-Café", () => {

test("Recarga debe ser entre 50 y 500", () => {

expect( objMonedero.validarMontoRecarga(50) ).toBe(true); });

test("Recarga mayor a 500 imposible", () => { expect( objMonedero.validarMontoRecarga(600) ).toBe(false); });

test("Recarga menor a 50 imposible", () => {

expect( objMonedero.validarMontoRecarga(40) ).toBe(false); });

});