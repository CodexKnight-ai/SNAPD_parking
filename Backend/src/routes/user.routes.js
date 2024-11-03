import { Router } from "express"
import { registerUser,loginUser,logoutUser,refreshAccessToken,getCurrentUser } from "../controllers/user.controller.js";

const router=Router();
router.route("/sign-up").post(
    registerUser
)
router.route("/login").post(
    loginUser
)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/current-user").get(getCurrentUser)



export default router;