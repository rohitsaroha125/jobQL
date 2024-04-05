import prisma from "../lib/client.js";

export async function getCompany(id) {
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });
  return company;
}
