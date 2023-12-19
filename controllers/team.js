const Team = require("../models/team.model");

exports.createTeamMember = async (req, res) => {
 const teamMember = new Team(req.body);
 try {
  await teamMember.save();
  res.status(201).json(teamMember);
 } catch (error) {
  res.status(400).json({ message: error.message });
 }
};

exports.getAllTeamMembers = async (req, res) => {
 try {
  const teamMembers = await Team.find();
  res.status(200).json(teamMembers);
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

exports.getTeamMembersByCompanyName = async (req, res) => {
    try {
    const teamMembers = await Team.find({ CompanyName: req.params.name });
    if (!teamMembers) {
      return res.status(404).json({ message: "No team members found" });
    }
    res.status(200).json(teamMembers);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};
   
