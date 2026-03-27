import {Monedero} from "./core/entities/Monedero.js";
console.log("-- Iniciando Sistema Tec-Café (CLI) ---");
function main() {
const objMonedero = new Monedero({ idAlumno: "124345", saldo: 500 });
console.log("Saldo inicial:", objMonedero.saldoActual); }
main();