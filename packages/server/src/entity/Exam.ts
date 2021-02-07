import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { Enrollment } from './enrollments';
import { Grade } from './grade';

@ObjectType()
@Entity()
export class Exam {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  examId: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({default: false})
  publishedNumber: boolean;

  @Field()
  @Column({default: false})
  publishedLetter: boolean;

  @Field(() => Float)
  @Column()
  totalScore: number;

  @Field(() => Float)
  @Column()
  percentage: number;

  @Field(() => [Enrollment])
  @ManyToMany(() => Enrollment, enrollment => enrollment.exams)
  @JoinTable({name: 'exam_enrollment'})
  enrollment: Enrollment[];

  @Field(() => Grade)
  @OneToMany(() =>Grade, grade => grade.exam)
  grades: Grade[];

}