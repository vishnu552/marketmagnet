const express = require("express");
const router = express.Router();
const investorController = require("../controllers/investor");

router.post("/", investorController.createInvestor);
router.get("/", investorController.getAllInvestor);
router.get("/:name", investorController.getAllInvestorMembersByCompanyName);

module.exports = router;