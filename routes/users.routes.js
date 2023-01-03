const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();

router.post("/signup", usersController.createUsers);
router.post("/login", usersController.authUsers);
router.post("/logout", usersController.postUsers);
router.put("/mypage", usersController.updateUsers);


module.exports = router;