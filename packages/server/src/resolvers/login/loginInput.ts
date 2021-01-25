import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class loginType {

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(8)
  password: string

}