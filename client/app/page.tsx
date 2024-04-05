import Image from "next/image";
import { jobs } from "@/lib/fake-data";
import JobList from "@/components/JobList";

export default function Home() {
  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
