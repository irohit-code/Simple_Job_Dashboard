export async function fetchJobs() {
  try {
    const response = await fetch('https://simple-job-dashboard.onrender.com/jobs'); // ← Adjust this if backend port is different
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}
