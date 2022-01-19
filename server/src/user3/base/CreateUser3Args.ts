import { ArgsType, Field } from "@nestjs/graphql";
import { User3CreateInput } from "./User3CreateInput";

@ArgsType()
class CreateUser3Args {
  @Field(() => User3CreateInput, { nullable: false })
  data!: User3CreateInput;
}

export { CreateUser3Args };
