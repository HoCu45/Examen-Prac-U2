import { Monedero } from "../../entities/Monedero.js";

// Contrato del repositorio 
export interface IMonederoRepository {

buscarPorId(id:string): Promise<Monedero>;

guardar(monedero: Monedero): Promise<void>;

}