import { ArgsType, Field } from "@nestjs/graphql";
import { User3WhereUniqueInput } from "./User3WhereUniqueInput";

@ArgsType()
class User3FindUniqueArgs {
  @Field(() => User3WhereUniqueInput, { nullable: false })
  where!: User3WhereUniqueInput;
}

export { User3FindUniqueArgs };
