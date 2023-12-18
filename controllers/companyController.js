// controllers/companyController.js

const opportunitiesModel = require('../models/opportunities.model');
const teamModel = require('../models/team.model');
const investorModel = require('../models/investor.model');

async function getCompanyData(companyName) {
    try {
      const result = await opportunitiesModel.aggregate([
        {
          $match: { CompanyName: companyName },
        },
        {
          $lookup: {
            from: 'team',
            localField: 'CompanyName',
            foreignField: 'CompanyName',
            as: 'teamMembers',
          },
        },
        {
          $lookup: {
            from: 'investor', 
            localField: 'CompanyName',
            foreignField: 'CompanyName',
            as: 'investors',
          },
        },
      ]);
  
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

module.exports = {
  getCompanyData,
};
