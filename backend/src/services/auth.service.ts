import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { ApplicationEsception } from "src/exceptions";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) { }

    async validateCredential(username: string, password: string): Promise<User> {
        const found = await this.repository.findOneBy({ username: username });

        if (!found) {
            throw new ApplicationEsception('Invalid User', 401)
        }

        if (found.password !== password) {
            throw new ApplicationEsception('Invalid Password', 401)
        }

        return found;

    }

}