import { Injectable } from "@nestjs/common";
import { AuthModel } from "domain/models/AuthModel";
import { IAuth } from "./IAuth";


@Injectable()
export abstract class IAuthRepository extends IAuth<AuthModel>{}