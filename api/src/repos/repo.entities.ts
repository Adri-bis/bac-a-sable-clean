import "reflect-metadata";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  ManyToMany,
} from "typeorm";
import { IsBoolean, IsString } from "class-validator";
import { Status } from "../status/status.entities";
import { Lang } from "../langs/lang.entitites";

@Entity()
export class Repo extends BaseEntity {
  @PrimaryColumn()
  @IsString()
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  url: string;

  @Column({ default: () => false })
  @IsBoolean()
  isFavorite: boolean;

  @ManyToOne(() => Status, (status) => status.id)
  status: Status;

  @ManyToMany(() => Lang, (lang) => lang.repos)
  langs?: Lang[];
}
