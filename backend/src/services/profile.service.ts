import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {

    profile() {
        return {
            fullname: 'Cassiano Eduardo Prediger',
            username: 'cassianoprediger',
            description: 'Drones FPV, eletrônica e tecnologias em geral',
            createdAt: '2022-08-13'
        }
    }

}