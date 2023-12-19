const Opportunities = require("../models/opportunities.model.js");

exports.createOpportunity = async (req, res) => {
 const opportunity = new Opportunities(req.body);
 try {
   await opportunity.save();
   res.status(201).json(opportunity);
 } catch (error) {
   res.status(400).json({ message: error.message });
 }
};

exports.getAllOpportunities = async (req, res) => {
 try {
   const opportunities = await Opportunities.find();
   res.status(200).json(opportunities);
 } catch (error) {
   res.status(500).json({ message: error.message });
 }
};

exports.getOpportunityByCompanyName = async (req, res) => {
    try {
     const opportunity = await Opportunities.findOne({ CompanyName: req.params.name });
     if (!opportunity) {
       return res.status(404).json({ message: "Opportunity not found" });
     }
     res.status(200).json(opportunity);
    } catch (error) {
     res.status(500).json({ message: error.message });
    }
   };
   
