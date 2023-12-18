const express = require("express");
const router = express.Router();
const opportunityController = require("../controllers/opportunities");

router.post("/", opportunityController.createOpportunity);
router.get("/", opportunityController.getAllOpportunities);
router.get("/:name", opportunityController.getOpportunityByCompanyName);

module.exports = router;