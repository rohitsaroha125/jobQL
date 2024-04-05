import { getJobs, getJob } from "./controllers/jobControllers.js";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    job: (_root, args) => {
      console.log("Query Args: ", args);
      return getJob(args.id);
    },
  },

  //   Job: {
  //     createdAt: (job) => {
  //       return job.createdAt;
  //     },
  //   },
};
