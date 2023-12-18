const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team");

router.post("/", teamController.createTeamMember);
router.get("/", teamController.getAllTeamMembers);
router.get("/:name", teamController.getTeamMembersByCompanyName);



module.exports = router;
