import { ArgsType, Field } from "@nestjs/graphql";
import { User2CreateInput } from "./User2CreateInput";

@ArgsType()
class CreateUser2Args {
  @Field(() => User2CreateInput, { nullable: false })
  data!: User2CreateInput;
}

export { CreateUser2Args };
