import { Monedero } from "../../entities/Monedero.js";

// Contrato del repositorio 
export interface IMonederoRepository {

buscarPorld(id:string): Promise<Monedero>;

guardar(monedero: Monedero): Promise<void>;

}