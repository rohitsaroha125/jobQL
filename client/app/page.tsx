import Image from "next/image";
import { jobs } from "@/lib/fake-data";
import JobList from "@/components/JobList";
import axios from "axios";
import { API_URL } from "@/lib/config";
import { getJobs } from "@/lib/graphql/queries";

export default async function Home() {
  const jobs = await getJobs();

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
