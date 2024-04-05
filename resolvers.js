import { getJobs } from "./controllers/jobControllers.js";

export const resolvers = {
  Query: {
    job: getJobs,
  },
};
