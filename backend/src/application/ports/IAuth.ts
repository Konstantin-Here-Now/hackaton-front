import { Injectable } from "@nestjs/common";


@Injectable()
export abstract class IAuth<Entity>{
    abstract jwtDecrypt(token: string);
}