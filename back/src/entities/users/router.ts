import { Router } from "express";
import * as user from "./users";
import { auth } from "../../core/middleware/auth";


const router = Router();

router.get('/auth/admin', auth, user.getUsers);
router.get('/auth/user', auth, user.getPrifile);

export default router;