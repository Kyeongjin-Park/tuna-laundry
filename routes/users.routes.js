const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUser);
router.post("/login", usersController.authUser);
router.post("/logout", usersController.postUser);
router.put("/mypage", authMiddleware, usersController.updateUser);
router.put("/updatepoint",usersController.updatePoint)
router.get("/myinfo", usersController.myInfo)
router.get("/nickname", usersController.myNickName)
module.exports = router;