
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

export { getUsers };