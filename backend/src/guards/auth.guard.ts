import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { UserService } from "src/services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request)

        //verifico se o token existe

        if(!token){
            throw new UnauthorizedException('Token inexistente')
        }

        //verifico se o token é válido
        let username = '';

        try {
            const payload = await this.jwtService.verifyAsync(token)
            username = payload.username;
        } catch {
            throw new UnauthorizedException('Token Inválido')
        }

        const found = await this.userService.findByUsername(username)

        if (!found){
            throw new UnauthorizedException('Usuário não cadastrado')
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined{
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token: undefined;
    }

}