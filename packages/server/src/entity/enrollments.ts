import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from './course';
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
  @Column({ type: 'enum', enum: ['class', 'group'] })
  enrollmentType: Group_type;

  @Column({ type: 'int', nullable: true })
  courseId: number;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.enrollments)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'int', nullable: true })
  groupId: number;

  @Field(() => Group, { nullable: true })
  @ManyToOne(() => Group, (group) => group.enrollments)
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @Column({ type: 'int', nullable: true })
  classId: number;

  @Field(() => Class, { nullable: true })
  @ManyToOne(() => Class, (classVar) => classVar.enrollments)
  @JoinColumn({ name: 'classId' })
  class: Class;

  @Column({ type: 'int', nullable: true })
  teacherId: number;

  @Field(() => Staff)
  @ManyToOne(() => Staff, (staff) => staff.teacherEnrollments)
  @JoinColumn({ name: 'teacherId' })
  teacher: Staff;

  @Column({ type: 'int', nullable: true })
  teacherAssistantId: number;

  @Field(() => Staff)
  @ManyToOne(() => Staff, (staff) => staff.teacherAssistantEnrollments)
  @JoinColumn({ name: 'teacherAssistantId' })
  teacherAssistant: Staff;

  @Field(() => [Exam])
  exams: Exam[];
}
