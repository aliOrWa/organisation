import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { User3Service } from "./user3.service";
import { User3ControllerBase } from "./base/user3.controller.base";

@swagger.ApiTags("user3s")
@common.Controller("user3s")
export class User3Controller extends User3ControllerBase {
  constructor(
    protected readonly service: User3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
