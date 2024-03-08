
const express = require("express");
const userLoginController = require("../controllers/user_login_controllers");

const router = express.Router();

router.post("/userLogin", userLoginController.createNewUserLogin);
router.post("/getUserLoginDetails", userLoginController.getUserLoginDetails);
router.get("/getUserLogins", userLoginController.getUserLoginsList);
router.post("/updateUserLogin", userLoginController.updateUserLoginDetails);
router.delete("/:id", userLoginController.deleteUserLoginDetails);

module.exports = router;
