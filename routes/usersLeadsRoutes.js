
const express = require("express");
const userLeadController = require("../controllers/user.Leads.Controllers");


const router = express.Router();

router.post("/addNewUserLeads", userLeadController.createNewUserLeads);
router.get("/getUserLeadList", userLeadController.getUserLeadList);
// router.post("/addNew", userLeadController.createTodo);
// router.put("/:id", userLeadController.updateTodo);
// router.delete("/:id", userLeadController.deleteTodo);

module.exports = router;
