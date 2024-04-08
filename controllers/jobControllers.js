import prisma from "../lib/client.js";

export async function getJobs() {
  try {
    const allJobs = await prisma.job.findMany({
      relationLoadStrategy: "join",
      include: {
        company: true,
      },
    });
    return allJobs;
  } catch (err) {
    console.log("Error is ", err);
  }
}

export async function getJob(id) {
  try {
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
  } catch (err) {
    console.log("Error is ", err);
  }
}

export async function createJob(title, description) {
  try {
    const jobCreated = await prisma.job.create({
      data: {
        companyId: 2,
        title,
        description,
      },
    });
    return jobCreated;
  } catch (err) {
    console.log("Error is ", err);
  }
}

export async function deleteJob(id) {
  try {
    const deletedJob = await prisma.job.deleteMany({
      where: {
        id,
      },
    });
    return deletedJob;
  } catch (err) {
    console.log("Error is ", err);
  }
}
