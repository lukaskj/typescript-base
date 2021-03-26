import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import BooleanEnumColumn from "../util/BooleanEnumColumn";
import ProdutoCaracteristica from "./ProdutoCaracteristica";

// Example from an integration project. Fields in portuguese to be easier to integrate
@Entity()
class Produto extends BaseEntity {
    @PrimaryColumn({ type: "bigint", transformer: { from: Number, to: Number } })
    codigo_produto: number;

    @Column({ nullable: true })
    codigo_produto_integracao: string;

    @Column({ nullable: true })
    descricao: string;

    @Column({ nullable: true })
    codigo: string;

    @Column({ nullable: true })
    unidade: string;

    @Column({ nullable: true })
    ncm: string;

    @Column({ nullable: true })
    ean: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    valor_unitario: number;

    @Column({ nullable: true })
    codigo_familia: number;

    @Column({ nullable: true })
    tipoItem: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    peso_liq: number;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    peso_bruto: number;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    altura: number;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    largura: number;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    profundidade: number;

    @Column({ nullable: true })
    marca: string;

    @Column({ nullable: true })
    dias_garantia: number;

    @Column({ nullable: true })
    dias_crossdocking: number;

    @Column({ nullable: true })
    descr_detalhada: string;

    @Column({ nullable: true })
    obs_internas: string;

    @OneToMany(() => ProdutoCaracteristica, p => p.produto)
    caracteristicas: ProdutoCaracteristica[];

    @Column({ nullable: true })
    exibir_descricao_nfe: string;

    @Column({ nullable: true })
    exibir_descricao_pedido: string;

    @Column({ nullable: true })
    cst_icms: string;

    @Column({ nullable: true })
    modalidade_icms: string;

    @Column({ nullable: true })
    csosn_icms: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    aliquota_icms: number;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    red_base_icms: number;

    @Column({ nullable: true })
    motivo_deson_icms: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    per_icms_fcp: number;

    @Column({ nullable: true })
    codigo_beneficio: string;

    @Column({ nullable: true })
    cst_pis: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    aliquota_pis: number;

    @Column({ nullable: true })
    cst_cofins: string;

    @Column({
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true
    })
    aliquota_cofins: number;

    @Column({ nullable: true })
    cfop: string;

    @Column({ nullable: true })
    codInt_familia: string;

    @Column({ nullable: true })
    descricao_familia: string;

    @Column({ nullable: true })
    bloqueado: string;

    @Column({
        type: "enum",
        enum: BooleanEnumColumn,
        default: BooleanEnumColumn.N
    })
    bloquear_exclusao: BooleanEnumColumn;

    @Column({
        type: "enum",
        enum: BooleanEnumColumn,
        default: BooleanEnumColumn.N
    })
    importado_api: BooleanEnumColumn;

    @Column({
        type: "enum",
        enum: BooleanEnumColumn,
        default: BooleanEnumColumn.N
    })
    inativo: BooleanEnumColumn;
}

export default Produto;