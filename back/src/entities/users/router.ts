import { Router } from "express";
import * as user from "./users";


const router = Router();

router.get('/auth/admin', user.getUsers);

export default router;