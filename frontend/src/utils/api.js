export async function fetchJobs() {
  try {
    const response = await fetch('http://localhost:3000/jobs'); // ← Adjust this if backend port is different
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}
