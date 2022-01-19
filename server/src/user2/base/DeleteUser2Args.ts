import { ArgsType, Field } from "@nestjs/graphql";
import { User2WhereUniqueInput } from "./User2WhereUniqueInput";

@ArgsType()
class DeleteUser2Args {
  @Field(() => User2WhereUniqueInput, { nullable: false })
  where!: User2WhereUniqueInput;
}

export { DeleteUser2Args };
