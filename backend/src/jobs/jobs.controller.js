class JobsController {
    constructor(jobsService) {
      this.jobsService = jobsService;
  
      this.getAllJobs = this.getAllJobs.bind(this);
      this.createJob = this.createJob.bind(this);
    }
  
    async getAllJobs(req, res) {
      const jobs = await this.jobsService.getAllJobs();
      res.json(jobs);
    }
  
    async createJob(req, res) {
      const job = await this.jobsService.createJob(req.body);
      res.status(201).json(job);
    }
  }
  
  module.exports = JobsController;
  