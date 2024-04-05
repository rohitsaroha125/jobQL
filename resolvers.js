import { getJobs, getJob } from "./controllers/jobControllers.js";
import { getCompany } from "./controllers/companyController.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    job: (_root, args) => {
      return getJob(args.id);
    },
    company: (__root, { id }) => {
      return getCompany(id);
    },
  },

  //   Job: {
  //     createdAt: (job) => {
  //       return job.createdAt;
  //     },
  //   },
};
