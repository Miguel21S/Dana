
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
            message: "list of users successfully found",
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

const updateUsers = async (req: Request, res: Response) => {
    try {
        const { roleId, roleName } = req.tokenData;
        const { name, lastname, email, phone, date_born, gender, special_situation, date_entry_apartment } = req.body;
        const user_id = req.params.id;

        const user = await Users.findOne({ where: { id: parseInt(user_id) } });
        
        if (isNaN(parseInt(user_id))) {
            res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
            return;
        }

        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found',
            });
            return;
        }

        if (user.id !== roleId && roleName !== 'admin') {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;            
        }

        Users.update(
            { 
                id: parseInt(user_id)
            },

            {
                id: parseInt(user_id),
                name,
                lastname,
                date_born,
                gender,
                special_situation,
                phone,
                email,
                date_entry_apartment,
            }
        )

        res.status(200).json({
            success: true,
            message: "User updated successfully",
        });
        return;
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating user",
            error: error
        });

    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { roleId, roleName } = req.tokenData;
        const user_id = req.params.id;

        if (roleName !== 'admin') {
            res.status(403).json({
                sucess: false,
                messsage: 'Unauthorized access',
            });
            return;
        }

        if (isNaN(parseInt(user_id))) {
            res.status(400).json({
                success: false,
                message: "Invalid user ID",
            });
            return;
        }

        const user = await Users.findOne({
            where: {
                id: parseInt(user_id)
            },
            select:
                ["id", "role_id"]
        });

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        if (user.id === roleId || user.role_id === 1) {
            res.status(403).json({
                success: false,
                message: "Administrators cannot delete themselves or other administrators",
            });
            return;
        }

        const removeUser: any = await Users.delete(user?.id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: removeUser,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting user",
            error: error
        });

    }
}

const getPrifile = async (req: Request, res: Response) => {
    try {
        const user_id = req.tokenData.roleId;

        const user = await Users.findOne({ where: { id: user_id } })

        if (!user) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
            return;
        }

        const prifile = await Users.findOne({
            where: { id: user_id },
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

export { getUsers, getPrifile, deleteUser, updateUsers };