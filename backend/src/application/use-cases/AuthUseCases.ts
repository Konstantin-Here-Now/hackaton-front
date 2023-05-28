import { Inject, Injectable, Logger } from "@nestjs/common";
import { UserExceptions } from "domain/exceptions/UserExceptions";
import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { JwtService } from "@nestjs/jwt";
import { JwtTokenModel } from "domain/models/JwtToken";

@Injectable()
export class AuthUseCase {
  private readonly logger = new Logger(AuthUseCase.name);
  public serviceRes = new ServiceResponse();
  constructor(private jwtService: JwtService) {}

  decryptJwt(token: string) {
    const decodedJwtAccessToken = this.jwtService.decode(token);
    console.log(decodedJwtAccessToken)
    const id: number = decodedJwtAccessToken["id"];
    return id;
  }

  async calculateTokens(user: JwtTokenModel) {
      console.log(user);
       const access_token = await this.jwtService.signAsync(user, {
         expiresIn: '15m',
       });
       const refresh_token = await this.jwtService.signAsync(user, {
         expiresIn: '7d',
       });
       return { access_token, refresh_token };
     }
  
}
