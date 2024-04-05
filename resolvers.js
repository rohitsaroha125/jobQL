import { getJobs } from "./controllers/jobControllers.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
  },

  //   Job: {
  //     createdAt: (job) => {
  //       return job.createdAt;
  //     },
  //   },
};
