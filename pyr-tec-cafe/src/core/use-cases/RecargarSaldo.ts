import { IMonederoRepository} from "../../core/infraestructure/Repository/IMonederoRepository";

export class RecargarSaldoUseCase {

// Recibimos el repositorio (la conexión a DB) como interfaz 
constructor(private repository: IMonederoRepository) {}

async ejecutar(idAlumno: string, monto: number): Promise<number> {

// 1. Buscar los datos

const monedero = await this.repository.buscarPorld(idAlumno);

// 2. Ejecutar lógica de dominio monedero.sumarSaldo(monto);

// 3. Persistir cambios

await this.repository.guardar(monedero);

return monedero.saldoActual;

}

}