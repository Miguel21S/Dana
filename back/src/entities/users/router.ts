import { Router } from "express";
import * as user from "./users";
import { auth } from "../../core/middleware/auth";


const router = Router();

router.get('/auth/admin/listUsers/:id', auth, user.getUsers);
router.delete('/auth/admin/deleteUser/:id', auth, user.deleteUser);
router.get('/auth/user/profile/:id', auth, user.getPrifile);

export default router;