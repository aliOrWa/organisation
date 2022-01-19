import { ArgsType, Field } from "@nestjs/graphql";
import { User2WhereUniqueInput } from "./User2WhereUniqueInput";
import { User2UpdateInput } from "./User2UpdateInput";

@ArgsType()
class UpdateUser2Args {
  @Field(() => User2WhereUniqueInput, { nullable: false })
  where!: User2WhereUniqueInput;
  @Field(() => User2UpdateInput, { nullable: false })
  data!: User2UpdateInput;
}

export { UpdateUser2Args };
