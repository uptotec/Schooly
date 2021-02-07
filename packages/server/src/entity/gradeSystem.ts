import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { GradeLetter } from './gradeLetter';

@ObjectType()
@Entity()
export class GradeSystem {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  gradeSystemId: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [GradeLetter])
  @OneToMany(() => GradeLetter, gradeLetter => gradeLetter.gradeSystem)
  gradeLetters:GradeLetter[];

}