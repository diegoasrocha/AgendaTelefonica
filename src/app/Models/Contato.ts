import { TipoContato } from "./TipoContato";

export interface Contato {
    id: number;
    nome: string;
    sobreNome: string;
    numero: number;
    idTipoContato: number;
    
    tipoContato: TipoContato;
 

    /**
     *
     */
    // constructor(id: number, nome: string, sobreNome: string, numero: number, idTipoContato: number, tipoContato: TipoContato) { 
    //     this.id = id;
    //     this.nome = nome;
    //     this.sobreNome = sobreNome,
    //     this.numero = numero,
    //     this.idTipoContato = idTipoContato,
    //     this.tipoContato = tipoContato
    // }
}