
import { Router } from "express";
import * as building from "./buildings";
import { auth } from "../../core/middleware/auth";

const router = Router();

router.post('/auth/admin/create/building', auth, building.createBuilding);
router.put('/auth/admin/update/building/:id', auth, building.updateBuilding);

export default router;