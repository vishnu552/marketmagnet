

const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/company/:companyName', async (req, res) => {
  const { companyName } = req.params;
  try {
    const companyData = await companyController.getCompanyData(companyName);
    res.json(companyData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
