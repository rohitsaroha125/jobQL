import { GraphQLClient, gql } from "graphql-request";
import { API_URL } from "../config";

const client = new GraphQLClient(API_URL);

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        title
        description
        createdAt
        updatedAt
        company {
          id
          name
        }
      }
    }
  `;

  const { jobs } = (await client.request(query)) as any;
  return jobs;
}
