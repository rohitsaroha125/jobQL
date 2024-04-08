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

export async function createJob(title, description) {
  const jobCreated = await prisma.job.create({
    data: {
      companyId: 2,
      title,
      description,
    },
  });
  return jobCreated;
}
