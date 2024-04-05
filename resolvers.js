export const resolvers = {
  Query: {
    job: () => {
      return [
        {
          title: "New Job",
          description: "New Description",
        },
      ];
    },
  },
};
