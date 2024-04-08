import prisma from "../lib/client.js";

export async function getCompany(id) {
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });
  return company;
}

export async function getJobsByCompany(id) {
  const jobs = await prisma.job.findMany({
    where: {
      companyId: id,
    },
  });
  return jobs;
}