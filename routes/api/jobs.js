const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Job = require('../../models/Job');

// @route POST api/jobs
// @desc Create a job
// @access Private
router.post(
  '/',
  auth,
  [
    // TODO: add checks
  ],
  async (req, res) => {
    try {
      // Get the user
      const user = await User.findById(req.user.id).select('-password');

      const {
        company,
        jobTitle,
        pay,
        payPeriod,
        address,
        phoneNumber,
        email,
        website,
        federalIncomeTax,
        stateIncomeTax,
        socialSecurity,
        medicare,
        individualRetirement,
        otherWithholdings
      } = req.body;

      //  create new job object
      const newJob = new Job({
        user: req.user.id,
        company,
        jobTitle,
        pay,
        payPeriod,
        address,
        phoneNumber,
        email,
        website,
        federalIncomeTax,
        stateIncomeTax,
        socialSecurity,
        medicare,
        individualRetirement,
        otherWithholdings
      });

      // save
      const job = await newJob.save();

      res.json(job);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route POST api/jobs
// @desc Create a job
// @access Private
router.get('/', auth, async (res, req) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;