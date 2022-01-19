import { ArgsType, Field } from "@nestjs/graphql";
import { CacaWhereUniqueInput } from "./CacaWhereUniqueInput";

@ArgsType()
class CacaFindUniqueArgs {
  @Field(() => CacaWhereUniqueInput, { nullable: false })
  where!: CacaWhereUniqueInput;
}

export { CacaFindUniqueArgs };
