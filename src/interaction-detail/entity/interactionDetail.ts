import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class InteractionDetail {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  interactionId: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @CreateDateColumn ({ type: 'timestamp' })
  date: Date;

  constructor(interactionId: string, type: string, content: string) {
    this.interactionId = interactionId;
    this.type = type;
    this.content = content;
  }

}
