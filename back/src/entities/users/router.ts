import { Router } from "express";
import * as user from "./users";
import { auth } from "../../core/middleware/auth";


const router = Router();

router.get('/auth/admin/list/users', auth, user.getUsers);
router.put('/auth/admin/user/update/:id', auth, user.updateUsers);
router.delete('/auth/admin/delete/user/:id', auth, user.deleteUser);
router.get('/auth/user/profile/:id', auth, user.getPrifile);

export default router;