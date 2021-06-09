import { Comentario } from "./Comentario"
import { Produto } from "./Produto"

export class User {
    public id: number
    public nome: string
    public email: string
    public senha: string
	public endereco: string
    public tipoDoador: boolean
    public tipoParceiro: boolean
	public descricao: string
    /*     public produto: Produto[]
    // public usuario: string
    // public causa: string
	// public cnpj: string
	// public conta: string
    public comentario: Comentario[] */

}