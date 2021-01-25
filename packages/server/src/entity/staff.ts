import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Enrollment } from './enrollments';
import { Facility } from './facility';
import { Timetable } from './timetables';

@ObjectType()
@Entity()
export class Staff extends BaseEntity{

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  staffId: number

  @Field(() => Int)
  @Column()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Field(() => Facility)
  @ManyToOne(() => Facility, facility => facility.staff)
  @JoinColumn({name: "facilityId"})
  facility: Facility;

  @Field(() => [Enrollment])
  @OneToMany(() => Enrollment, enrollment => enrollment.teacher)
  teacherEnrollments: Enrollment[];

  @Field(() => [Enrollment])
  @OneToMany(() => Enrollment, enrollment => enrollment.teacherAssistant)
  teacherAssistantEnrollments: Enrollment[];

  @Field(() => [Timetable])
  @OneToMany(() => Timetable, timetable => timetable.instructor)
  timetable: Timetable[];

}