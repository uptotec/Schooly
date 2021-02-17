import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Facility } from './facility';
import { Class } from './class';
import { Group } from './group';
import { Field, Int, ObjectType } from "type-graphql";
import { Timetable } from './timetables';
import { Enrollment } from "./enrollments";
import { Grade } from './grade';
import { Attendance } from './attendance';

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

  @Field(() => [Grade])
  @OneToMany(() => Grade, grade => grade.student)
  grades: Grade[];

  @Field(() => [Attendance])
  @OneToMany(() => Attendance, attendance => attendance.student)
  attendance: Attendance[];

  @Field(() => [Timetable])
  timetable: Timetable[];

  @Field(() => [Enrollment])
  courses: Enrollment[];

}