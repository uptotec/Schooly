import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Course } from './course';
import { Group } from './group';
import { Staff } from './staff';
import { Field, Int, ObjectType } from 'type-graphql';
import { Class } from './class';
import { JoinTable } from 'typeorm';

export type Timetable_type = 'lecture' | 'tutorial' | 'lab';
export type Group_type = 'class' | 'Group';
export type Timetable_days_type =
  | 'sat'
  | 'sun'
  | 'mon'
  | 'tue'
  | 'wed'
  | 'thu'
  | 'fri';

@ObjectType()
@Entity()
export class Timetable extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  timetableId: number;

  @Field()
  @Column({ type: 'enum', enum: ['lecture', 'tutorial', 'lab'] })
  type: Timetable_type;

  @Field()
  @Column({ type: 'enum', enum: ['class', 'group'] })
  groupType: Group_type;

  @Field()
  @Column()
  online: boolean;

  @Field()
  @Column()
  recurring: boolean;

  @Field(() => String, { nullable: true })
  @Column({ type: 'date', nullable: true })
  date: string | null;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'enum',
    enum: ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
    nullable: true,
  })
  day: Timetable_days_type | null;

  @Field()
  @Column({ type: 'time' })
  start_time: string;

  @Field(() => Int)
  @Column()
  duration_mins: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  joinLink: string | null;

  @Column({ type: 'int', nullable: true })
  courseId: number;

  @Field(() => Course)
  @ManyToOne(() => Course, (course) => course.timetable)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'int', nullable: true })
  groupId: number;

  @Field(() => Group, { nullable: true })
  @ManyToOne(() => Group, (group) => group.timetable, { nullable: true })
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @Column({ type: 'int', nullable: true })
  classId: number;

  @Field(() => Class, { nullable: true })
  @ManyToOne(() => Class, (classVar) => classVar.timetable, { nullable: true })
  @JoinColumn({ name: 'classId' })
  class: Class;

  @RelationId((timetable: Timetable) => timetable.instructors)
  instructorsIds: number[];

  @Field(() => [Staff])
  @ManyToMany(() => Staff, (staff) => staff.timetable)
  @JoinTable({
    name: 'staff_timetable',
    joinColumns: [{ name: 'timetableId' }],
    inverseJoinColumns: [{ name: 'staffId' }],
  })
  instructors: Staff[];
}
