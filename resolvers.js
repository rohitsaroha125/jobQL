import {
  getJobs,
  getJob,
  createJob,
  deleteJob,
} from "./controllers/jobControllers.js";
import {
  getCompany,
  getJobsByCompany,
} from "./controllers/companyController.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    job: async (_root, args, context) => {
      console.log("Context is ", context);
      return await getJob(args.id);
    },
    company: async (__root, { id }) => {
      const company = await getCompany(id);
      if (!company) {
        throw new GraphQLError("No Company found with this id", {
          extensions: { code: "NOT_FOUND" },
        });
      }
      return company;
    },
  },

  Mutation: {
    createJob: (__root, { title, description }, context) => {
      if (!context.userId) {
        throw new GraphQLError("You are not authorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      return createJob(title, description);
    },
    deleteJob: (__root, { id }) => {
      return deleteJob(id);
    },
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },

  //   Job: {
  //     createdAt: (job) => {
  //       return job.createdAt;
  //     },
  //   },
};
