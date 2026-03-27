import { MockMonederoRepository } from "../core/infraestructure/Repository/MockMonederoRepository";
import { ConsultarSaldo } from "../core/use-cases/ConsultarSaldo";
import { Monedero, MonederoProps } from "../core/entities/Monedero";

describe("ConsultarSaldoUseCase", () => {

  let repo: MockMonederoRepository;
  let useCase: ConsultarSaldo;

  beforeEach(() => {
    repo = new MockMonederoRepository();
    useCase = new ConsultarSaldo(repo);

    const monedero = new Monedero({
      idAlumno: "alumno123",
      saldo: 200
    });

    repo.guardar(monedero);
  });

  it("debería retornar el saldo correctamente", async () => {
    const saldo = await useCase.ejecutar("alumno123");
    expect(saldo).toBe(200);
  });

  it("debería lanzar error si el monedero no existe", async () => {
    await expect(
      useCase.ejecutar("inexistente")
    ).rejects.toThrow("Monedero no encontrado");
  });

});