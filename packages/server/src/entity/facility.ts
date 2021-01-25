import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from './student';
import { Class } from './class';
import { Group } from './group';
import { Staff } from './staff';
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Facility {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  facilityId: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [Student])
  @OneToMany(() => Student, student => student.facility)
  students: Student[];

  @Field(() => [Class])
  @OneToMany(() => Class, classVar => classVar.facility)
  classes: Class[];

  @Field(() => [Group])
  @OneToMany(() => Group, group => group.facility)
  groups: Group[];

  @Field(() => Staff)
  @OneToMany(() => Staff, staff => staff.facility)
  staff: Staff;

}