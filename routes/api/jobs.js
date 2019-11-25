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
    check('company', 'Company is required!')
      .not()
      .isEmpty(),
    check('jobTitle', 'Job Title is required')
      .not()
      .isEmpty(),
    check('pay', 'Pay/Pay Rate is required')
      .not()
      .isEmpty(),
    check('payPeriod', 'Pay Period is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Get the user
      const user = await User.findById(req.user.id).select('-password');

      const {
        company,
        jobTitle,
        pay,
        payPeriod,
        street,
        city,
        state,
        zipcode,
        country,
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
        street,
        city,
        state,
        zipcode,
        country,
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

// @route GET api/jobs
// @desc Get all jobs
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    // console.log(req.user.id);
    const jobs = await Job.find({ user: req.user.id });
    res.json(jobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route PUT api/jobs/:job_id
// desc Edit selected job
// @access Private
router.put('/:job_id', auth, [], async (req, res) => {
  try {
    const job = await Job.findById(req.params.job_id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not athorized' });
    }

    const {
      company,
      jobTitle,
      pay,
      payPeriod,
      street,
      city,
      state,
      zipcode,
      country,
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

    job.company = company;
    job.jobTitle = jobTitle;
    job.pay = pay;
    job.payPeriod = payPeriod;
    job.street = street;
    job.city = city;
    job.state = state;
    job.zipcode = zipcode;
    job.country = country;
    job.phoneNumber = phoneNumber;
    job.email = email;
    job.website = website;
    job.federalIncomeTax = federalIncomeTax;
    job.stateIncomeTax = stateIncomeTax;
    job.socialSecurity = socialSecurity;
    job.medicare = medicare;
    job.individualRetirement = individualRetirement;
    job.otherWithholdings = otherWithholdings;

    await job.save();

    res.json(job);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
  }
});

// @route DELETE api/jobs/:job_id
// @desc Delete selected job
// @access Private
router.delete('/:job_id', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.job_id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await job.remove();

    res.json({ msg: 'Job removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Job not found' });
    }
  }
});

module.exports = router;
