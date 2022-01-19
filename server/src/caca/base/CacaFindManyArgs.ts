import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CacaWhereInput } from "./CacaWhereInput";
import { Type } from "class-transformer";
import { CacaOrderByInput } from "./CacaOrderByInput";

@ArgsType()
class CacaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CacaWhereInput,
  })
  @Field(() => CacaWhereInput, { nullable: true })
  @Type(() => CacaWhereInput)
  where?: CacaWhereInput;

  @ApiProperty({
    required: false,
    type: CacaOrderByInput,
  })
  @Field(() => CacaOrderByInput, { nullable: true })
  @Type(() => CacaOrderByInput)
  orderBy?: CacaOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CacaFindManyArgs };
