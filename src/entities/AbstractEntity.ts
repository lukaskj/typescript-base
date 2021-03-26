import { PrimaryGeneratedColumn } from "typeorm";


export default class AbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;
}