import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course";
import { Group } from './group';
import { Staff } from './staff';
import { Exam } from './Exam';
import { Group_type } from 'src/entity/timetables';
import { Class } from './class';

@ObjectType()
@Entity()
export class Enrollment extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  enrollmentId: number;

  @Field()
  @Column({type: "enum", enum: ['class' , 'group']})
  enrollmentType: Group_type

  @Field(() => Course)
  @ManyToOne(() => Course, course => course.enrollments)
  @JoinColumn({name: "courseId"})
  course: Course;

  @Field(() => Group, {nullable: true})
  @ManyToOne(() => Group, group => group.enrollments)
  @JoinColumn({name: "groupId"})
  group: Group;

  @Field(() => Class, {nullable: true})
  @ManyToOne(() => Class, classVar => classVar.enrollments)
  @JoinColumn({name: "classId"})
  class: Class;

  @Field(() => Staff)
  @ManyToOne(() => Staff, staff => staff.teacherEnrollments)
  @JoinColumn({name: "teacherId"})
  teacher: Staff;

  @Field(() => Staff)
  @ManyToOne(() => Staff, staff => staff.teacherAssistantEnrollments)
  @JoinColumn({name: "teacherAssistantId"})
  teacherAssistant: Staff;

  @Field(() => [Exam])
  exams: Exam[]

}