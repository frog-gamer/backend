import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class InteractionHeader {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  cif: string;

  @Column()
  hp: string;

  @Column()
  type: string;

  @Column({ type: 'int' })
  status: number;

  @CreateDateColumn ({ type: 'timestamp' })
  date: Date;

  @CreateDateColumn ({ type: 'timestamp' })
  endDate: Date;

  constructor(cif: string, hp: string, type: string) {
    this.cif = cif;
    this.hp = hp;
    this.type = type;
  }

}
