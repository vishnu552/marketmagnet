

const opportunitiesModel = require('../models/opportunities.model');

async function getCompanyData(CompanyName) {
    try {
      const result = await opportunitiesModel.aggregate([
        {
          $match: { CompanyName: CompanyName },
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
