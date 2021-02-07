import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { Exam } from './Exam';
import { Student } from './student';
import { GradeLetter } from './gradeLetter';

@ObjectType()
@Entity()
export class Grade {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  gradeId: number;

  @Field(() => Float)
  @Column()
  score: number;

  @Field({nullable: true})
  @OneToOne(() => GradeLetter, {nullable: true})
  @JoinColumn({name: 'letterId'})
  scoreLetter: GradeLetter;

  @Field(() => Exam)
  @ManyToOne(() => Exam, exam => exam.grades)
  @JoinColumn({name: 'examId'})
  exam: Exam;

  @Field(() => Student)
  @ManyToOne(() => Student, student => student.grades)
  @JoinColumn({name: 'studentId'})
  student: Student

}