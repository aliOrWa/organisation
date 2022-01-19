import { ArgsType, Field } from "@nestjs/graphql";
import { User3WhereUniqueInput } from "./User3WhereUniqueInput";
import { User3UpdateInput } from "./User3UpdateInput";

@ArgsType()
class UpdateUser3Args {
  @Field(() => User3WhereUniqueInput, { nullable: false })
  where!: User3WhereUniqueInput;
  @Field(() => User3UpdateInput, { nullable: false })
  data!: User3UpdateInput;
}

export { UpdateUser3Args };
