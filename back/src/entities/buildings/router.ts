
import { Router } from "express";
import * as building from "./buildings";
import { auth } from "../../core/middleware/auth";

const router = Router();

router.post('/auth/admin/create', auth, building.createBuilding);

export default router;