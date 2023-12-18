const Investor = require("../models/investor.model");

exports.createInvestor = async (req, res) => {
 const investor = new Investor(req.body);
 try {
  await investor.save();
  res.status(201).json(investor);
 } catch (error) {
  res.status(400).json({ message: error.message });
 }
};

exports.getAllInvestor = async (req, res) => {
 try {
  const investor = await Investor.find();
  res.status(200).json(investor);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

exports.getAllInvestorMembersByCompanyName = async (req, res) => {
    try {
    const investor = await Investor.find({ CompanyName: req.params.name });
    if (!investor) {
      return res.status(404).json({ message: "No team members found" });
    }
    res.status(200).json(investor);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};
   
