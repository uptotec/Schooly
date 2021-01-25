import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from "./enrollments";
import { Timetable } from "./timetables";

@ObjectType()
@Entity()
export class Course extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  courseId: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  code: string;

  @Field(() => [Enrollment])
  @OneToMany(() => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];

  @Field(() => [Timetable])
  @OneToMany(() => Timetable, timetable => timetable.course)
  timetable: Timetable[]; 

}