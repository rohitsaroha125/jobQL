import prisma from "../lib/client.js";

export async function getJobs() {
  const allJobs = await prisma.job.findMany({
    relationLoadStrategy: "join",
    include: {
      company: true,
    },
  });
  console.log("jobs are ", allJobs);
  return allJobs;
}
