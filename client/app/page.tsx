import Image from "next/image";
import { jobs } from "@/lib/fake-data";
import JobList from "@/components/JobList";
import axios from "axios";
import { API_URL } from "@/lib/config";

export default async function Home() {
  const { data } = await axios.post(
    API_URL,
    JSON.stringify({
      query: `
      query{
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
    `,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={data.data.jobs} />
    </div>
  );
}
