import { ArgsType, Field } from "@nestjs/graphql";
import { CacaWhereUniqueInput } from "./CacaWhereUniqueInput";

@ArgsType()
class DeleteCacaArgs {
  @Field(() => CacaWhereUniqueInput, { nullable: false })
  where!: CacaWhereUniqueInput;
}

export { DeleteCacaArgs };
