const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'job_management',
  password: 'CyberMind',
  port: 5432,
});

class JobsService {
  async getAllJobs() {
    const result = await pool.query('SELECT * FROM jobs ORDER BY id DESC');
    return result.rows;
  }

  async createJob(jobData) {
    const client = await pool.connect();
    try {
      const {
        title,
        company,
        location,
        job_type,
        description,
        requirements,
        responsibilities,
        applicationDeadline,
      } = jobData;

      const salary_min = parseInt(jobData.salary_min, 10) || 0;
      const salary_max = parseInt(jobData.salary_max, 10) || 0;

      const query = `
        INSERT INTO jobs (
          title,
          company,
          location,
          job_type,
          salary_min,
          salary_max,
          description,
          requirements,
          responsibilities,
          deadline
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
      `;

      const values = [
        title,
        company,
        location,
        job_type,
        salary_min,
        salary_max,
        description,
        requirements,
        responsibilities,
        applicationDeadline,
      ];

      const result = await client.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating job:', error);
      throw error;
    } finally {
      client.release();
    }
  }

}

module.exports = JobsService;
