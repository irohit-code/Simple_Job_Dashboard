const { NestFactory } = require('@nestjs/core');
const AppModule = require('./jobs/jobs.module');
const express = require('express');
const JobsService = require('./jobs/jobs.service');
const JobsController = require('./jobs/jobs.controller');
const JobsModule = require('./jobs/jobs.module').register();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const expressApp = app.getHttpAdapter().getInstance();
  app.enableCors(); 

  const jobsService = new JobsService();
  const jobsController = new JobsController(jobsService);


  
  expressApp.get('/jobs', jobsController.getAllJobs);
  expressApp.use(express.json());
  expressApp.post('/jobs', jobsController.createJob);

  await app.listen(3000);
}
bootstrap();
