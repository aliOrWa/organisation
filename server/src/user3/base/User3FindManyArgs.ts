import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { User3WhereInput } from "./User3WhereInput";
import { Type } from "class-transformer";
import { User3OrderByInput } from "./User3OrderByInput";

@ArgsType()
class User3FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => User3WhereInput,
  })
  @Field(() => User3WhereInput, { nullable: true })
  @Type(() => User3WhereInput)
  where?: User3WhereInput;

  @ApiProperty({
    required: false,
    type: User3OrderByInput,
  })
  @Field(() => User3OrderByInput, { nullable: true })
  @Type(() => User3OrderByInput)
  orderBy?: User3OrderByInput;

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

export { User3FindManyArgs };
