import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CacaService } from "./caca.service";
import { CacaControllerBase } from "./base/caca.controller.base";

@swagger.ApiTags("cacas")
@common.Controller("cacas")
export class CacaController extends CacaControllerBase {
  constructor(
    protected readonly service: CacaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
