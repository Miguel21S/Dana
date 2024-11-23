
import { Request, Response } from "express";
import { Users } from "../models/users";


const getUsers = async (req: Request, res: Response) => {
    try {
        const roleName = req.tokenData.roleName;
        
        if (roleName !== "admin") {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;
        }
        
        const users = await Users.find({
            select: {
                id: true,
                name: true,
                lastname: true,
                email: true,
                phone: true,
                date_born: true,
                gender: true,
                special_situation: true,
                date_entry_apartment: true,
            },
        });

        res.status(200).json({
            success: true,
            data: users,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving users",
            error: error
        });
    }

}

const getPrifile = async (req: Request, res: Response) => {
    try {
        const user_id = req.tokenData.roleId;

        const user = await Users.findOne({ where: { id: user_id } })

        if(!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        const prifile = await Users.findOne({
            where: { id: user_id},
            select: {
                id: true,
                name: true,
                lastname: true,
                date_born: true,
                gender: true,
                email: true,
                phone: true,
                special_situation: true,
                date_entry_apartment: true,
            }
        })

        res.status(200).json({
            success: true,
            data: prifile,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving user profile",
            error: error
        });
    }
}

export { getUsers, getPrifile };