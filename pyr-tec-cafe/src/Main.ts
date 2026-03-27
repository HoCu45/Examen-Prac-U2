import { Monedero } from "./core/entities/Monedero.js";
import { MockMonederoRepository } from "../src/core/infraestructure/Repository/MockMonederoRepository.js";
import { ConsultarSaldo } from "./core/use-cases/ConsultarSaldo.js";

async function main() {
  console.log("☕ Tec-Café - Consulta de Saldo\n");

  // 1. Crear repositorio
  const repo = new MockMonederoRepository();

  // 2. Crear monedero de prueba
  const monedero = new Monedero({
    idAlumno: "alumno123",
    saldo: 150
  });

  // 3. Guardarlo
  await repo.guardar(monedero);

  // 4. Crear caso de uso
  const consultarSaldo1 = new ConsultarSaldo(repo);

  // 5. Ejecutar caso de uso
  const saldo = await consultarSaldo1.ejecutar("alumno123");

  console.log("💰 Saldo actual del alumno:", saldo);
}

main().catch(error => {
  console.error("❌ Error:", error.message);
});