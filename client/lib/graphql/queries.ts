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

export async function getJob(id: any) {
  const query = gql`
    query JobById($id: Int!) {
      job(id: $id) {
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
  const { job } = (await client.request(query, { id: Number(id) })) as any;
  return job;
}

export async function getCompany(id: any) {
  const query = gql`
    query CompanyById($id: Int!) {
      company(id: $id) {
        id
        name
        description
        createdAt
        updatedAt
        jobs {
          id
          title
          description
        }
      }
    }
  `;

  const { company } = (await client.request(query, { id: Number(id) })) as any;
  return company;
}
