import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Facility } from './facility';
import { Class } from './class';
import { Group } from './group';
import { Field, Int, ObjectType } from "type-graphql";
import { Timetable } from './timetables';
import { Enrollment } from "./enrollments";

@ObjectType()
@Entity()
export class Student extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  studentId: number;

  @Field(() => Int)
  @Column({unique: true})
  id: number;

  @Field()
  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Field()
  @Column()
  name: string;

  @Field(() => Facility)
  @ManyToOne(() => Facility, facility => facility.students)
  @JoinColumn({name: "facilityId"})
  facility: Facility;

  @Field(() => Class)
  @ManyToOne(() => Class, classVar => classVar.students)
  @JoinColumn({name: "classId"})
  class: Class;

  @Field(() => Group)
  @ManyToOne(() => Group, group => group.students)
  @JoinColumn({name: "groupId"})
  group: Group;

  @Field(() => [Timetable])
  timetable: Timetable[];

  @Field(() => [Enrollment])
  courses: Enrollment[];

}