import { ServiceResponse } from "infrastructure/utils/ServiceResponse";
import { JwtService } from "@nestjs/jwt";
import { JwtTokenModel } from "domain/models/JwtToken";
export declare class AuthUseCase {
    private jwtService;
    private readonly logger;
    serviceRes: ServiceResponse;
    constructor(jwtService: JwtService);
    decryptJwt(token: string): number;
    calculateTokens(user: JwtTokenModel): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
