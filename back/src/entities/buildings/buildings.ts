import { Request, Response, } from "express";
import { Building } from "../models/Building";


const createBuilding = async (req: Request, res: Response) => {
    try {
        const {roleName} = req.tokenData;
        const { address, number_build, postal_code, city, province, quantity_apartment, floor_number, build_type } = req.body;

        if (roleName !== "admin") {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;
        }

        const building = Building.create({
            address,
            number_build,
            postal_code,
            city,
            province,
            quantity_apartment,
            build_type,
            floor_number,
        }).save();
       

        res.status(200).json({
            success: true,
            message: "Building created successfully",
            data: building,
        });
       
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating building",
            error: error
        });
        
    }
}

export { createBuilding }