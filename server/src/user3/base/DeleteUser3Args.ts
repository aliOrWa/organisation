import { ArgsType, Field } from "@nestjs/graphql";
import { User3WhereUniqueInput } from "./User3WhereUniqueInput";

@ArgsType()
class DeleteUser3Args {
  @Field(() => User3WhereUniqueInput, { nullable: false })
  where!: User3WhereUniqueInput;
}

export { DeleteUser3Args };
