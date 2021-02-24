import { IsBoolean, IsDateString, IsInt, IsIn, IsNotEmpty, IsUrl } from "class-validator";
import { Group_type, Timetable_days_type, Timetable_type } from "src/entity/timetables";
import { Field, InputType, Int } from "type-graphql";

@InputType()
export class createSessionInput {

  @Field()
  @IsIn(['lecture' , 'tutorial' , 'lab'])
  type: Timetable_type;

  @Field()
  @IsIn(['class' , 'group'])
  groupType: Group_type;

  @Field()
  @IsBoolean()
  online: boolean;

  @Field()
  @IsBoolean()
  recurring: boolean;

  @Field({nullable: true})
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @Field({nullable: true})
  @IsIn(['sat', 'sun' , 'mon' , 'tue' , 'wed' , 'thu' , 'fri'])
  day: Timetable_days_type;

  @Field()
  @IsNotEmpty()
  start_time: string;

  @Field(() => Int)
  @IsInt()
  duration_mins: number;

  @Field({nullable: true})
  @IsUrl()
  joinLink: string

  @Field(() => Int)
  @IsInt()
  course: number;

  @Field(() => Int, {nullable: true})
  @IsInt()
  group: number;

  @Field(() => Int, {nullable: true})
  @IsInt()
  class: number;

}