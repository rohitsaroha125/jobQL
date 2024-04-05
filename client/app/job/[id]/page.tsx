import Link from "next/link";
import { jobs } from "@/lib/fake-data";

interface JobItemInterface {
  id: string;
  title: string;
  company: {
    id: string;
    name: string;
    description: string;
  };
  date: string;
  description: string;
}

export default function JobPage({ params }: { params: any }) {
  const { id } = params;

  const job: JobItemInterface | undefined = jobs.find((job) => job.id === id);

  return (
    <div>
      {job && (
        <>
          <h1 className="title is-2">{job.title}</h1>
          <h2 className="subtitle is-4">
            <Link href={`/company/${job.company.id}`}>{job.company.name}</Link>
          </h2>
          <div className="box">
            <div className="block has-text-grey">
              {/* Posted: {formatDate(job.date, "long")} */}
            </div>
            <p className="block">{job.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
