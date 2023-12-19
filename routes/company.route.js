

const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/company/:CompanyName', async (req, res) => {
  const { CompanyName } = req.params;
  try {
    const companyData = await companyController.getCompanyData(CompanyName);
    res.json(companyData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
