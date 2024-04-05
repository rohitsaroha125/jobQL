import prisma from "../lib/client.js";

export async function getJobs() {
  const allJobs = await prisma.job.findMany({
    relationLoadStrategy: "join",
    include: {
      company: true,
    },
  });
  return allJobs;
}

export async function getJob(id) {
  const job = await prisma.job.findUnique({
    relationLoadStrategy: "join",
    include: {
      company: true,
    },
    where: {
      id,
    },
  });
  return job;
}
