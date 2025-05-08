const JobsController = require('./jobs.controller');
const JobsService = require('./jobs.service');

class JobsModule {
  static register() {
    return {
      module: JobsModule,
      controllers: [JobsController],
      providers: [JobsService],
    };
  }
}

module.exports = JobsModule;
