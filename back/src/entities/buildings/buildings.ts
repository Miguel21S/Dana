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

const updateBuilding = async (req: Request, res: Response) => {
    try {
        const {roleName} = req.tokenData;
        const building_id  = req.params.id;
        const { address, number_build, postal_code, city, province, quantity_apartment, floor_number, build_type } = req.body;

        if(isNaN(parseInt(building_id))){
            res.status(400).json({
                success: false,
                message: "Invalid building ID",
            });
            return;
        }

        if (roleName!== "admin") {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;
        }

        const building = await Building.findOne({where: { id: parseInt(building_id) } });

        if(!building) {
            res.status(404).json({
                success: false,
                message: "Building not found",
            });
            return;
        }

        await Building.update(
            { id: parseInt(building_id) },
            {
                address,
                number_build,
                postal_code,
                city,
                province,
                quantity_apartment,
                floor_number,
                build_type,
            }
        );

        res.status(200).json({
            success: true,
            message: "Building updated successfully",
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating building",
            error: error
        });
        
    }
}

export { createBuilding, updateBuilding }