import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BooleanEnumColumn from "../util/BooleanEnumColumn";
import AbstractEntity from "./AbstractEntity";
import Caracteristica from "./Caracteristica";
import Produto from "./Produto";

// Example from an integration project. Fields in portuguese to be easier to integrate
@Entity()
class ProdutoCaracteristica extends AbstractEntity {

    @ManyToOne(() => Produto, carac => carac.codigo_produto)
    @JoinColumn({ name: "codigo_produto" })
    produto: Produto;

    @ManyToOne(() => Caracteristica, carac => carac.nCodCaract)
    @JoinColumn({ name: "n_cod_caract" })
    caracteristica: Caracteristica;

    @Column()
    cConteudo: string;

    @Column({
        type: "enum",
        enum: BooleanEnumColumn,
        default: BooleanEnumColumn.N
    })
    cExibirItemNF: BooleanEnumColumn;

    @Column()
    cExibirItemPedido: BooleanEnumColumn;
}

export default ProdutoCaracteristica;