import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Staff } from './staff';
import { Enrollment } from './enrollments';

@ObjectType()
@Entity()
export class TeacherEnrollment extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  teacherEnrollmentId: number;

  @Field(() => Enrollment, { nullable: true })
  @ManyToOne(() => Enrollment, (enrollment) => enrollment.teachers, {
    nullable: true,
  })
  @JoinColumn({ name: 'enrollmentId' })
  enrollment: Enrollment;

  @Column({ type: 'int', nullable: true })
  teacherId: number;

  @Field(() => Staff)
  @ManyToOne(() => Staff, (staff) => staff.teacherEnrollments)
  @JoinColumn({ name: 'teacherId' })
  teacher: Staff;

  @Column({ type: 'enum', enum: ['teacherAssistant', 'teacher'] })
  @Field()
  role: string;
}
