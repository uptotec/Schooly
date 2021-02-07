import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course";
import { Group } from './group';
import { Staff } from './staff';
import { Exam } from './Exam';

@ObjectType()
@Entity()
export class Enrollment extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  enrollmentId: number;

  @Field(() => Course)
  @ManyToOne(() => Course, course => course.enrollments)
  @JoinColumn({name: "courseId"})
  course: Course;

  @Field(() => Group)
  @ManyToOne(() => Group, group => group.enrollments)
  @JoinColumn({name: "groupId"})
  group: Group;

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