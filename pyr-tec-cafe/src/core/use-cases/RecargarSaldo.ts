import { IMonederoRepository } from "../infraestructure/Repository/IMonederoRepository.js";

export class RecargarSaldoUseCase {

  constructor(private repository: IMonederoRepository) {}

  async ejecutar(idAlumno: string, monto: number): Promise<number> {

    // 1. Buscar monedero
    const monedero = await this.repository.buscarPorId(idAlumno);

    if (!monedero) {
      throw new Error(`Monedero no encontrado para el ID: ${idAlumno}`);
    }

    // 2. Ejecutar lógica de dominio
    monedero.sumarSaldo(monto);

    // 3. Guardar cambios
    await this.repository.guardar(monedero);

    // 4. Retornar saldo actualizado
    return monedero.getSaldo();
  }
}