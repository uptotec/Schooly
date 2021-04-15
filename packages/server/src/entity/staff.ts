import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Facility } from './facility';
import { Timetable } from './timetables';
import { TeacherEnrollment } from './teacherEnrollments';

@ObjectType()
@Entity()
export class Staff extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  staffId: number;

  @Field(() => Int)
  @Column()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field(() => Facility)
  @ManyToOne(() => Facility, (facility) => facility.staff)
  @JoinColumn({ name: 'facilityId' })
  facility: Facility;

  @Field(() => [TeacherEnrollment])
  @OneToMany(
    () => TeacherEnrollment,
    (teacherEnrollment) => teacherEnrollment.teacher
  )
  teacherEnrollments: TeacherEnrollment[];

  @Field(() => [Timetable])
  @OneToMany(() => Timetable, (timetable) => timetable.instructor)
  timetable: Timetable[];
}
