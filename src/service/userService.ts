// src/service/userService.ts
import { UserDto } from "../dto/request/userDto";
import { UserRepository } from "../repository/userRepository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    getUsers(): UserDto[] {
        return this.userRepository.getAllUsers();
    }

    getUserById(id: number): UserDto | undefined {
        return this.userRepository.getUserById(id);
    }

}
