import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from './student';
import { Facility } from './facility';
import { Group } from './group';
import { Field, Int, ObjectType } from "type-graphql";
import { Timetable } from "./timetables";
import { Enrollment } from './enrollments';

@ObjectType()
@Entity()
export class Class {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  classId: number;

  @Field(() => Int)
  @Column()
  year: number;

  @Field()
  @Column({nullable: true})
  department: string;

  @Field(() => Int)
  @Column()
  degree_year: number;

  @Field(() => Facility)
  @ManyToOne(() => Facility, facility => facility.classes)
  @JoinColumn({name: "facilityId"})
  facility: Facility;

  @Field(() => [Student])
  @OneToMany(() => Student, student => student.class)
  students: Student[];

  @Field(() => [Group])
  @OneToMany(() => Group, group => group.class)
  groups: Group[];

  @Field(() => [Timetable])
  @OneToMany(() => Timetable, timetable => timetable.class)
  timetable: Timetable[];

  @Field(() => [Enrollment])
  @OneToMany(() => Enrollment, enrollment => enrollment.class)
  enrollments: Enrollment[];

}