import { Request, Response, } from "express";
import { Building } from "../models/Building";


const createBuilding = async (req: Request, res: Response) => {
    try {
        const { roleName } = req.tokenData;
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

const getBuildings = async (req: Request, res: Response) => {
    try {
        const { roleName } = req.tokenData;

        if (roleName !== 'admin') {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;
        }

        const buildings = await Building.find({
            select: {
                address: true,
                number_build: true,
                postal_code: true,
                city: true,
                province: true,
                quantity_apartment: true,
                build_type: true,
                floor_number: true,
                image_path: true,
            }
        })

        res.status(200).json({
            success: true,
            message: "Buildings retrieved successfully",
            data: buildings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving buildings",
            error: error
        });

    }
}

const updateBuilding = async (req: Request, res: Response) => {
    try {
        const { roleName } = req.tokenData;
        const building_id = req.params.id;
        const { address, number_build, postal_code, city, province, quantity_apartment, floor_number, build_type } = req.body;

        if (roleName !== "admin") {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;
        }

        if (isNaN(parseInt(building_id))) {
            res.status(400).json({
                success: false,
                message: "Invalid building ID",
            });
            return;
        }

        const building = await Building.findOne({ where: { id: parseInt(building_id) } });

        if (!building) {
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

const deleteBuilding = async (req: Request, res: Response) => {
    try {
        const { roleName } = req.tokenData;
        const building_id = req.params.id;

        if (roleName !== 'admin') {
            res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
            return;
        }

        if (isNaN(parseInt(building_id))) {
            res.status(400).json({
                success: false,
                message: "Invalid building ID",
            });
            return;
        }

        const building = await Building.findOne({ where: { id: parseInt(building_id) } });

        if (!building) {
            res.status(404).json({
                success: false,
                message: "Building not found",
            });
            return;
        }

        await Building.delete(building.id);

        res.status(200).json({
            success: true,
            message: "Building deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting building",
            error: error
        });

    }
}

export { createBuilding, updateBuilding, deleteBuilding, getBuildings }