import { IMonederoRepository} from "../infraestructure/Repository/IMonederoRepository";
import { Monedero } from "../entities/Monedero";

export class ConsultarSaldo {
  constructor(private repo: IMonederoRepository) {}

  async ejecutar(idAlumno: string): Promise<number> {
    const monedero = await this.repo.buscarPorId(idAlumno);

    if (!monedero) {
      throw new Error(`Monedero no encontrado para el ID: ${idAlumno}`);
    }

    return monedero.getSaldo();
  }
}