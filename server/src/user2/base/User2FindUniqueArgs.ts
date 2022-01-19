import { ArgsType, Field } from "@nestjs/graphql";
import { User2WhereUniqueInput } from "./User2WhereUniqueInput";

@ArgsType()
class User2FindUniqueArgs {
  @Field(() => User2WhereUniqueInput, { nullable: false })
  where!: User2WhereUniqueInput;
}

export { User2FindUniqueArgs };
