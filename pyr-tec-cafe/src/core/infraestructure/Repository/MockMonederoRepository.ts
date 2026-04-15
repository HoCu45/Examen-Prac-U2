import { Monedero } from "../../entities/Monedero.js";

import {IMonederoRepository} from "./IMonederoRepository.js";

// Implementación simulada del repositorio

// Usa memoria en lugar de una base de datos real

export class MockMonederoRepository implements IMonederoRepository {

private monederos: Map<string, Monedero> = new Map();

async buscarPorId(id: string): Promise<Monedero> {

const monedero = this.monederos.get(id);

if (!monedero) {
console.log(`No se encontró un monedero para el ID: ${id}`);
throw new Error(`Monedero no encontrado para el ID: ${id}`);
}
return monedero;
}

async guardar(monedero: Monedero): Promise<void> { {
this.monederos.set(monedero.getIdAlumno(), monedero);
}

}
}