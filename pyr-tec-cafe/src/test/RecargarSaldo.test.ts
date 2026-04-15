import { RecargarSaldoUseCase } from "../core/use-cases/RecargarSaldo";
import { MockMonederoRepository } from "../core/infraestructure/Repository/MockMonederoRepository";
import { Monedero, MonederoProps } from "../core/entities/Monedero";

describe("RecargarSaldoUseCase", () => {

  let mockRepo: MockMonederoRepository;
  let useCase: RecargarSaldoUseCase;

  beforeEach(() => {
    mockRepo = new MockMonederoRepository();
    useCase = new RecargarSaldoUseCase(mockRepo);

    const monederoProps: MonederoProps = {
      idAlumno: "alumno123",
      saldo: 100
    };

    const monedero = new Monedero(monederoProps);
    mockRepo.guardar(monedero);
  });

  it("deberia recargar el saldo correctamente", async () => {
    const nuevoSaldo = await useCase.ejecutar("alumno123", 200);

    expect(nuevoSaldo).toBe(300);
  });

  it("deberia lanzar error si el monto es inválido", async () => {
    await expect(
      useCase.ejecutar("alumno123", 30)
    ).rejects.toThrow("Monto de recarga inválido para las reglas del Tec-Café");

    await expect(
      useCase.ejecutar("alumno123", 600)
    ).rejects.toThrow("Monto de recarga inválido para las reglas del Tec-Café");
  });

  it("debería lanzar error si el monedero no existe", async () => {
    await expect(
      useCase.ejecutar("alumnoInexistente", 100)
    ).rejects.toThrow("Monedero no encontrado para el ID: alumnoInexistente");
  });

});