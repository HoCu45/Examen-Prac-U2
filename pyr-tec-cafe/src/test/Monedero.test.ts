import { Monedero } from "../core/entities/Monedero";

describe("Monedero", () => {

  it("debería aumentar el saldo correctamente", () => {
    const monedero = new Monedero({
      idAlumno: "alumno123",
      saldo: 100
    });

    monedero.sumarSaldo(100);

    expect(monedero.getSaldo()).toBe(200);
  });

  it("debería lanzar error si el monto es inválido", () => {
    const monedero = new Monedero({
      idAlumno: "alumno123",
      saldo: 100
    });

    expect(() => {
      monedero.sumarSaldo(30);
    }).toThrow("Monto de recarga inválido");
  });

});