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
        salaryRange,
        description,
        requirements,
        responsibilities,
        applicationDeadline,
      } = jobData;

      // map to snake_case for DB

      // Split salaryRange (e.g. "50000-70000") into min and max
      const [salaryMin, salaryMax] = salaryRange
        ? salaryRange.split('-').map(s => parseInt(s.trim(), 10))
        : [null, null];

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
        salaryMin,
        salaryMax,
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
