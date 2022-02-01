import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tweet extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "title", type: "varchar", length: 50 })
    title: string;

    @Column({ name: "body", type: "varchar", length: 255 })
    body: string;

    @Column({ name: "category", type: "varchar", length: 50 })
    category: string;

    @CreateDateColumn({ name: "created_at", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at", type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    updatedAt: Date;
}
