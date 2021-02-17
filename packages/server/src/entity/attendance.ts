import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from './student';

@ObjectType()
@Entity()
export class Attendance extends BaseEntity {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  attendanceId: number;

  @Field()
  @Column('date')
  date:Date;

  @Field()
  @Column()
  attended: boolean;

  @Field(() => Student)
  @ManyToOne(() => Student, student => student.attendance)
  @JoinColumn({name: 'studentId'})
  student: Student;

}