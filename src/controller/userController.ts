// src/controller/userController.ts
import { Request, Response } from "express";
import { UserService } from "../service/userService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getUsers = (req: Request, res: Response) => {
        const users = this.userService.getUsers();
        res.json(users);
    };

    getUserById = (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const user = this.userService.getUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    };
    
}
