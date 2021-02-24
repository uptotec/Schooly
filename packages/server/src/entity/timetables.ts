import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from './course';
import { Group } from './group';
import { Staff } from './staff';
import { Field, Int, ObjectType } from 'type-graphql';
import { Class } from './class';

export type  Timetable_type = 'lecture' | 'tutorial' | 'lab';
export type  Group_type = 'class' | 'Group';
export type  Timetable_days_type = 'sat' | 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri';

@ObjectType()
@Entity()
export class Timetable extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  timetableId: number;

  @Field()
  @Column({type: "enum", enum: ['lecture' , 'tutorial' , 'lab']})
  type: Timetable_type;

  @Field()
  @Column({type: "enum", enum: ['class' , 'group']})
  groupType: Group_type;

  @Field()
  @Column()
  online: boolean;

  @Field()
  @Column()
  recurring: boolean;

  @Field({nullable: true})
  @Column({type: 'date', nullable: true})
  date: string;

  @Field({nullable: true})
  @Column({type: "enum", enum: ['sat', 'sun' , 'mon' , 'tue' , 'wed' , 'thu' , 'fri'], nullable: true})
  day: Timetable_days_type;

  @Field()
  @Column({type: "time"})
  start_time: string;

  @Field(() => Int)
  @Column()
  duration_mins: number;

  @Field({nullable: true})
  @Column({nullable: true})
  joinLink: string

  @Column({ type: "int", nullable: true })
  courseId: number;

  @Field(() => Course)
  @ManyToOne(() => Course, course => course.timetable)
  @JoinColumn({name: "courseId"})
  course: Course;

  @Column({ type: "int", nullable: true })
  groupId: number;

  @Field(() => Group, {nullable: true})
  @ManyToOne(() => Group, group => group.timetable, {nullable: true})
  @JoinColumn({name: "groupId"})
  group: Group;

  @Column({ type: "int", nullable: true })
  classId: number;

  @Field(() => Class, {nullable: true})
  @ManyToOne(() => Class, classVar => classVar.timetable, {nullable: true})
  @JoinColumn({name: "classId"})
  class: Class;

  @Column({ type: "int", nullable: true })
  instructorId: number;

  @Field(() => Staff)
  @ManyToOne(() => Staff, staff => staff.timetable)
  @JoinColumn({name: "instructorId"})
  instructor: Staff;

}