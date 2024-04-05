import Link from "next/link";
import { jobs } from "@/lib/fake-data";
import { getJob } from "@/lib/graphql/queries";

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

export default async function JobPage({ params }: { params: any }) {
  const job = await getJob(params.id);

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
