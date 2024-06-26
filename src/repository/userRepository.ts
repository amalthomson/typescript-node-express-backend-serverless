// src/repository/userRepository.ts
import { UserDto } from "../dto/request/userDto";
import * as fs from "fs";
import * as path from "path";

export class UserRepository {
    private users: UserDto[] = [];

    constructor() {
        const dataPath = path.join(__dirname, '../data/users.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        this.users = JSON.parse(data);
    }

    getAllUsers(): UserDto[] {
        return this.users;
    }

    getUserById(id: number): UserDto | undefined {
        return this.users.find(user => user.id === id);
    }

}
