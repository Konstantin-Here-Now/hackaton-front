import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from "@nestjs/swagger";
import { UserMetaUsecase } from "application/use-cases/UserMetaUsecase";
import { FormModel } from "domain/models/FormModel";
import { JwtTokenModel } from "domain/models/JwtToken";
import { PlaceWorkModel } from "domain/models/PlaceWorkModel";
import { BadRequestError } from "presentation/errors/BadRequestError";
import { UnprocessableEntityError } from "presentation/errors/UnprocessableEntityError";

@ApiTags("Meta")
@Controller("meta")
export class UserMetaController {
  constructor(private readonly userMetaUsecase: UserMetaUsecase) {}

  @Post("form/add/:token")
  async addUserForm(@Param("token") token, @Body() data: FormModel) {
    const result = await this.userMetaUsecase.addUserForm(token, data);
    return result;
  }

  @Post("form/place/:token")
  async addUserPlace(
    @Param("token") token,
    @Body() data: Array<PlaceWorkModel>
  ) {
    const result = await this.userMetaUsecase.addUserPlaceWork(
      token,
      data
    );
    return result;
  }

  @Get("form/user/:token")
  async getUserForms(
    @Param("token") token
  ) {
    console.log(token);
    const result = await this.userMetaUsecase.getUserForm(token);
    return result;
  }

  @Get("role/:token")
  async getUserRole(
    @Param("token") token
  ) {
    const result = await this.userMetaUsecase.getUserRole(token);
    return result;
  }
}
