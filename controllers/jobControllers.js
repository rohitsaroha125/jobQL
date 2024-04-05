import prisma from "../lib/client.js";

export async function getJobs() {
  const allJobs = await prisma.job.findMany();
  console.log("jobs are ", allJobs);
  return allJobs;
}
