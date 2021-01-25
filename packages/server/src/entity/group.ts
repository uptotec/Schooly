import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from './enrollments';
import { Timetable } from './timetables';
import { Student } from './student';
import { Facility } from './facility';
import { Class } from './class';
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Group {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  groupId: number;

  @Field()
  @Column()
  name: string

  @Field(() => [Enrollment])
  @OneToMany(() => Enrollment, enrollment => enrollment.group)
  enrollments: Enrollment[];

  @Field(() => [Timetable])
  @OneToMany(() => Timetable, timetable => timetable.group)
  timetable: Timetable[];

  @Field(() => [Student])
  @OneToMany(() => Student, student => student.group)
  students: Student[];

  @Field(() => Facility)
  @ManyToOne(() => Facility, facility => facility.groups)
  @JoinColumn({name: "facilityId"})
  facility: Facility;

  @Field(() => Class)
  @ManyToOne(() => Class, classVar => classVar.groups)
  @JoinColumn({name: "ClassId"})
  class: Class;

}