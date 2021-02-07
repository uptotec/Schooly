import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, Float, Int, ObjectType } from "type-graphql";
import { GradeSystem } from './gradeSystem';

@ObjectType()
@Entity()
export class GradeLetter {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  gradeLetterId: number;

  @Field()
  @Column({length: 2})
  Letter: string;

  @Field(() => Float)
  @Column('float')
  min: number;

  @Field(() => Float)
  @Column('float')
  max: number;

  @Field(() => GradeSystem)
  @ManyToOne(() => GradeSystem, gradeSystem => gradeSystem.gradeLetters)
  @JoinColumn({name: 'gradeSystemId'})
  gradeSystem: GradeSystem;

}