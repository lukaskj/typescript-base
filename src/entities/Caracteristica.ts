import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import ProdutoCaracteristica from "./ProdutoCaracteristica";

// Example from an integration project. Fields in portuguese to be easier to integrate

@Entity()
class Caracteristica extends BaseEntity {
    @PrimaryColumn({ type: "bigint", transformer: { from: Number, to: Number } })
    nCodCaract: number;

    @Column()
    cNomeCaract: string;

    @Column({ nullable: true })
    cCodIntCaract?: string;

    @OneToMany(() => ProdutoCaracteristica, p => p.caracteristica)
    produtos: ProdutoCaracteristica[];
}

export default Caracteristica;